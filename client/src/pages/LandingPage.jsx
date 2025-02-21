import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 space-y-8">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Take Control of Your Finances
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Simple, powerful tools to manage your money and achieve your financial goals
        </p>
        <div className="space-x-4">
          <Button 
            variant="primary" 
            size="lg"
            onClick={() => navigate('/signup')}
          >
            Get Started
          </Button>
          <Button 
            variant="secondary" 
            size="lg"
            onClick={() => navigate('/login')}
          >
            Learn More
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Track Spending</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Easily track and categorize your expenses to understand where your money goes
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Budget Planning</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Create and manage budgets to stay on track with your financial goals
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Financial Insights</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Get personalized insights and recommendations to improve your finances
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Testimonials Section */}
      <section className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          What Our Users Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent>
              <p className="text-gray-600 italic">
                "This app completely changed how I manage my money. Highly recommend!"
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <p className="text-gray-600 italic">
                "Finally, a finance app that's both powerful and easy to use."
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <p className="text-gray-600 italic">
                "The budgeting features have helped me save more than ever before."
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
