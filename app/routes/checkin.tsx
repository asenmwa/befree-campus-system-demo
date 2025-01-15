import React from 'react';
import Header from '../components/layout/Header';
import Navigation from '../components/layout/Navigation';
import CheckInOut from '../components/forms/CheckInOut/CheckInOut';

const CheckInPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Navigation />
      <main className="container mx-auto p-4">
        <CheckInOut />
      </main>
    </div>
  );
};

export default CheckInPage;
