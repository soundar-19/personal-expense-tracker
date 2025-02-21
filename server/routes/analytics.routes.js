import express from 'express';
import Expense from '../models/Expense.js';
import Income from '../models/Income.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

// Protect all routes
router.use(protect);

// @route   GET /api/analytics/summary
// @desc    Get financial summary
// @access  Private
router.get('/summary', async (req, res) => {
  try {
    const currentDate = new Date();
    const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

    const [totalExpenses, totalIncome] = await Promise.all([
      Expense.aggregate([
        { 
          $match: { 
            user: req.user.id,
            date: { $gte: startOfMonth, $lte: endOfMonth }
          }
        },
        {
          $group: {
            _id: null,
            total: { $sum: '$amount' }
          }
        }
      ]),
      Income.aggregate([
        { 
          $match: { 
            user: req.user.id,
            date: { $gte: startOfMonth, $lte: endOfMonth }
          }
        },
        {
          $group: {
            _id: null,
            total: { $sum: '$amount' }
          }
        }
      ])
    ]);

    res.json({
      totalExpenses: totalExpenses[0]?.total || 0,
      totalIncome: totalIncome[0]?.total || 0,
      netSavings: (totalIncome[0]?.total || 0) - (totalExpenses[0]?.total || 0)
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET /api/analytics/categories
// @desc    Get category-wise spending
// @access  Private
router.get('/categories', async (req, res) => {
  try {
    const currentDate = new Date();
    const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

    const categorySpending = await Expense.aggregate([
      {
        $match: {
          user: req.user.id,
          date: { $gte: startOfMonth, $lte: endOfMonth }
        }
      },
      {
        $group: {
          _id: '$category',
          total: { $sum: '$amount' }
        }
      },
      {
        $sort: { total: -1 }
      }
    ]);

    res.json(categorySpending);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

export default router;
