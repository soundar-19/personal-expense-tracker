import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { User } from 'lucide-react'; // Import User icon

import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Alert, AlertDescription } from '../components/ui/alert';
import { 
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell,
  ResponsiveContainer, XAxis, YAxis, Tooltip, Legend 
} from 'recharts';
import { 
  Wallet, Plus, Calendar, TrendingUp, ArrowUpRight,
  ArrowDownRight, AlertTriangle, DollarSign, Target,
  CreditCard, PiggyBank, Receipt
} from 'lucide-react';

const Dashboard = () => {
  const navigate = useNavigate(); // Initialize navigate
  const [showAddExpense, setShowAddExpense] = useState(false);
  const [showAddBudget, setShowAddBudget] = useState(false);

  // Sample data
  const monthlyOverview = [
    { month: 'Jan', income: 6500, expenses: 4200, savings: 2300 },
    { month: 'Feb', income: 6800, expenses: 4400, savings: 2400 },
    { month: 'Mar', income: 7000, expenses: 4100, savings: 2900 },
    { month: 'Apr', income: 6900, expenses: 4300, savings: 2600 },
  ];

  const expenseCategories = [
    { name: 'Housing', value: 2000, color: '#3B82F6' },
    { name: 'Food', value: 800, color: '#10B981' },
    { name: 'Transport', value: 400, color: '#F59E0B' },
    { name: 'Entertainment', value: 300, color: '#8B5CF6' },
    { name: 'Utilities', value: 500, color: '#EC4899' }
  ];

  const quickActions = [
    { icon: <Plus className="w-5 h-5" />, label: 'Add Expense', onClick: () => setShowAddExpense(true) },
    { icon: <Target className="w-5 h-5" />, label: 'Set Budget', onClick: () => navigate('/budget') },
    { icon: <Receipt className="w-5 h-5" />, label: 'Bills & Payments', onClick: () => navigate('/transactions') },
    { icon: <PiggyBank className="w-5 h-5" />, label: 'Savings Goals', onClick: () => navigate('/goals') }
  ];

  const recentTransactions = [
    { id: 1, description: 'Grocery Shopping', amount: -120, category: 'Food', date: '2025-02-20' },
    { id: 2, description: 'Salary Deposit', amount: 3500, category: 'Income', date: '2025-02-19' },
    { id: 3, description: 'Electric Bill', amount: -85, category: 'Utilities', date: '2025-02-18' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Financial Dashboard</h1>
          <p className="text-gray-600 mt-1">Your financial health at a glance</p>
        </div>
        <div className="flex gap-4">
          <Button variant="outline" className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            February 2025
          </Button>
          <Button className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white">
            <Plus className="w-4 h-4" />
            Add Transaction
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <Wallet className="w-8 h-8" />
              <ArrowUpRight className="w-5 h-5" />
            </div>
            <p className="text-blue-100">Total Balance</p>
            <h3 className="text-2xl font-bold mt-1">$12,750</h3>
            <p className="text-sm text-blue-100 mt-2">+8.2% from last month</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <TrendingUp className="w-8 h-8" />
              <ArrowUpRight className="w-5 h-5" />
            </div>
            <p className="text-green-100">Monthly Income</p>
            <h3 className="text-2xl font-bold mt-1">$6,800</h3>
            <p className="text-sm text-green-100 mt-2">+5.3% from last month</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-red-500 to-red-600 text-white">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <CreditCard className="w-8 h-8" />
              <ArrowDownRight className="w-5 h-5" />
            </div>
            <p className="text-red-100">Monthly Expenses</p>
            <h3 className="text-2xl font-bold mt-1">$4,400</h3>
            <p className="text-sm text-red-100 mt-2">+12.5% from last month</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <PiggyBank className="w-8 h-8" />
              <ArrowUpRight className="w-5 h-5" />
            </div>
            <p className="text-purple-100">Total Savings</p>
            <h3 className="text-2xl font-bold mt-1">$2,400</h3>
            <p className="text-sm text-purple-100 mt-2">+15.2% from last month</p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {quickActions.map((action, index) => (
          <Button
            key={index}
            variant="outline"
            className="h-24 flex flex-col items-center justify-center gap-2 hover:bg-gray-50"
            onClick={action.onClick ? action.onClick : () => navigate('/')} // Default to navigate to home if no action
          >
            {action.icon}
            <span>{action.label}</span>
          </Button>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Income vs Expenses</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={monthlyOverview}>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="income" 
                    stroke="#10B981" 
                    strokeWidth={2}
                    dot={{ r: 4 }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="expenses" 
                    stroke="#EF4444" 
                    strokeWidth={2}
                    dot={{ r: 4 }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="savings" 
                    stroke="#3B82F6" 
                    strokeWidth={2}
                    dot={{ r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Expense Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={expenseCategories}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    label
                  >
                    {expenseCategories.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Transactions */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentTransactions.map((transaction) => (
              <div 
                key={transaction.id} 
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className={`p-2 rounded-full ${
                    transaction.amount > 0 ? 'bg-green-100' : 'bg-red-100'
                  }`}>
                    {transaction.amount > 0 ? (
                      <TrendingUp className="w-5 h-5 text-green-600" />
                    ) : (
                      <TrendingUp className="w-5 h-5 text-red-600" />
                    )}
                  </div>
                  <div>
                    <h3 className="font-medium">{transaction.description}</h3>
                    <p className="text-sm text-gray-500">{transaction.category}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`font-medium ${
                    transaction.amount > 0 ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {transaction.amount > 0 ? '+' : ''}{transaction.amount}
                  </p>
                  <p className="text-sm text-gray-500">{transaction.date}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Add Expense Modal */}
      {showAddExpense && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle>Add New Expense</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Description</label>
                  <Input type="text" placeholder="Enter expense description" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Amount</label>
                  <Input type="number" placeholder="Enter amount" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Category</label>
                  <select className="w-full p-2 border rounded-md">
                    <option>Housing</option>
                    <option>Food</option>
                    <option>Transport</option>
                    <option>Entertainment</option>
                    <option>Utilities</option>
                  </select>
                </div>
                <div className="flex justify-end gap-4">
                  <Button variant="outline" onClick={() => setShowAddExpense(false)}>
                    Cancel
                  </Button>
                  <Button>Add Expense</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
