import mongoose from 'mongoose';

const incomeSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  source: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  currency: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

export default mongoose.model('Income', incomeSchema);
