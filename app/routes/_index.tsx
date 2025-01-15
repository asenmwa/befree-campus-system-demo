import React from 'react';
import Header from '../components/layout/Header';
import Navigation from '../components/layout/Navigation';
import Card from '../components/shared/Card';
import { useNavigate } from '@remix-run/react';
import { AiOutlineUserAdd, AiOutlineCheckCircle, AiOutlineFileText, AiOutlineHeart } from 'react-icons/ai';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <Navigation />
      <main className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card
            title="Member Registration"
            description="Register new youth members with their personal, parent/guardian, emergency contact, household income, family, activities & services, volunteerism/mentorship, educational, and medical information."
            icon={<AiOutlineUserAdd size={24} />}
            onClick={() => navigate('/register')}
          />
          <Card
            title="Check-In/Out System"
            description="Simulate the process of members checking in and out of the facility, recording their attendance and activity."
            icon={<AiOutlineCheckCircle size={24} />}
            onClick={() => navigate('/checkin')}
          />
          <Card
            title="Clinical Forms"
            description="Access and complete health intake forms, including vital signs, current medications, health history, chief complaint, treatment notes, and follow-up scheduling."
            icon={<AiOutlineFileText size={24} />}
            onClick={() => navigate('/clinical')}
          />
          <Card
            title="Wellness Forms"
            description="Track mental health and wellness, including mood, activity participation, goal setting, progress charts, support network information, and resource access."
            icon={<AiOutlineHeart size={24} />}
            onClick={() => navigate('/wellness')}
          />
        </div>
      </main>
    </div>
  );
};

export default Index;
