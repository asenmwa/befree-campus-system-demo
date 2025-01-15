import React, { useState } from 'react';
import { Form } from '@remix-run/react';
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

  const nextCard = () => {
    setActiveCard(activeCard + 1);
  };

  const prevCard = () => {
    setActiveCard(activeCard - 1);
  };

  return (
    <Form method="post" className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
      <h3 className="text-xl font-bold mb-4">New Member Registration</h3>
      {activeCard === 1 && <PersonalInformation />}
      {activeCard === 2 && <ParentGuardianContact />}
      {activeCard === 3 && <EmergencyContact />}
      {activeCard === 4 && <HouseholdIncome />}
      {activeCard === 5 && <FamilyInformation />}
      {activeCard === 6 && <ActivitiesServices />}
      {activeCard === 7 && <VolunteerismMentorship />}
      {activeCard === 8 && <EducationalHistory />}
      {activeCard === 9 && <MedicalHistory />}

      <div className="flex justify-between mt-4">
        <button
          type="button"
          onClick={prevCard}
          disabled={activeCard === 1}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:opacity-50"
        >
          Previous
        </button>
        {activeCard < 9 ? (
          <button
            type="button"
            onClick={nextCard}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Next
          </button>
        ) : (
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        )}
      </div>
    </Form>
  );
};

export default MemberRegistration;
