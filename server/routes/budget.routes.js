import express from 'express';
import Budget from '../models/Budget.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

// Protect all routes
router.use(protect);

// @route   POST /api/budgets
// @desc    Create or update a budget
// @access  Private
router.post('/', async (req, res) => {
  const { category, amount, period } = req.body;

  try {
    let budget = await Budget.findOne({ user: req.user.id, category });

    if (budget) {
      // Update existing budget
      budget.amount = amount;
      budget.period = period;
    } else {
      // Create new budget
      budget = new Budget({
        user: req.user.id,
        category,
        amount,
        period
      });
    }

    await budget.save();
    res.json(budget);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET /api/budgets
// @desc    Get all budgets
// @access  Private
router.get('/', async (req, res) => {
  try {
    const budgets = await Budget.find({ user: req.user.id });
    res.json(budgets);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

export default router;
