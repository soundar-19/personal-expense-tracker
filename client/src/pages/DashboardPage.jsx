import React from 'react';
import Navigation from '../components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

const DashboardPage = () => {
  return (
    <div>
      <Navigation />
      <div className="p-6 space-y-6">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Total Balance</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">$12,345</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Monthly Spending</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">$2,500</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Savings</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">$8,000</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
