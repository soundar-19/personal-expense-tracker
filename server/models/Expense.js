import mongoose from 'mongoose';

const expenseSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  description: String,
  date: {
    type: Date,
    default: Date.now,
  },
  isRecurring: {
    type: Boolean,
    default: false,
  },
  recurringFrequency: {
    type: String,
    enum: ['weekly', 'monthly', 'yearly'],
  },
  receipt: {
    type: String, // URL to stored image
  },
  currency: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

export default mongoose.model('Expense', expenseSchema);
