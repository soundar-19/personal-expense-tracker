import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { CircularProgress } from './ui/progress';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Bell, Wallet, TrendingUp, PieChart } from 'lucide-react';
import axios from 'axios';

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalExpenses: 0,
    totalIncome: 0,
    savingsProgress: 0,
    recentTransactions: []
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const headers = { Authorization: `Bearer ${token}` };

        const [expensesRes, incomeRes, analyticsRes] = await Promise.all([
          axios.get('http://localhost:5000/api/expenses', { headers }),
          axios.get('http://localhost:5000/api/income', { headers }),
          axios.get('http://localhost:5000/api/analytics/summary', { headers })
        ]);

        setStats({
          totalExpenses: analyticsRes.data.totalExpenses,
          totalIncome: analyticsRes.data.totalIncome,
          savingsProgress: ((analyticsRes.data.totalIncome - analyticsRes.data.totalExpenses) / analyticsRes.data.totalIncome) * 100,
          recentTransactions: [...expensesRes.data.slice(0, 3), ...incomeRes.data.slice(0, 3)]
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Mock data for demonstration
  const monthlyData = [
    { name: 'Jan', expenses: 4000, income: 6000 },
    { name: 'Feb', expenses: 3500, income: 6000 },
    { name: 'Mar', expenses: 3800, income: 6200 },
    { name: 'Apr', expenses: 3200, income: 6400 },
    { name: 'May', expenses: 3900, income: 6300 },
    { name: 'Jun', expenses: 3700, income: 6500 }
  ];

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-white">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Total Expenses
            </CardTitle>
            <Wallet className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">
              ${stats.totalExpenses.toLocaleString()}
            </div>
            <p className="text-xs text-gray-600 mt-1">
              +2.5% from last month
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Total Income
            </CardTitle>
            <TrendingUp className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">
              ${stats.totalIncome.toLocaleString()}
            </div>
            <p className="text-xs text-gray-600 mt-1">
              +5.2% from last month
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Savings Progress
            </CardTitle>
            <PieChart className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <CircularProgress value={stats.savingsProgress} className="h-16 w-16" />
              <div className="ml-4">
                <div className="text-2xl font-bold text-gray-900">
                  {Math.round(stats.savingsProgress)}%
                </div>
                <p className="text-xs text-gray-600">of monthly goal</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Alerts
            </CardTitle>
            <Bell className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">3</div>
            <p className="text-xs text-gray-600 mt-1">
              pending notifications
            </p>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-white">
        <CardHeader>
          <CardTitle>Income vs Expenses</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
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
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
