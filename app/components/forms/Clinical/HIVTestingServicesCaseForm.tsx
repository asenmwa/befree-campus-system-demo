import React from 'react';

interface HIVTestingServicesCaseFormProps {
  rfid: string | null;
}

const HIVTestingServicesCaseForm: React.FC<HIVTestingServicesCaseFormProps> = ({ rfid }) => {
  return (
    <div>
      <h3>HIV Testing Services Case Form</h3>
      {rfid && <p>RFID: {rfid}</p>}
      {/* Add form fields here */}
    </div>
  );
};

export default HIVTestingServicesCaseForm;
