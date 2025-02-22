import React from 'react';
import Navigation from '../components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { LineChart, Line, PieChart, Pie, Cell, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { ArrowUpRight, ArrowDownRight, Wallet, Calendar, Bell, CreditCard, TrendingUp } from 'lucide-react';

const DashboardPage = () => {
  // Sample data - replace with real data in production
  const monthlyTrends = [
    { month: 'Jan', income: 5200, expenses: 4100 },
    { month: 'Feb', income: 5800, expenses: 4300 },
    { month: 'Mar', income: 5400, expenses: 4000 },
    { month: 'Apr', income: 6000, expenses: 4200 },
    { month: 'May', income: 5900, expenses: 4400 },
  ];

  const upcomingBills = [
    { name: 'Rent', amount: 1200, dueDate: '2025-03-01', status: 'pending' },
    { name: 'Electricity', amount: 85, dueDate: '2025-03-05', status: 'pending' },
    { name: 'Internet', amount: 60, dueDate: '2025-03-07', status: 'paid' },
  ];

  const spendingByCategory = [
    { name: 'Housing', value: 1200, color: '#3B82F6' },
    { name: 'Food', value: 450, color: '#10B981' },
    { name: 'Transport', value: 300, color: '#F59E0B' },
    { name: 'Entertainment', value: 200, color: '#8B5CF6' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="p-6 space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Welcome back, Alex!</h1>
            <p className="text-gray-600">Here's your financial overview</p>
          </div>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border hover:bg-gray-50">
              <Calendar className="w-4 h-4" />
              Last 30 Days
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
              <TrendingUp className="w-4 h-4" />
              View Reports
            </button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Wallet className="w-5 h-5" />
                Total Balance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$12,750</div>
              <div className="flex items-center text-blue-100 text-sm mt-2">
                <ArrowUpRight className="w-4 h-4 mr-1" />
                +8.2% from last month
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="w-5 h-5" />
                Monthly Spending
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$4,290</div>
              <div className="flex items-center text-red-500 text-sm mt-2">
                <ArrowDownRight className="w-4 h-4 mr-1" />
                +12.5% from last month
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Monthly Savings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$1,890</div>
              <div className="flex items-center text-green-500 text-sm mt-2">
                <ArrowUpRight className="w-4 h-4 mr-1" />
                +5.3% from target
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="w-5 h-5" />
                Upcoming Bills
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$1,345</div>
              <div className="text-gray-500 text-sm mt-2">
                Due in next 7 days
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts and Additional Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Income vs Expenses</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={monthlyTrends}>
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
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Spending by Category</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={spendingByCategory}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      label
                    >
                      {spendingByCategory.map((entry, index) => (
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

        {/* Upcoming Bills */}
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Bills</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingBills.map((bill, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <h3 className="font-medium">{bill.name}</h3>
                    <p className="text-sm text-gray-500">Due: {bill.dueDate}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-bold">${bill.amount}</span>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      bill.status === 'paid' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {bill.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardPage;
