import express from 'express';
import Income from '../models/Income.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

// Protect all routes
router.use(protect);

// @route   POST /api/income
// @desc    Add new income
// @access  Private
router.post('/', async (req, res) => {
  const { amount, source, date, currency } = req.body;

  try {
    const newIncome = new Income({
      user: req.user.id,
      amount,
      source,
      date,
      currency
    });

    const income = await newIncome.save();
    res.json(income);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET /api/income
// @desc    Get all income records
// @access  Private
router.get('/', async (req, res) => {
  try {
    const incomes = await Income.find({ user: req.user.id }).sort({ date: -1 });
    res.json(incomes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

export default router;
