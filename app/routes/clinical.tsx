import React, { useState, useEffect } from 'react';
import { useSearchParams } from '@remix-run/react';
import RfidInputModal from '~/components/Clinical/RfidInputModal';
import RapeCaseForm from '~/components/forms/Clinical/RapeCaseForm';
import HIVTestingCaseForm from '~/components/forms/Clinical/HIVTestingCaseForm';
import GBVCaseForm from '~/components/forms/Clinical/GBVCaseForm';
import VisitHistoryChart from '~/components/Clinical/VisitHistoryChart';

const ClinicalRoute = () => {
  const [isRapeModalOpen, setIsRapeModalOpen] = useState(false);
  const [isHIVModalOpen, setIsHIVModalOpen] = useState(false);
  const [isGBVModalOpen, setIsGBVModalOpen] = useState(false);
  const [patientDetails, setPatientDetails] = useState<{ firstName: string; dateOfBirth: string; gender: string; rfid: string } | null>(null);
  const [isRfidModalOpen, setIsRfidModalOpen] = useState(false);
  const [searchParams] = useSearchParams();
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
        setIsRfidModalOpen(false);
      } else {
        // Handle incorrect RFID
        console.error('Incorrect RFID');
      }
    }
  };

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <RfidInputModal isOpen={isRfidModalOpen} onClose={() => setIsRfidModalOpen(false)} onRfidSubmit={handleRfidSubmit} />
      <h1 className="text-xl font-bold mb-4">Clinical Forms</h1>

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
        {patientDetails && <VisitHistoryChart rfid={patientDetails?.rfid} patientData={patientDetails} />}
      </div>

      <div className="flex space-x-4 mb-4">
        <button onClick={() => setIsRapeModalOpen(true)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Rape Case</button>
        <button onClick={() => setIsHIVModalOpen(true)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">HIV Testing</button>
        <button onClick={() => setIsGBVModalOpen(true)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">GBV Case</button>
        <button className="bg-gray-300 text-gray-500 font-bold py-2 px-4 rounded cursor-not-allowed" disabled>Other Encounter 1</button>
        <button className="bg-gray-300 text-gray-500 font-bold py-2 px-4 rounded cursor-not-allowed" disabled>Other Encounter 2</button>
      </div>

      {isRapeModalOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <RapeCaseForm rfid={patientDetails?.rfid} patientData={patientDetails} />
        </div>
      )}

      {isHIVModalOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <HIVTestingCaseForm rfid={patientDetails?.rfid} patientData={patientDetails} />
        </div>
      )}

      {isGBVModalOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <GBVCaseForm rfid={patientDetails?.rfid} patientData={patientDetails} />
        </div>
      )}
    </div>
  );
};

export default ClinicalRoute;
