import React, { useState } from 'react';
import PersonalInformation from './PersonalInformation';
import ParentGuardianContact from './ParentGuardianContact';
import EmergencyContact from './EmergencyContact';
import HouseholdIncome from './HouseholdIncome';
import FamilyInformation from './FamilyInformation';
import ActivitiesServices from './ActivitiesServices';
import VolunteerismMentorship from './VolunteerismMentorship';
import EducationalHistory from './EducationalHistory';
import MedicalHistory from './MedicalHistory';

const MemberRegistration = () => {
  const [activeCard, setActiveCard] = useState(1);

  const nextCard = () => setActiveCard(activeCard + 1);
  const prevCard = () => setActiveCard(activeCard - 1);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Member Registration</h2>
      <div>
        {/* Progress Stepper */}
        <div className="flex mb-4">
          {Array.from({ length: 9 }, (_, index) => (
            <div 
              key={index + 1}
              className={`flex-1 py-2 px-4 rounded-md text-center ${
                activeCard === index + 1 ? 'bg-maroon text-white' : 'bg-gray-200'
              }`}
            >
              {index + 1}
            </div>
          ))}
        </div>

        {/* Form Cards */}
        <div>
          {activeCard === 1 && <PersonalInformation />}
          {activeCard === 2 && <ParentGuardianContact />}
          {activeCard === 3 && <EmergencyContact />}
          {activeCard === 4 && <HouseholdIncome />}
          {activeCard === 5 && <FamilyInformation />}
          {activeCard === 6 && <ActivitiesServices />}
          {activeCard === 7 && <VolunteerismMentorship />}
          {activeCard === 8 && <EducationalHistory />}
          {activeCard === 9 && <MedicalHistory />}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-4">
          <button onClick={prevCard} disabled={activeCard === 1}>Previous</button>
          <button onClick={nextCard} disabled={activeCard === 9}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default MemberRegistration;
