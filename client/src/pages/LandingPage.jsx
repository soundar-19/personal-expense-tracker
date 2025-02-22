import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { ArrowRight, ChartBar, Wallet, LineChart } from 'lucide-react';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-50 via-white to-violet-50">
      {/* Hero Section */}
      <section className="relative px-6 py-32 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-20 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20 translate-y-1/2"></div>
        </div>
        
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent mb-6 animate-fade-in">
            Take Control of Your Finances
          </h1>
          <p className="text-2xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Simple, powerful tools to manage your money and achieve your financial goals
          </p>
          <div className="flex gap-4 justify-center">
            <Button 
              className="bg-gradient-to-r from-violet-600 to-blue-600 hover:opacity-90 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105"
              onClick={() => navigate('/auth')}

            >
              Get Started Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline"
              className="px-8 py-6 text-lg rounded-full border-2 hover:bg-gray-50 transition-all duration-300"
              onClick={() => navigate('/auth')}

            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 bg-white/50 backdrop-blur">
            <CardHeader>
              <Wallet className="h-12 w-12 text-violet-600 mb-4" />
              <CardTitle className="text-2xl font-bold">Track Spending</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-lg">
                Easily track and categorize your expenses to understand where your money goes
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 bg-white/50 backdrop-blur">
            <CardHeader>
              <ChartBar className="h-12 w-12 text-blue-600 mb-4" />
              <CardTitle className="text-2xl font-bold">Budget Planning</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-lg">
                Create and manage budgets to stay on track with your financial goals
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 bg-white/50 backdrop-blur">
            <CardHeader>
              <LineChart className="h-12 w-12 text-indigo-600 mb-4" />
              <CardTitle className="text-2xl font-bold">Financial Insights</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-lg">
                Get personalized insights and recommendations to improve your finances
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gradient-to-b from-white to-violet-50 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "This app completely changed how I manage my money. Highly recommend!",
                author: "Sarah J.",
                role: "Small Business Owner"
              },
              {
                quote: "Finally, a finance app that's both powerful and easy to use.",
                author: "Michael R.",
                role: "Software Engineer"
              },
              {
                quote: "The budgeting features have helped me save more than ever before.",
                author: "Emily T.",
                role: "Marketing Manager"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="relative bg-white/50 backdrop-blur border-0 hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-8">
                  <div className="absolute -top-6 left-6 w-12 h-12 bg-gradient-to-r from-violet-600 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl">
                    "
                  </div>
                  <p className="text-gray-600 text-lg mb-6">
                    {testimonial.quote}
                  </p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.author}</p>
                    <p className="text-gray-500">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
