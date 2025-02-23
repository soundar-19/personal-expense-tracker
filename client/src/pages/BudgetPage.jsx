import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { CircularProgress } from '../components/ui/progress';

import { 
  PieChart, Pie, Cell, ResponsiveContainer, 
  BarChart, Bar, XAxis, YAxis, Tooltip, Legend 
} from 'recharts';
import { 
  Plus, AlertTriangle, TrendingUp, TrendingDown,
  Settings 
} from 'lucide-react';

const BudgetPage = () => {
  const [activeView, setActiveView] = useState('overview');
  
  const budgetCategories = [
    { 
      name: 'Housing',
      budget: 2000,
      spent: 1800,
      lastMonth: 1750,
      trend: 'up',
      color: '#3B82F6',
      alerts: ['Approaching limit']
    },
    { 
      name: 'Food',
      budget: 800,
      spent: 600,
      lastMonth: 780,
      trend: 'down',
      color: '#10B981',
      alerts: []
    },
    { 
      name: 'Transportation',
      budget: 400,
      spent: 380,
      lastMonth: 350,
      trend: 'up',
      color: '#F59E0B',
      alerts: []
    },
    { 
      name: 'Entertainment',
      budget: 300,
      spent: 290,
      lastMonth: 250,
      trend: 'up',
      color: '#8B5CF6',
      alerts: ['High increase from last month']
    }
  ];

  const monthlyData = [
    { month: 'Jan', planned: 3500, actual: 3300 },
    { month: 'Feb', planned: 3500, actual: 3700 },
    { month: 'Mar', planned: 3500, actual: 3200 }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Budget Management</h1>
          <p className="text-gray-600 mt-1">Plan and track your monthly spending</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border hover:bg-gray-50">
            <Settings className="w-4 h-4" />
            Budget Settings
          </button>
          <button className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
            <Plus className="w-4 h-4" />
            Add Category
          </button>
        </div>
      </div>

      {/* Budget Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Monthly Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlyData}>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="planned" fill="#8B5CF6" name="Planned" />
                  <Bar dataKey="actual" fill="#10B981" name="Actual" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Budget Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={budgetCategories}
                    dataKey="budget"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                  >
                    {budgetCategories.map((entry, index) => (
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

      {/* Category Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {budgetCategories.map((category) => (
          <Card key={category.name}>
            <CardContent className="pt-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-medium">{category.name}</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                    {category.trend === 'up' ? (
                      <TrendingUp className="w-4 h-4 text-red-500" />
                    ) : (
                      <TrendingDown className="w-4 h-4 text-green-500" />
                    )}
                    vs last month
                  </div>
                </div>
                <button className="text-gray-400 hover:text-gray-500">
                  <Settings className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Spent</span>
                    <span className="font-medium">
                      ${category.spent} / ${category.budget}
                    </span>
                  </div>
                  <CircularProgress 
                    value={(category.spent / category.budget) * 100}
                    className="h-2"
                  />
                </div>

                {category.alerts.length > 0 && (
                  <div className="bg-yellow-50 border border-yellow-100 rounded-lg p-3">
                    <div className="flex items-center gap-2 text-sm text-yellow-800">
                      <AlertTriangle className="w-4 h-4" />
                      {category.alerts[0]}
                    </div>
                  </div>
                )}

                <div className="flex justify-between items-center pt-2">
                  <span className="text-sm text-gray-600">Remaining</span>
                  <span className="font-medium text-green-600">
                    ${category.budget - category.spent}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BudgetPage;
