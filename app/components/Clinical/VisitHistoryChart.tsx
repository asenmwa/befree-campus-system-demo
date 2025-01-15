import React from 'react';

interface VisitHistoryChartProps {
  rfid: string | null;
  patientData: { name?: string; dob?: string; gender?: string } | null;
}

const VisitHistoryChart: React.FC<VisitHistoryChartProps> = ({ rfid, patientData }) => {
  return (
    <div className="border rounded p-4">
      <h3>Visit History for RFID: {rfid}</h3>
      {patientData && (
        <div>
          <p>Patient Name: {patientData.name}</p>
          <p>Date of Birth: {patientData.dob}</p>
          <p>Gender: {patientData.gender}</p>
        </div>
      )}
      {/* Chart implementation will go here */}
      <p>No visit history available.</p>
    </div>
  );
};

export default VisitHistoryChart;
