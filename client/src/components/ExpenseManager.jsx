import React, { useState } from 'react';
import { Card, CardHeader, CardContent } from './ui/card';
import { Plus, Filter, Upload, MoreVertical } from 'lucide-react';

const ExpenseManager = () => {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: 'Grocery Shopping',
      amount: 150.50,
      category: 'Food',
      date: '2025-02-20',
      recurring: false
    },
    {
      id: 2,
      description: 'Netflix Subscription',
      amount: 14.99,
      category: 'Entertainment',
      date: '2025-02-15',
      recurring: true
    }
  ]);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Expense Management</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors">
          <Plus className="w-5 h-5" />
          Add Expense
        </button>
      </div>

      {/* Filters and Search */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
              <select className="w-full border rounded-lg p-2">
                <option>All Categories</option>
                <option>Food</option>
                <option>Transportation</option>
                <option>Entertainment</option>
                <option>Bills</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Date Range</label>
              <input type="date" className="w-full border rounded-lg p-2" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Amount Range</label>
              <input type="number" placeholder="Min Amount" className="w-full border rounded-lg p-2" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">&nbsp;</label>
              <button className="w-full bg-gray-100 text-gray-700 px-4 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors">
                <Filter className="w-4 h-4" />
                Apply Filters
              </button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Expense List */}
      <Card>
        <CardHeader>
          <h3 className="text-xl font-semibold">Recent Expenses</h3>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {expenses.map((expense) => (
                  <tr key={expense.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">{expense.description}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                        {expense.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      ${expense.amount.toFixed(2)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {expense.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {expense.recurring ? 'Recurring' : 'One-time'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-gray-400 hover:text-gray-500">
                        <MoreVertical className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Receipt Upload Area */}
      <Card className="mt-8">
        <CardContent className="p-6">
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
            <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-1">Upload Receipts</h3>
            <p className="text-sm text-gray-500 mb-4">Drag and drop your receipt images or click to browse</p>
            <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
              Browse Files
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ExpenseManager;
