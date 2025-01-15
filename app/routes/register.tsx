import React from 'react';
import MemberRegistration from '../components/forms/MemberRegistration/MemberRegistration';
import Header from '../components/layout/Header';
import Navigation from '../components/layout/Navigation';

const Register = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <main className="container mx-auto p-4">
        <MemberRegistration />
      </main>
    </div>
  );
};

export default Register;
