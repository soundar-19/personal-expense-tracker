import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Alert, AlertDescription } from '../components/ui/alert';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';
import { Plus, AlertTriangle } from 'lucide-react';

const BudgetManagement = () => {
  const [selectedMonth, setSelectedMonth] = useState('February 2025');
  
  const budgetData = [
    { category: 'Housing', budget: 2000, spent: 1800, color: '#3B82F6' },
    { category: 'Food', budget: 800, spent: 750, color: '#10B981' },
    { category: 'Transportation', budget: 400, spent: 380, color: '#F59E0B' },
    { category: 'Entertainment', budget: 300, spent: 290, color: '#8B5CF6' },
    { category: 'Shopping', budget: 500, spent: 480, color: '#EC4899' }
  ];

  return (
    <div>
      <Navigation />
      <div className="p-6 space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Budget Management</h1>
            <p className="text-gray-600 mt-1">Track and manage your monthly budgets</p>
          </div>
          <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            <Plus className="w-4 h-4" />
            Set New Budget
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Budget Overview</CardTitle>
                  <select 
                    value={selectedMonth}
                    onChange={(e) => setSelectedMonth(e.target.value)}
                    className="border rounded-md px-3 py-1"
                  >
                    <option>February 2025</option>
                    <option>March 2025</option>
                  </select>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {budgetData.map((item) => (
                    <div key={item.category} className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-medium">{item.category}</h3>
                        <span className="text-sm text-gray-500">
                          ${item.spent} / ${item.budget}
                        </span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full">
                        <div 
                          className="h-2 rounded-full"
                          style={{
                            width: `${(item.spent/item.budget) * 100}%`,
                            backgroundColor: item.color
                          }}
                        />
                      </div>
                      {item.spent/item.budget > 0.9 && (
                        <Alert className="mt-2 bg-yellow-50 border-yellow-200">
                          <AlertTriangle className="w-4 h-4 text-yellow-500" />
                          <AlertDescription className="text-sm text-yellow-700">
                            Approaching budget limit
                          </AlertDescription>
                        </Alert>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Budget Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={budgetData}
                      dataKey="budget"
                      nameKey="category"
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                    >
                      {budgetData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BudgetManagement;
