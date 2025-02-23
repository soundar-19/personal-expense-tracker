import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { getAuth, signOut } from 'firebase/auth';

import { useNavigate } from 'react-router-dom';


import Navigation from '../components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import Label from '../components/ui/label';


const ProfilePage = () => {
  const navigate = useNavigate();

  const { logout } = useAuth();
  const auth = getAuth();


  const [profileData, setProfileData] = useState({
    name: '',
    email: '',
    phone: '',
    currency: 'INR'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle profile update logic
  };

  return (
    <div>
      {/* <Navigation /> */}

      <div className="p-6 space-y-6">
        <h1 className="text-3xl font-bold text-gray-900">Profile Settings</h1>
        
        <Card>
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  value={profileData.name}
                  onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                  required
                />
              </div>

              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  value={profileData.email}
                  onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                  required
                />
              </div>

              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={profileData.phone}
                  onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                />
              </div>

              <div>
                <Label htmlFor="currency">Preferred Currency</Label>
                <select
                  id="currency"
                  value={profileData.currency}
                  onChange={(e) => setProfileData({...profileData, currency: e.target.value})}
                  className="block w-full p-2 border rounded-md"
                >
                  <option value="USD">USD - US Dollar</option>
                  <option value="EUR">EUR - Euro</option>
                  <option value="GBP">GBP - British Pound</option>
                  <option value="INR">INR - Indian Rupee</option>
                </select>
              </div>

              <div className="pt-4">
                <Button type="submit">Save Changes</Button>
              </div>
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Security</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button variant="secondary" className="w-full">
              Change Password
            </Button>
          <Button 
            variant="secondary" 
            className="w-full"
            onClick={async () => {
              await signOut(auth);
              navigate('/');
            }}

          >
            Log Out
          </Button>

          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProfilePage;
