import React, { useState } from 'react';
import { Form } from '@remix-run/react';
import { useNavigate } from '@remix-run/react';
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
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const [modalData, setModalData] = useState({ rfid: '', name: '' });

  const nextCard = () => {
    setActiveCard(activeCard + 1);
  };

  const prevCard = () => {
    setActiveCard(activeCard - 1);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const storedData = localStorage.getItem('memberData');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      localStorage.setItem('memberData', JSON.stringify(parsedData));
      setModalData({ rfid: parsedData.rfid, name: `${parsedData.firstName} ${parsedData.lastName}` });
      setShowModal(true);
    }
  };

  const handleModalClose = () => {
    setShowModal(false);
    navigate('/');
  };

  return (
    <>
      {showModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" id="my-modal">
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <div className="mt-3 text-center">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Registration Successful!
              </h3>
              <div className="mt-2 px-7 py-3">
                <p className="text-sm text-gray-500">
                  Name: {modalData.name}
                  <br />
                  RFID: {modalData.rfid}
                </p>
              </div>
              <div className="items-center px-4 py-3">
                <button
                  onClick={handleModalClose}
                  id="ok-btn"
                  className="px-4 py-2 bg-green-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
                >
                  Ok
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    <Form method="post" className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-2xl mx-auto my-8" onSubmit={handleSubmit}>
      <h3 className="text-xl font-bold mb-6">New Member Registration</h3>
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
    </>
  );
};

export default MemberRegistration;
