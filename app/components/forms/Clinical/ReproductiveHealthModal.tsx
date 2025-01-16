import React from 'react';

interface ReproductiveHealthModalProps {
  isOpen: boolean;
  onClose: () => void;
  rfid: string | null;
  patientData: {
    name: string;
    dob: string;
    gender: string;
  } | null;
}

const ReproductiveHealthModal: React.FC<ReproductiveHealthModalProps> = ({ isOpen, onClose, rfid, patientData }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-zinc-800/70 backdrop-blur-sm">
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-xl">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">Reproductive Health</h2>
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
            <label htmlFor="pregnancyStatus" className="block text-gray-700 text-sm font-bold mb-2">
              Pregnancy Status
            </label>
            <select id="pregnancyStatus" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
              <option value="not_pregnant">Not Pregnant</option>
              <option value="pregnant">Pregnant</option>
              <option value="unsure">Unsure</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="lastMenstrualPeriod" className="block text-gray-700 text-sm font-bold mb-2">
              Last Menstrual Period
            </label>
            <input type="date" id="lastMenstrualPeriod" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div className="mb-4">
            <label htmlFor="contraceptiveMethod" className="block text-gray-700 text-sm font-bold mb-2">
              গর্ভনিরোধের পদ্ধতি (Contraceptive Method)
            </label>
            <input type="text" id="contraceptiveMethod" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div className="mb-4">
            <label htmlFor="isPregnant" className="block text-gray-700 text-sm font-bold mb-2">
              Are you pregnant?
            </label>
            <select id="isPregnant" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
              <option value="no">No</option>
              <option value="yes">Yes</option>
              <option value="unsure">Unsure</option>
            </select>
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

export default ReproductiveHealthModal;
