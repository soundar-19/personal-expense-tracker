import React from 'react';
import Navigation from '../components/Navigation';
import ExpenseManager from '../components/ExpenseManager';

const MainPage = () => {
  return (
    <div>
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Personal Expense Tracker</h1>
        <ExpenseManager />
      </div>
    </div>
  );
};

export default MainPage;
