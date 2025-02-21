import express from 'express';
import Expense from '../models/Expense.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

// Protect all routes
router.use(protect);

// @route   POST /api/expenses
// @desc    Create new expense
// @access  Private
router.post('/', async (req, res) => {
  const { amount, category, description, isRecurring, recurringFrequency, currency } = req.body;

  try {
    const newExpense = new Expense({
      user: req.user.id,
      amount,
      category,
      description,
      isRecurring,
      recurringFrequency,
      currency
    });

    const expense = await newExpense.save();
    res.json(expense);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET /api/expenses
// @desc    Get all expenses
// @access  Private
router.get('/', async (req, res) => {
  try {
    const expenses = await Expense.find({ user: req.user.id }).sort({ date: -1 });
    res.json(expenses);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   PUT /api/expenses/:id
// @desc    Update expense
// @access  Private
router.put('/:id', async (req, res) => {
  const { amount, category, description, isRecurring, recurringFrequency, currency } = req.body;

  try {
    const expense = await Expense.findById(req.params.id);

    if (!expense) {
      return res.status(404).json({ message: 'Expense not found' });
    }

    // Check if expense belongs to user
    if (expense.user.toString() !== req.user.id) {
      return res.status(401).json({ message: 'Not authorized' });
    }

    expense.amount = amount;
    expense.category = category;
    expense.description = description;
    expense.isRecurring = isRecurring;
    expense.recurringFrequency = recurringFrequency;
    expense.currency = currency;

    await expense.save();
    res.json(expense);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   DELETE /api/expenses/:id
// @desc    Delete expense
// @access  Private
router.delete('/:id', async (req, res) => {
  try {
    const expense = await Expense.findById(req.params.id);

    if (!expense) {
      return res.status(404).json({ message: 'Expense not found' });
    }

    // Check if expense belongs to user
    if (expense.user.toString() !== req.user.id) {
      return res.status(401).json({ message: 'Not authorized' });
    }

    await expense.remove();
    res.json({ message: 'Expense removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

export default router;
