import React, { useState } from 'react';
import { useNavigate } from '@remix-run/react';

const RfidInputModal = ({ isOpen, onClose, onRfidSubmit }: { isOpen: boolean; onClose: () => void; onRfidSubmit: (rfid: string) => void }) => {
  const [rfid, setRfid] = useState('');
  const navigate = useNavigate();

  const handleCancel = () => {
    onClose();
    navigate('/'); // Navigate back to the main menu
  };

  const handleProceed = () => {
    if (rfid) {
      navigate(`/clinical?rfid=${rfid}`);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" id="rfid-modal">
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <div className="mt-3 text-center">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Enter Patient RFID
          </h3>
          <div className="mt-2 px-7 py-3">
            <input
              type="text"
              value={rfid}
              onChange={(e) => setRfid(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter RFID"
            />
          </div>
          <div className="items-center px-4 py-3">
            <button
              onClick={handleCancel}
              className="px-4 py-2 bg-red-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300"
            >
              Cancel
            </button>
            <button
              onClick={handleProceed}
              className="mt-2 px-4 py-2 bg-green-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
            >
              Proceed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RfidInputModal;
