import React from 'react';
import { Form } from '@remix-run/react';

interface HIVTestingCaseFormProps {
  rfid: string | null;
  patientData: { name: string; dob: string; gender: string } | null;
}

const HIVTestingCaseForm: React.FC<HIVTestingCaseFormProps> = ({ rfid, patientData }) => {
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    // Add RFID to the data
    if (rfid) {
      data.rfid = rfid;
    }
    console.log('HIV Testing Case Form Data:', data);

    // In a real application, you would make an API call here to save the data.  Example:
    // try {
    //   const response = await fetch('/api/hiv-test-results', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(data),
    //   });
    //   // Handle response
    // } catch (error) {
    //   console.error('Error saving data:', error);
    // }
  };

  return (
    <div>
      <h2>HIV Testing Services Case Form</h2>
      {rfid && <p>RFID: {rfid}</p>}
      {patientData && (
        <div>
          <h3>Patient Details</h3>
          <p>Name: {patientData.name}</p>
          <p>Date of Birth: {patientData.dob}</p>
          <p>Gender: {patientData.gender}</p>
        </div>
      )}
      <Form method="post" onSubmit={handleSubmit}>
        <input type="hidden" name="rfid" value={rfid || ''} />
        <div>
          <label htmlFor="dateOfTest">Date of Test:</label>
          <input type="date" id="dateOfTest" name="dateOfTest" required />
        </div>
        <div>
          <label htmlFor="testResult">Test Result:</label>
          <select id="testResult" name="testResult" required>
            <option value="">Select Result</option>
            <option value="positive">Positive</option>
            <option value="negative">Negative</option>
            <option value="inconclusive">Inconclusive</option>
          </select>
        </div>
        <div>
          <label htmlFor="counselorInitials">Counselor's Initials:</label>
          <input type="text" id="counselorInitials" name="counselorInitials" required />
        </div>
        <div>
          <label htmlFor="followUpRequired">Follow-up Required:</label>
          <select id="followUpRequired" name="followUpRequired" required>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button type="submit">Save</button>
      </Form>
    </div>
  );
};

export default HIVTestingCaseForm;
