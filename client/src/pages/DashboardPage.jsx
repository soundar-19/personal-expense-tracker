import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Alert, AlertDescription } from '../components/ui/alert';
import {
  LineChart, Line, PieChart, Pie, Cell, AreaChart, Area,
  ResponsiveContainer, XAxis, YAxis, Tooltip, Legend, CartesianGrid
} from 'recharts';
import {
  Wallet, Plus, Calendar, TrendingUp, ArrowUpRight,
  ArrowDownRight, Settings, BellDot, LogOut, Menu,
  CreditCard, PiggyBank, Receipt, Home, ChevronDown,
  User, BarChart3, Target, Bell, Search, Filter,
  DollarSign, Repeat, AlertTriangle, ArrowRight
} from 'lucide-react';

const sidebarItems = [
    { icon: <Home className="w-5 h-5" />, label: 'Dashboard', id: 'dashboard' },
    { icon: <BarChart3 className="w-5 h-5" />, label: 'Analytics', id: 'analytics' },
    { icon: <Target className="w-5 h-5" />, label: 'Budgets', id: 'budgets' },
    { icon: <Receipt className="w-5 h-5" />, label: 'Transactions', id: 'transactions' },
    { icon: <PiggyBank className="w-5 h-5" />, label: 'Savings', id: 'savings' },
    { icon: <Settings className="w-5 h-5" />, label: 'Settings', id: 'settings' },
  ];

