import React from 'react';

interface PrepModalProps {
  isOpen: boolean;
  onClose: () => void;
  rfid: string | null;
  patientData: {
    name: string;
    dob: string;
    gender: string;
  } | null;
}

const PrepModal: React.FC<PrepModalProps> = ({ isOpen, onClose, rfid, patientData }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-zinc-800/70 backdrop-blur-sm">
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-xl">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">PrEP Assessment</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <span className="sr-only">Close</span>
              X
            </button>
          </div>
       
          <div className="mb-4">
            <label htmlFor="prepStatus" className="block text-gray-700 text-sm font-bold mb-2">
              Currently on PrEP?
            </label>
            <select id="prepStatus" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="reasonForPrep" className="block text-gray-700 text-sm font-bold mb-2">
              Reason for Seeking PrEP
            </label>
            <textarea id="reasonForPrep" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
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

export default PrepModal;
