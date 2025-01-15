import React, { useState } from 'react';

const CheckInOut = () => {
  const [memberId, setMemberId] = useState('');
  const [activity, setActivity] = useState('');
  const [isCheckingIn, setIsCheckingIn] = useState(true);
  const [timestamp, setTimestamp] = useState('');
  const [attendance, setAttendance] = useState<
    { memberId: string; activity: string; timestamp: string; type: string }[]
  >([]);
  const [message, setMessage] = useState('');

  const handleScan = () => {
    // Simulate RFID scan
    const now = new Date();
    setTimestamp(now.toLocaleTimeString());
    setMessage(`Member ${memberId} checked ${isCheckingIn ? 'in' : 'out'} at ${now.toLocaleTimeString()}`);
    setAttendance([
      ...attendance,
      {
        memberId,
        activity,
        timestamp: now.toLocaleTimeString(),
        type: isCheckingIn ? 'Check-in' : 'Check-out',
      },
    ]);
  };

  const handleLookup = () => {
    // Simulate member lookup
    setMessage(`Looking up member ID: ${memberId}`);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Check-In/Out System</h2>
      <div className="mb-4">
        <label className="block mb-2">
          Member ID:
          <input
            type="text"
            value={memberId}
            onChange={(e) => setMemberId(e.target.value)}
            className="border p-2"
          />
        </label>
        <button
          onClick={handleLookup}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Lookup
        </button>
      </div>
      <div className="mb-4">
        <label className="block mb-2">
          Activity:
          <select
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
            className="border p-2"
          >
            <option value="">Select Activity</option>
            <option value="Tutoring">Tutoring</option>
            <option value="Workshop">Workshop</option>
            <option value="Counseling">Counseling</option>
            {/* Add more activities */}
          </select>
        </label>
      </div>
      <div className="mb-4">
        <button
          onClick={handleScan}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          {isCheckingIn ? 'Check-In' : 'Check-Out'}
        </button>
        <button
          onClick={() => setIsCheckingIn(!isCheckingIn)}
          className="ml-2"
        >
          Switch to {isCheckingIn ? 'Check-Out' : 'Check-In'}
        </button>
      </div>
      {message && <p>{message}</p>}
      <div>
        <h3>Daily Attendance</h3>
        <ul>
          {attendance.map((record, index) => (
            <li key={index}>
              {record.memberId} - {record.activity} - {record.timestamp} -{' '}
              {record.type}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CheckInOut;
