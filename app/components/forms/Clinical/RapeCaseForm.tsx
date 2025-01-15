import React from 'react';
import { Form } from '@remix-run/react';

interface RapeCaseFormProps {
  rfid: string | null;
  patientData: { name: string; dob: string; gender: string } | null;
}

const RapeCaseForm: React.FC<RapeCaseFormProps> = ({ rfid, patientData }) => {
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    if (rfid) {
      data.rfid = rfid;
    }
    console.log('Rape Case Form Data:', data);
    // In a real application, you would make an API call here to save the data.
  };

  return (
    <div>
      <h2>Rape Case Form</h2>
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
          <label htmlFor="dateOfIncident">Date of Incident:</label>
          <input type="date" id="dateOfIncident" name="dateOfIncident" required />
        </div>
        <div>
          <label htmlFor="locationOfIncident">Location of Incident:</label>
          <input type="text" id="locationOfIncident" name="locationOfIncident" required />
        </div>
        <div>
          <label htmlFor="detailsOfIncident">Details of Incident:</label>
          <textarea id="detailsOfIncident" name="detailsOfIncident" required />
        </div>
        <div>
          <label htmlFor="medicalExamCompleted">Medical Exam Completed?</label>
          <select id="medicalExamCompleted" name="medicalExamCompleted" required>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button type="submit">Save</button>
      </Form>
    </div>
  );
};

export default RapeCaseForm;
