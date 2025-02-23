import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import CircularProgress from '../components/ui/progress';


import { Button } from '../components/ui/button';
import { Plus, Target, Rocket, Trophy, TrendingUp } from 'lucide-react';
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts';

const GoalsPage = () => {
  const [selectedGoal, setSelectedGoal] = useState(null);

  const goals = [
    {
      id: 1,
      name: "Emergency Fund",
      target: 10000,
      current: 6500,
      deadline: "2025-12-31",
      monthlyContribution: 300,
      category: "Savings",
      progress: [
        { month: 'Jan', amount: 5500 },
        { month: 'Feb', amount: 6500 },
        { month: 'Mar', amount: 0 }
      ]
    },
    {
      id: 2,
      name: "New Car",
      target: 25000,
      current: 8000,
      deadline: "2026-06-30",
      monthlyContribution: 800,
      category: "Purchase",
      progress: [
        { month: 'Jan', amount: 7000 },
        { month: 'Feb', amount: 8000 },
        { month: 'Mar', amount: 0 }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Financial Goals</h1>
          <p className="text-gray-600 mt-1">Track and manage your financial goals</p>
        </div>
        <Button className="flex items-center gap-2 bg-purple-600 text-white hover:bg-purple-700">
          <Plus className="w-4 h-4" />
          Create New Goal
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {goals.map(goal => (
          <Card key={goal.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                <span>{goal.name}</span>
                <Target className="w-5 h-5 text-purple-500" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Progress</span>
                    <span className="font-medium">
                      ${goal.current.toLocaleString()} / ${goal.target.toLocaleString()}
                    </span>
                  </div>
                  <CircularProgress 

                    value={(goal.current / goal.target) * 100} 
                    className="h-2 bg-purple-100"
                  />
                  <div className="flex justify-between text-sm mt-1">
                    <span className="text-gray-500">
                      {Math.round((goal.current / goal.target) * 100)}% Complete
                    </span>
                    <span className="text-gray-500">{goal.deadline}</span>
                  </div>
                </div>
                
                <div className="pt-2 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Monthly Contribution</span>
                    <span className="font-medium">${goal.monthlyContribution}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Category</span>
                    <span className="font-medium">{goal.category}</span>
                  </div>
                </div>

                <div className="h-24">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={goal.progress}>
                      <Line 
                        type="monotone" 
                        dataKey="amount" 
                        stroke="#8B5CF6" 
                        strokeWidth={2}
                        dot={{ r: 3 }}
                      />
                      <XAxis dataKey="month" />
                      <Tooltip />
                    </LineChart>
                  </ResponsiveContainer>
                </div>

                <Button 
                  variant="outline" 
                  className="w-full mt-4"
                  onClick={() => setSelectedGoal(goal)}
                >
                  View Details
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}

        {/* Quick Goal Templates */}
        <Card className="border-dashed border-2 hover:border-purple-500 transition-colors">
          <CardContent className="p-6">
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <Rocket className="w-12 h-12 text-purple-500" />
              </div>
              <h3 className="font-medium">Quick Goal Templates</h3>
              <div className="grid grid-cols-2 gap-2">
                <Button variant="outline" className="flex items-center gap-2">
                  <Trophy className="w-4 h-4" />
                  Emergency Fund
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  Investment
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default GoalsPage;