const Dashboard = () => {

  const [showSidebar, setShowSidebar] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [activeNav, setActiveNav] = useState('dashboard');

  const monthlyOverview = [
    { month: 'Jan', income: 6500, expenses: 4200, savings: 2300, investment: 800 },
    { month: 'Feb', income: 6800, expenses: 4400, savings: 2400, investment: 850 },
    { month: 'Mar', income: 7000, expenses: 4100, savings: 2900, investment: 900 },
    { month: 'Apr', income: 6900, expenses: 4300, savings: 2600, investment: 870 },
  ];

  const spendingTrends = [
    { date: '1 Feb', amount: 240 },
    { date: '5 Feb', amount: 320 },
    { date: '10 Feb', amount: 280 },
    { date: '15 Feb', amount: 450 },
    { date: '20 Feb', amount: 360 },
    { date: '25 Feb', amount: 290 },
  ];

  const upcomingBills = [
    { id: 1, name: 'Rent', amount: 1200, dueDate: '2025-03-01', category: 'Housing', status: 'pending' },
    { id: 2, name: 'Electricity', amount: 85, dueDate: '2025-02-28', category: 'Utilities', status: 'pending' },
    { id: 3, name: 'Internet', amount: 60, dueDate: '2025-03-05', category: 'Utilities', status: 'paid' },
  ];

  const savingsGoals = [
    { name: 'Emergency Fund', current: 8000, target: 10000, color: '#8B5CF6' },
    { name: 'Vacation', current: 2500, target: 5000, color: '#10B981' },
    { name: 'New Car', current: 15000, target: 30000, color: '#3B82F6' },
  ];

  const handleClickOutside = () => {
    if (showSidebar) {
      setShowSidebar(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex" onClick={handleClickOutside}>
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 transform transition duration-200 ease-in-out z-30 w-64 bg-white border-r border-gray-200 ${showSidebar ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="h-full flex flex-col">
          <div className="p-4 border-b">
            <div className="flex items-center gap-3">
              <Wallet className="w-8 h-8 text-purple-600" />
              <h1 className="text-xl font-bold cursor-pointer" onClick={() => setShowSidebar(true)}>
                <Wallet className="w-5 h-5 inline" /> Expense Tracker
              </h1>
            </div>
          </div>
          
          <nav className="flex-1 p-4 space-y-1">
            {sidebarItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveNav(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  activeNav === item.id 
                    ? 'bg-purple-50 text-purple-600' 
                    : 'hover:bg-gray-50'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}
          </nav>


          <div className="p-4 border-t">
            <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
              <img
                src="/api/placeholder/32/32"
                alt="User"
                className="w-8 h-8 rounded-full"
              />
              <div className="flex-1">
                <h3 className="font-medium">Soundar Raja</h3>
                <p className="text-sm text-gray-500">Personal Account</p>
              </div>
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 min-w-0">
        {/* Enhanced Header */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-20">
          <div className="px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 flex-1">
                <button
                  onClick={() => setShowSidebar(!showSidebar)}
                  className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
                >
                  <Menu className="w-5 h-5" />
                </button>
                <div className="flex items-center gap-4">
                  <Wallet className="w-8 h-8 text-purple-600 cursor-pointer" onClick={() => setShowSidebar(!showSidebar)} />
                  <span className="text-xl font-bold">Expense Tracker</span>
                </div>

              </div>

              <div className="max-w-md w-full relative">
                <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  type="search"
                  placeholder="Search transactions, categories, bills..."
                  className="pl-10 pr-4 w-full"
                />
              </div>

              <div className="flex items-center gap-4">
                <Button variant="outline" className="hidden sm:flex items-center gap-2">
                  <Filter className="w-4 h-4" />
                  Filters
                </Button>
                <Button variant="outline" className="hidden sm:flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  February 2025
                </Button>
                <Button className="bg-purple-600 hover:bg-purple-700 text-white shadow-lg">
                  <Plus className="w-5 h-5" />
                  <span className="hidden sm:inline ml-2">New Transaction</span>
                </Button>
                <div className="relative">
                  <Button
                    variant="outline"
                    className="relative"
                    onClick={() => setShowNotifications(!showNotifications)}
                  >
                    <Bell className="w-5 h-5" />
                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
                  </Button>

                  {showNotifications && (
                    <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                      {upcomingBills.map((bill) => (
                        <div
                          key={bill.id}
                          className="px-4 py-3 hover:bg-gray-50 cursor-pointer"
                        >
                          <h4 className="font-medium">{bill.name}</h4>
                          <p className="text-sm text-gray-500">Due: {bill.dueDate} - ${bill.amount}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Dashboard Content */}
        <main className="p-4 sm:p-6 lg:p-8 bg-gray-50">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900">Welcome back, SR! 👋</h1>
            <p className="text-gray-600 mt-1">Track, analyze, and optimize your finances</p>
          </div>

          {/* Financial Overview Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white transform hover:scale-105 transition-transform duration-200">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-4">
                  <DollarSign className="w-8 h-8" />
                  <div className="p-2 bg-white/20 rounded-lg">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
                <p className="text-purple-100">Total Balance</p>
                <h3 className="text-3xl font-bold mt-1">$12,750</h3>
                <div className="flex items-center mt-2 text-purple-100">
                  <ArrowUpRight className="w-4 h-4 mr-1" />
                  <span>8.2% from last month</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white transform hover:scale-105 transition-transform duration-200">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-4">
                  <TrendingUp className="w-8 h-8" />
                  <div className="p-2 bg-white/20 rounded-lg">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
                <p className="text-emerald-100">Monthly Income</p>
                <h3 className="text-3xl font-bold mt-1">$6,800</h3>
                <div className="flex items-center mt-2 text-emerald-100">
                  <ArrowUpRight className="w-4 h-4 mr-1" />
                  <span>5.3% from last month</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-rose-500 to-rose-600 text-white transform hover:scale-105 transition-transform duration-200">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-4">
                  <CreditCard className="w-8 h-8" />
                  <div className="p-2 bg-white/20 rounded-lg">
                    <ArrowDownRight className="w-5 h-5" />
                  </div>
                </div>
                <p className="text-rose-100">Monthly Expenses</p>
                <h3 className="text-3xl font-bold mt-1">$4,400</h3>
                <div className="flex items-center mt-2 text-rose-100">
                  <ArrowUpRight className="w-4 h-4 mr-1" />
                  <span>12.5% from last month</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white transform hover:scale-105 transition-transform duration-200">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-4">
                  <PiggyBank className="w-8 h-8" />
                  <div className="p-2 bg-white/20 rounded-lg">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
                <p className="text-blue-100">Total Savings</p>
                <h3 className="text-3xl font-bold mt-1">$2,400</h3>
                <div className="flex items-center mt-2 text-blue-100">
                  <ArrowUpRight className="w-4 h-4 mr-1" />
                  <span>15.2% from last month</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Dashboard Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
            {/* Left Column - Charts */}
            <div className="lg:col-span-4 space-y-6">
              {/* Enhanced Financial Overview Chart */}
              <Card className="bg-white shadow-lg">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-xl font-bold">Financial Overview</CardTitle>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">Monthly</Button>
                    <Button variant="outline" size="sm">Quarterly</Button>
                    <Button variant="outline" size="sm">Yearly</Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={monthlyOverview}>
                        <defs>
                          <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#10B981" stopOpacity={0.1}/>
                            <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                          </linearGradient>
                          <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#EF4444" stopOpacity={0.1}/>
                            <stop offset="95%" stopColor="#EF4444" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Area
                          type="monotone"
                          dataKey="income"
                          stroke="#10B981"
                          fillOpacity={1}
                          fill="url(#colorIncome)"
                          strokeWidth={2}
                        />
                        <Area
                          type="monotone"
                          dataKey="expenses"
                          stroke="#EF4444"
                          fillOpacity={1}
                          fill="url(#colorExpenses)"
                          strokeWidth={2}
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              {/* Spending Analysis */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-white shadow-lg">
                  <CardHeader>
                    <CardTitle>Daily Spending Trend</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-60">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={spendingTrends}>
                          <defs>
                            <linearGradient id="colorSpending" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.1}/>
                              <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0}/>
                            </linearGradient>
                          </defs>
                          <CartesianGrid strokeDasharray="3 3" vertical={false} />
                          <XAxis dataKey="date" />
                          <YAxis />
                          <Tooltip />
                          <Area
                            type="monotone"
                            dataKey="amount"
                            stroke="#8B5CF6"
                            fillOpacity={1}
                            fill="url(#colorSpending)"
                            strokeWidth={2}
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-lg">
                  <CardHeader>
                    <CardTitle>Savings Goals Progress</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {savingsGoals.map((goal) => (
                        <div key={goal.name} className="space-y-2">
                          <div className="flex justify-between">
                            <span className="font-medium">{goal.name}</span>
                            <span className="text-gray-500">
                              ${goal.current.toLocaleString()} / ${goal.target.toLocaleString()}
                            </span>
                          </div>
                          <div className="h-2 bg-gray-100 rounded-full">
                            <div
                              className="h-2 rounded-full transition-all duration-500"
                              style={{
                                width: `${(goal.current / goal.target) * 100}%`,
                                backgroundColor: goal.color
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Right Column - Activity & Bills */}
            <div className="lg:col-span-2 space-y-6">
              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Button className="w-full justify-start" variant="outline">
                      <Plus className="w-4 h-4 mr-2" />
                      Add New Transaction
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <Target className="w-4 h-4 mr-2" />
                      Set New Budget
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <PiggyBank className="w-4 h-4 mr-2" />
                      Create Savings Goal
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <Receipt className="w-4 h-4 mr-2" />
                      View Reports
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
