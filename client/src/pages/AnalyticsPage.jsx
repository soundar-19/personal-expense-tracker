import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

import { 
  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, 
  Tooltip, Legend, ResponsiveContainer, AreaChart, Area 
} from 'recharts';
import { Alert, AlertDescription } from '../components/ui/alert';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/ui/tabs';

import { 
  Download, Calendar, Filter, TrendingUp, TrendingDown, 
  PieChart, ArrowUpRight, ArrowDownRight, Target, AlertTriangle 
} from 'lucide-react';

const AnalyticsPage = () => {
  const [dateRange, setDateRange] = useState('Last 6 Months');
  const [activeView, setActiveView] = useState('overview');
  
  const monthlyData = [
    { month: 'Sep', income: 6000, expenses: 4200, savings: 1800, investmentReturns: 200 },
    { month: 'Oct', income: 6200, expenses: 4100, savings: 2100, investmentReturns: 250 },
    { month: 'Nov', income: 6100, expenses: 4300, savings: 1800, investmentReturns: 180 },
    { month: 'Dec', income: 6500, expenses: 4800, savings: 1700, investmentReturns: 300 },
    { month: 'Jan', income: 6300, expenses: 4200, savings: 2100, investmentReturns: 280 },
    { month: 'Feb', income: 6800, expenses: 4400, savings: 2400, investmentReturns: 320 }
  ];

  const categoryData = [
    { category: 'Housing', amount: 1800, prevAmount: 1750, change: 2.8 },
    { category: 'Food', amount: 750, prevAmount: 800, change: -6.3 },
    { category: 'Transportation', amount: 380, prevAmount: 400, change: -5.0 },
    { category: 'Entertainment', amount: 290, prevAmount: 250, change: 16.0 },
    { category: 'Shopping', amount: 480, prevAmount: 460, change: 4.3 },
    { category: 'Healthcare', amount: 320, prevAmount: 300, change: 6.7 },
    { category: 'Utilities', amount: 240, prevAmount: 230, change: 4.3 },
    { category: 'Others', amount: 700, prevAmount: 680, change: 2.9 }
  ];

  const savingsGoals = [
    { name: 'Emergency Fund', current: 8500, target: 10000, category: 'Savings' },
    { name: 'Vacation', current: 2800, target: 5000, category: 'Travel' },
    { name: 'New Car', current: 12000, target: 25000, category: 'Vehicle' }
  ];

  const insights = [
    { type: 'success', title: 'Savings Growth', description: 'Your savings rate increased by 15% compared to last month.' },
    { type: 'warning', title: 'Entertainment Spending', description: 'Entertainment expenses are 16% higher than usual.' },
    { type: 'info', title: 'Investment Opportunity', description: 'Based on your savings, you could increase your investments.' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="p-6 space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Financial Analytics</h1>
            <p className="text-gray-600 mt-1">Deep insights into your financial health</p>
          </div>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border hover:bg-gray-50">
              <Calendar className="w-4 h-4" />
              {dateRange}
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border hover:bg-gray-50">
              <Filter className="w-4 h-4" />
              Filter
            </button>
            <button className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
              <Download className="w-4 h-4" />
              Export Report
            </button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white">
            <CardHeader>
              <CardTitle className="text-sm font-medium">Monthly Savings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <TrendingUp className="w-8 h-8" />
                <div className="ml-4">
                  <div className="text-2xl font-bold">$2,400</div>
                  <div className="flex items-center text-green-100">
                    <ArrowUpRight className="w-4 h-4 mr-1" />
                    +14.5% vs last month
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-red-500 to-red-600 text-white">
            <CardHeader>
              <CardTitle className="text-sm font-medium">Monthly Expenses</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <TrendingDown className="w-8 h-8" />
                <div className="ml-4">
                  <div className="text-2xl font-bold">$4,400</div>
                  <div className="flex items-center text-red-100">
                    <ArrowUpRight className="w-4 h-4 mr-1" />
                    +4.8% vs last month
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
            <CardHeader>
              <CardTitle className="text-sm font-medium">Investment Returns</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <Target className="w-8 h-8" />
                <div className="ml-4">
                  <div className="text-2xl font-bold">$320</div>
                  <div className="flex items-center text-blue-100">
                    <ArrowUpRight className="w-4 h-4 mr-1" />
                    +14.3% vs last month
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
            <CardHeader>
              <CardTitle className="text-sm font-medium">Savings Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <PieChart className="w-8 h-8" />
                <div className="ml-4">
                  <div className="text-2xl font-bold">35.3%</div>
                  <div className="flex items-center text-purple-100">
                    <ArrowUpRight className="w-4 h-4 mr-1" />
                    +2.1% vs last month
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="trends" className="space-y-6">
          <TabsList className="bg-white border">
            <TabsTrigger value="trends">Trends</TabsTrigger>
            <TabsTrigger value="categories">Categories</TabsTrigger>
            <TabsTrigger value="goals">Goals</TabsTrigger>
            <TabsTrigger value="insights">Insights</TabsTrigger>
          </TabsList>

          <TabsContent value="trends" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Income, Expenses & Savings Trend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-96">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={monthlyData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Area 
                        type="monotone" 
                        dataKey="income" 
                        stackId="1"
                        stroke="#10B981" 
                        fill="#10B981"
                        fillOpacity={0.6}
                      />
                      <Area 
                        type="monotone" 
                        dataKey="expenses" 
                        stackId="2"
                        stroke="#EF4444" 
                        fill="#EF4444"
                        fillOpacity={0.6}
                      />
                      <Area 
                        type="monotone" 
                        dataKey="savings" 
                        stackId="3"
                        stroke="#3B82F6" 
                        fill="#3B82F6"
                        fillOpacity={0.6}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="categories" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Expense Categories</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {categoryData.map((item) => (
                      <div key={item.category} className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium">{item.category}</span>
                          <div className="flex items-center gap-2">
                            <span className="text-gray-600">${item.amount}</span>
                            <span className={`text-sm ${
                              item.change > 0 ? 'text-green-600' : 'text-red-600'
                            }`}>
                              {item.change > 0 ? '+' : ''}{item.change}%
                            </span>
                          </div>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-purple-600 h-2 rounded-full"
                            style={{ width: `${(item.amount / 2000) * 100}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Category Comparison</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-96">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={categoryData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="category" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="amount" fill="#8B5CF6" />
                        <Bar dataKey="prevAmount" fill="#C4B5FD" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="goals" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {savingsGoals.map((goal) => (
                <Card key={goal.name}>
                  <CardHeader>
                    <CardTitle className="flex justify-between">
                      <span>{goal.name}</span>
                      <span className="text-sm text-gray-500">{goal.category}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>Progress</span>
                        <span>${goal.current} / ${goal.target}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full"
                          style={{ width: `${(goal.current / goal.target) * 100}%` }}
                        />
                      </div>
                      <div className="text-sm text-gray-600">
                        {Math.round((goal.current / goal.target) * 100)}% completed
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="insights" className="space-y-6">
            <div className="grid grid-cols-1 gap-4">
              {insights.map((insight, index) => (
                <Alert key={index} className={`
                  ${insight.type === 'success' ? 'bg-green-50 border-green-200' :
                    insight.type === 'warning' ? 'bg-yellow-50 border-yellow-200' :
                    'bg-blue-50 border-blue-200'}
                `}>
                  <AlertTriangle className={`
                    w-4 h-4
                    ${insight.type === 'success' ? 'text-green-600' :
                      insight.type === 'warning' ? 'text-yellow-600' :
                      'text-blue-600'}
                  `} />
                  <AlertDescription>{insight.description}</AlertDescription>
                </Alert>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AnalyticsPage;
