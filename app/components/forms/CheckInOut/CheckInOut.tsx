import React, { useState, useEffect } from 'react';

interface AttendanceRecord {
  memberId: string;
  activity: string;
  checkInTime: string;
  checkOutTime: string;
  date: string;
}

const CheckInOut = () => {
  const [memberId, setMemberId] = useState('');
  const [activity, setActivity] = useState('');
  const [checkInTime, setCheckInTime] = useState('');
  const [checkOutTime, setCheckOutTime] = useState('');
  const [attendance, setAttendance] = useState<AttendanceRecord[]>([]);
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messageType, setMessageType] = useState<'success' | 'error' | ''>('');

  // Load attendance data from localStorage on component mount
  useEffect(() => {
    const savedAttendance = localStorage.getItem('attendance');
    if (savedAttendance) {
      setAttendance(JSON.parse(savedAttendance));
    }
  }, []);

  // Save attendance data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('attendance', JSON.stringify(attendance));
  }, [attendance]);

  const handleScan = () => {
    if (!memberId || !activity) {
      setMessage('Please enter Member ID and select an activity');
      setMessageType('error');
      return;
    }

    setIsLoading(true);
    // Simulate RFID scan with a delay for realism
    setTimeout(() => {
      const now = new Date();
      const time = now.toLocaleTimeString();
      
      if (!checkInTime) {
        setCheckInTime(time);
        setMessage('Member successfully checked in');
        setMessageType('success');
        setAttendance([...attendance, { 
          memberId, 
          activity, 
          checkInTime: time, 
          checkOutTime: '',
          date: now.toLocaleDateString() 
        }]);
      } else if (checkInTime && !checkOutTime) {
        setCheckOutTime(time);
        setMessage('Member successfully checked out');
        setMessageType('success');
        const updatedAttendance = attendance.map(item =>
          item.memberId === memberId && !item.checkOutTime 
            ? { ...item, checkOutTime: time } 
            : item
        );
        setAttendance(updatedAttendance);
      } else {
        setMessage('Error: Member already checked in and out for today');
        setMessageType('error');
      }
      setIsLoading(false);
    }, 800);
  };

  const handleLookup = () => {
    if (!memberId) {
      setMessage('Please enter a Member ID');
      setMessageType('error');
      return;
    }

    setIsLoading(true);
    // Simulate member lookup with a delay
    setTimeout(() => {
      // In a real app, this would query a database
      const existingMember = attendance.find(a => a.memberId === memberId);
      if (existingMember && !existingMember.checkOutTime) {
        setMessage(`Member ${memberId} is currently checked in`);
      } else if (existingMember && existingMember.checkOutTime) {
        setMessage(`Member ${memberId} has already checked out today`);
      } else {
        setMessage(`Member ${memberId} found. Ready for check-in.`);
      }
      setMessageType('success');
      setIsLoading(false);
    }, 500);
  };

  const resetForm = () => {
    setMemberId('');
    setActivity('');
    setCheckInTime('');
    setCheckOutTime('');
    setMessage('');
    setMessageType('');
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-6">
        <h4 className="text-2xl font-semibold text-gray-800">Check-In/Out System</h4>
        <span className="px-3 py-1 text-sm bg-yellow-100 text-yellow-800 rounded-full">DEMO VERSION</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="memberId">
            Member ID
          </label>
          <input
            type="text"
            id="memberId"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-maroon focus:border-transparent"
            placeholder="Enter Member ID"
            value={memberId}
            onChange={(e) => setMemberId(e.target.value)}
          />
        </div>
        <div className="flex items-end">
          <button
            onClick={handleLookup}
            disabled={isLoading}
            className="px-4 py-2 bg-maroon text-white rounded-md hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-maroon disabled:opacity-50"
          >
            {isLoading ? (
              <span className="inline-flex items-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Looking up...
              </span>
            ) : 'Lookup Member'}
          </button>
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="activity">
          Select Activity
        </label>
        <select
          id="activity"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-maroon focus:border-transparent"
        >
          <option value="">Select Activity</option>
          <option value="Life Skills">Life Skills</option>
          <option value="Tutoring">Tutoring</option>
          <option value="Sports">Sports</option>
          <option value="Mentoring">Mentoring</option>
        </select>
      </div>

      <div className="flex space-x-4 mb-6">
        <button
          onClick={handleScan}
          disabled={isLoading}
          className="flex-1 px-4 py-2 bg-maroon text-white rounded-md hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-maroon disabled:opacity-50"
        >
          {isLoading ? (
            <span className="inline-flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Processing...
            </span>
          ) : 'Scan Card'}
        </button>
        <button
          onClick={resetForm}
          className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        >
          Reset
        </button>
      </div>

      {message && (
        <div className={`p-4 rounded-md mb-6 ${
          messageType === 'success' ? 'bg-green-50 text-green-800' : 
          messageType === 'error' ? 'bg-red-50 text-red-800' : ''
        }`}>
          {message}
        </div>
      )}

      <div className="mt-8">
        <h5 className="text-xl font-semibold text-gray-800 mb-4">Daily Attendance</h5>
        {attendance.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Member ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Activity</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Check-In Time</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Check-Out Time</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {attendance.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.memberId}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.activity}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.checkInTime}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.checkOutTime || '-'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-gray-500 text-center py-4">No attendance records yet.</p>
        )}
      </div>
    </div>
  );
};

export default CheckInOut;
