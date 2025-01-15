import React from 'react';
import { Form } from '@remix-run/react';

interface GBVCaseFormProps {
  rfid: string | null;
  patientData: { name: string; dob: string; gender: string } | null;
}

const GBVCaseForm: React.FC<GBVCaseFormProps> = ({ rfid, patientData }) => {
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    if (rfid) {
      data.rfid = rfid;
    }
    console.log('GBV Case Form Data:', data);
    // In a real application, you would make an API call here to save the data.
  };

  return (
    <div>
      <h2>GBV Case Form</h2>
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
          <label htmlFor="typeOfIncident">Type of Incident:</label>
          <input type="text" id="typeOfIncident" name="typeOfIncident" required />
        </div>
        <div>
          <label htmlFor="locationOfIncident">Location of Incident:</label>
          <input type="text" id="locationOfIncident" name="locationOfIncident" required />
        </div>
        <div>
          <label htmlFor="detailsOfIncident">Details of Incident:</label>
          <textarea id="detailsOfIncident" name="detailsOfIncident" required />
        </div>
        <button type="submit">Save</button>
      </Form>
    </div>
  );
};

export default GBVCaseForm;
