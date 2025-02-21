import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { 
  BarChart, 
  Bar, 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';
import { Download, Calendar, Filter, TrendingUp, TrendingDown } from 'lucide-react';

const AnalyticsPage = () => {
  const [dateRange, setDateRange] = useState('Last 6 Months');
  
  const monthlyData = [
    { month: 'Sep', income: 6000, expenses: 4200, savings: 1800 },
    { month: 'Oct', income: 6200, expenses: 4100, savings: 2100 },
    { month: 'Nov', income: 6100, expenses: 4300, savings: 1800 },
    { month: 'Dec', income: 6500, expenses: 4800, savings: 1700 },
    { month: 'Jan', income: 6300, expenses: 4200, savings: 2100 },
    { month: 'Feb', income: 6800, expenses: 4400, savings: 2400 }
  ];

  const categoryData = [
    { category: 'Housing', amount: 1800, percentage: 40 },
    { category: 'Food', amount: 750, percentage: 17 },
    { category: 'Transportation', amount: 380, percentage: 9 },
    { category: 'Entertainment', amount: 290, percentage: 7 },
    { category: 'Shopping', amount: 480, percentage: 11 },
    { category: 'Others', amount: 700, percentage: 16 }
  ];

  return (
    <div>
      <Navigation />
      <div className="p-6 space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Analytics & Reports</h1>
            <p className="text-gray-600 mt-1">Track your financial progress over time</p>
          </div>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50">
              <Calendar className="w-4 h-4" />
              {dateRange}
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50">
              <Filter className="w-4 h-4" />
              Filter
            </button>
            <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              <Download className="w-4 h-4" />
              Export Report
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm text-gray-600">Monthly Savings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <TrendingUp className="w-8 h-8 text-green-500" />
                <div className="ml-4">
                  <div className="text-2xl font-bold">$2,400</div>
                  <div className="text-sm text-green-600">+14.5% vs last month</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm text-gray-600">Average Expenses</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <TrendingDown className="w-8 h-8 text-red-500" />
                <div className="ml-4">
                  <div className="text-2xl font-bold">$4,400</div>
                  <div className="text-sm text-red-600">+4.8% vs last month</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm text-gray-600">Savings Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-600 font-bold">%</span>
                </div>
                <div className="ml-4">
                  <div className="text-2xl font-bold">35.3%</div>
                  <div className="text-sm text-blue-600">+2.1% vs last month</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Income vs Expenses Trend</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="income" 
                      stroke="#10B981" 
                      strokeWidth={2}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="expenses" 
                      stroke="#EF4444" 
                      strokeWidth={2}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="savings" 
                      stroke="#3B82F6" 
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Expense Categories</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="value">
                  <BarChart data={categoryData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="category" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="amount" fill="#8B5CF6" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Spending Categories Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {categoryData.map((item) => (
                <div key={item.category} className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <div className="w-full">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">{item.category}</span>
                      <span className="text-gray-600">${item.amount}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-purple-600 h-2 rounded-full"
                          style={{ width: `${item.percentage}%` }}
                        />
                      </div>
                      <span className="ml-4 text-sm text-gray-600">{item.percentage}%</span>
                    </div>
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

export default AnalyticsPage;
