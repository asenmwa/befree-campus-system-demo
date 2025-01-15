import React, { useState, useEffect } from 'react';
import { useSearchParams } from '@remix-run/react';
import Header from '../components/layout/Header';
import Navigation from '../components/layout/Navigation';
import RfidInputModal from '~/components/Clinical/RfidInputModal';
import RapeCaseForm from '~/components/forms/Clinical/RapeCaseForm';
import HIVTestingCaseForm from '~/components/forms/Clinical/HIVTestingCaseForm';
import GBVCaseForm from '~/components/forms/Clinical/GBVCaseForm';
import VisitHistoryChart from '~/components/Clinical/VisitHistoryChart';
import { useNavigate } from '@remix-run/react';

const ClinicalRoute = () => {
  const [isRapeModalOpen, setIsRapeModalOpen] = useState(false);
  const [isHIVModalOpen, setIsHIVModalOpen] = useState(false);
  const [isGBVModalOpen, setIsGBVModalOpen] = useState(false);
  const [patientDetails, setPatientDetails] = useState<{ firstName: string; dateOfBirth: string; gender: string; rfid: string } | null>(null);
  const [isRfidModalOpen, setIsRfidModalOpen] = useState(false);
  const [rfidError, setRfidError] = useState(false);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const rfidFromUrl = searchParams.get('rfid');

  useEffect(() => {
    let rfidToUse = rfidFromUrl;
    if (!rfidToUse) {
      setIsRfidModalOpen(true);
      return;
    }

    const storedMemberData = localStorage.getItem('memberData');
    if (storedMemberData) {
      const memberData = JSON.parse(storedMemberData);
      if (memberData.rfid === rfidToUse) {
        setPatientDetails(memberData);
        setIsRfidModalOpen(false); // Close modal if patient is found via URL
      } else {
        // Handle case where RFID from URL doesn't match local storage
        console.error('RFID mismatch');
      }
    }
  }, [rfidFromUrl]);

  const handleRfidSubmit = (rfid: string) => {
    const storedMemberData = localStorage.getItem('memberData');
    if (storedMemberData) {
      const memberData = JSON.parse(storedMemberData);
      if (memberData.rfid === rfid) {
        setPatientDetails(memberData);
        setRfidError(false); // Reset error on successful submission
        setIsRfidModalOpen(false);
        navigate('/clinical'); // Navigate to clinical route without rfid param
      } else {
        setRfidError(true);
        setIsRfidModalOpen(true); // Keep modal open to show error
        console.error('Incorrect RFID');
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Navigation />
      <main className="container mx-auto p-4">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <RfidInputModal isOpen={isRfidModalOpen} onClose={() => setIsRfidModalOpen(false)} onRfidSubmit={handleRfidSubmit} />
          <h1 className="text-xl font-bold mb-4">Clinical Forms</h1>
          {rfidError && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
              <strong className="font-bold">Error!</strong>
              <span className="block sm:inline">Patient RFID not found.</span>
            </div>
          )}
        </div>

        {/* Patient Details */}
        {patientDetails && (
          <div className="mb-4 p-4 border rounded">
            <h2 className="text-lg font-semibold mb-2">Patient Details</h2>
            <p>RFID: {patientDetails?.rfid}</p>
            <p>Name: {patientDetails?.firstName}</p>
            <p>Date of Birth: {patientDetails?.dateOfBirth}</p>
            <p>Gender: {patientDetails?.gender}</p>
          </div>
        )}

        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-2">Visit History</h2>
          <VisitHistoryChart
            rfid={patientDetails?.rfid || null}
            patientData={patientDetails ? { name: patientDetails.firstName, dob: patientDetails.dateOfBirth, gender: patientDetails.gender } : null}
          />
        </div>

        <div className="flex space-x-4 mb-4">
          <button onClick={() => setIsRapeModalOpen(true)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Rape Case</button>
          <button onClick={() => setIsHIVModalOpen(true)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">HIV Testing</button>
          <button onClick={() => setIsGBVModalOpen(true)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">GBV Case</button>
          <button className="bg-gray-300 text-gray-500 font-bold py-2 px-4 rounded cursor-not-allowed" disabled>Other Encounter 1</button>
          <button className="bg-gray-300 text-gray-500 font-bold py-2 px-4 rounded cursor-not-allowed" disabled>Other Encounter 2</button>
        </div>

        {isRapeModalOpen && (
          <RapeCaseForm isOpen={isRapeModalOpen} onClose={() => setIsRapeModalOpen(false)} rfid={patientDetails?.rfid || null} patientData={{ name: patientDetails?.firstName ?? '', dob: patientDetails?.dateOfBirth ?? '', gender: patientDetails?.gender ?? '' }} />
        )}

        {isHIVModalOpen && (
          <HIVTestingCaseForm isOpen={isHIVModalOpen} onClose={() => setIsHIVModalOpen(false)} rfid={patientDetails?.rfid || null} patientData={{ name: patientDetails?.firstName ?? '', dob: patientDetails?.dateOfBirth ?? '', gender: patientDetails?.gender ?? '' }} />
        )}

        {isGBVModalOpen && (
          <GBVCaseForm isOpen={isGBVModalOpen} onClose={() => setIsGBVModalOpen(false)} rfid={patientDetails?.rfid || null} patientData={{ name: patientDetails?.firstName ?? '', dob: patientDetails?.dateOfBirth ?? '', gender: patientDetails?.gender ?? '' }} />
        )}
      </main>
    </div>
  );
};

export default ClinicalRoute;
