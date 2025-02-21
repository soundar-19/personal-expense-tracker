import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from './ui/button';

const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { logout } = useAuth();
  
  const navLinks = [
    { path: '/app', label: 'Dashboard' },
    { path: '/budgets', label: 'Budgets' },
    { path: '/analytics', label: 'Analytics' },
    { path: '/profile', label: 'Profile' }
  ];

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`${
                  location.pathname === link.path
                    ? 'border-blue-500 text-gray-900'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center">
            <Button variant="secondary" onClick={handleLogout}>
              Log Out
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
