const express = require('express');
const router = express.Router();
const Expense = require('../models/Expense');

// @route   GET api/expenses
// @desc    Get all expenses
// @access  Public
router.get('/', async (req, res) => {
  try {
    const expenses = await Expense.find().sort({ date: -1 });
    res.json(expenses);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/expenses
// @desc    Add new expense
// @access  Public
router.post('/', async (req, res) => {
  const { description, amount } = req.body;

  try {
    const newExpense = new Expense({
      description,
      amount
    });

    const expense = await newExpense.save();
    res.json(expense);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   PUT api/expenses/:id
// @desc    Update expense
// @access  Public
router.put('/:id', async (req, res) => {
  const { description, amount } = req.body;

  const expenseFields = {};
  if (description) expenseFields.description = description;
  if (amount) expenseFields.amount = amount;

  try {
    let expense = await Expense.findById(req.params.id);

    if (!expense) return res.status(404).json({ msg: 'Expense not found' });

    expense = await Expense.findByIdAndUpdate(
      req.params.id,
      { $set: expenseFields },
      { new: true }
    );

    res.json(expense);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   DELETE api/expenses/:id
// @desc    Delete expense
// @access  Public
router.delete('/:id', async (req, res) => {
  try {
    let expense = await Expense.findById(req.params.id);

    if (!expense) return res.status(404).json({ msg: 'Expense not found' });

    await Expense.findByIdAndRemove(req.params.id);

    res.json({ msg: 'Expense removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
