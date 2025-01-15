import React, { useState, useEffect, useRef } from 'react';
import { CreditCard } from 'lucide-react';

const CheckInPage = () => {
  const [input, setInput] = useState('');
  const [message, setMessage] = useState({ text: '', type: null });
  const [notification, setNotification] = useState({ text: '', type: null });
  const inputRef = useRef(null);
  const [inputTimeout, setInputTimeout] = useState(null);

  const showNotification = (text, type) => {
    setNotification({ text, type });
    setTimeout(() => setNotification({ text: '', type: null }), 3000);
  };

  const handleSubmit = () => {
    // Get member data from localStorage
    const memberDataStr = localStorage.getItem('memberData');
    if (!memberDataStr) {
      showNotification('No member registered in the system.', 'error');
      setInput('');
      return;
    }

    try {
      const memberData = JSON.parse(memberDataStr);
      
      // Check if the input matches the member's RFID
      if (memberData.rfid === input) {
        // Log the check-in
        const checkInOutLog = JSON.parse(localStorage.getItem('checkInOutLog') || '[]');
        const lastLog = checkInOutLog[checkInOutLog.length - 1];
        
        // Check if the last log is for this member and they haven't checked out
        if (lastLog && lastLog.rfid === memberData.rfid && !lastLog.checkOutTime) {
          // This is a check-out
          lastLog.checkOutTime = new Date().toISOString();
          setMessage({ 
            text: `Goodbye, ${memberData.firstName} ${memberData.lastName}!`, 
            type: 'welcome' 
          });
        } else {
          // This is a check-in
          checkInOutLog.push({
            rfid: memberData.rfid,
            memberName: `${memberData.firstName} ${memberData.lastName}`,
            checkInTime: new Date().toISOString()
          });
          setMessage({ 
            text: `Welcome, ${memberData.firstName} ${memberData.lastName}!`, 
            type: 'welcome' 
          });
        }
        
        localStorage.setItem('checkInOutLog', JSON.stringify(checkInOutLog));
        setInput('');
        
        // Reset message after 5 seconds
        setTimeout(() => {
          setMessage({ text: '', type: null });
          if (inputRef.current) {
            inputRef.current.focus();
          }
        }, 5000);
      } else {
        showNotification('Invalid RFID. Please try again.', 'error');
        setInput('');
      }
    } catch (error) {
      showNotification('Error reading member data. Please contact administrator.', 'error');
      setInput('');
    }
    
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  // Handle input changes with debounce
  useEffect(() => {
    if (input) {
      // Clear existing timeout
      if (inputTimeout) {
        clearTimeout(inputTimeout);
      }

      // Set new timeout for submission
      const newTimeout = setTimeout(() => {
        handleSubmit();
      }, 500); // 500ms delay after typing stops

      setInputTimeout(newTimeout);
    }

    return () => {
      if (inputTimeout) {
        clearTimeout(inputTimeout);
      }
    };
  }, [input]);

  // Keep focus on input and handle key events
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }

    const interval = setInterval(() => {
      if (inputRef.current && document.activeElement !== inputRef.current) {
        inputRef.current.focus();
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col items-center justify-center p-4">
      {notification.text && (
        <div className="fixed top-4 right-4 left-4 md:left-auto md:w-96 z-50">
          <div className={`p-4 rounded-lg shadow-lg ${
            notification.type === 'error' 
              ? 'bg-red-500 text-white' 
              : 'bg-blue-500 text-white'
          }`}>
            {notification.text}
          </div>
        </div>
      )}

      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6">
        <div className="text-center">
          <div className="mb-6 flex justify-center">
            <CreditCard className="w-16 h-16 text-blue-600" />
          </div>
          
          <h2 className="text-2xl font-bold mb-4">Check In / Out</h2>
          <p className="text-gray-600 mb-6">
            Please scan your RFID card
          </p>

          {message.text && (
            <div className={`mb-6 p-3 rounded-lg ${
              message.type === 'welcome' 
                ? 'bg-green-100 text-green-800' 
                : 'bg-red-100 text-red-800'
            }`}>
              {message.text}
            </div>
          )}

          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="opacity-0 absolute w-0 h-0 p-0 m-0 border-0"
            autoComplete="off"
          />
        </div>
      </div>
    </div>
  );
};

export default CheckInPage;