import React from 'react';
import { Form } from '@remix-run/react';

interface BehaviouralAnalysisModalProps {
  isOpen: boolean;
  onClose: () => void;
  rfid: string | null;
  patientData: { name: string; dob: string; gender: string } | null;
}

const BehaviouralAnalysisModal: React.FC<BehaviouralAnalysisModalProps> = ({ isOpen, onClose, rfid, patientData }) => {
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    if (rfid) {
      data.rfid = rfid;
    }
    console.log('Behavioural Analysis Form Data:', data);
    // In a real application, you would make an API call here
  };

  if (!isOpen) return null;

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="flex items-center justify-center min-h-screen px-4 text-center">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                  Behavioural Analysis Form
                </h3>
                <div className="mt-2">
                  {rfid && <p className="mb-2">RFID: {rfid}</p>}
                  <Form method="post" onSubmit={handleSubmit} className="space-y-4">
                    <input type="hidden" name="rfid" value={rfid || ''} />
                    <div>
                      <label htmlFor="assessmentDate" className="block text-gray-700 text-sm font-bold mb-2">
                        Date of Assessment:
                      </label>
                      <input type="date" id="assessmentDate" name="assessmentDate" required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                    </div>
                    <div>
                      <label htmlFor="observations" className="block text-gray-700 text-sm font-bold mb-2">
                        Observations:
                      </label>
                      <textarea id="observations" name="observations" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
                    </div>
                    <div>
                      <label htmlFor="recommendations" className="block text-gray-700 text-sm font-bold mb-2">
                        Recommendations:
                      </label>
                      <textarea id="recommendations" name="recommendations" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
                    </div>
                    <div className="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse bg-gray-50 border-t">
                      <button type="submit" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm">
                        Save
                      </button>
                      <button type="button" onClick={onClose} className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                        Cancel
                      </button>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BehaviouralAnalysisModal;
