import React from 'react';

interface PsychologyIntakeModalProps {
  isOpen: boolean;
  onClose: () => void;
  rfid: string | null;
  patientData: {
    name: string;
    dob: string;
    gender: string;
  } | null;
}

const PsychologyIntakeModal: React.FC<PsychologyIntakeModalProps> = ({ isOpen, onClose, rfid, patientData }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-zinc-800/70 backdrop-blur-sm">
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-xl">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">Psychology Intake Form</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <span className="sr-only">Close</span>
              X
            </button>
          </div>
          {patientData && (
            <div className="mb-4 p-4 border rounded">
              <h3 className="text-md font-semibold mb-2">Patient Details</h3>
              <p>RFID: {rfid}</p>
              <p>Name: {patientData.name}</p>
              <p>Date of Birth: {patientData.dob}</p>
              <p>Gender: {patientData.gender}</p>
            </div>
          )}
          <div className="mb-4">
            <label htmlFor="reasonForVisit" className="block text-gray-700 text-sm font-bold mb-2">
              Reason for Visit
            </label>
            <textarea id="reasonForVisit" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="reasonForSeekingHelp" className="block text-gray-700 text-sm font-bold mb-2">
              Reason for Seeking Help
            </label>
            <textarea id="reasonForSeekingHelp" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="mentalHealthHistory" className="block text-gray-700 text-sm font-bold mb-2">
              Mental Health History
            </label>
            <textarea id="mentalHealthHistory" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="currentSymptoms" className="block text-gray-700 text-sm font-bold mb-2">
              Current Symptoms
            </label>
            <textarea id="currentSymptoms" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
          </div>
          <div className="flex justify-end">
            <button onClick={onClose} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2">
              Cancel
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PsychologyIntakeModal;
