import { useEffect, useRef, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const inputFieldRef = useRef([]);
  const [otp, setOtp] = useState(new Array(6).fill(''));

  const handleInputFieldChange = (e, index) => {
    const value = e.target.value;
    if (value >= '0' && value <= '9' && value.length === 1) {
      const updatedOtp = [...otp];
      updatedOtp[index] = value;
      setOtp(updatedOtp);

      if (index < otp.length - 1) {
        inputFieldRef.current[index + 1].focus();
      }
    } else {
      e.target.value = '';
    }
  };

  const handleKeyChange = (e, index) => {
    switch (e.code) {
      case 'Backspace': {
        const updatedOtp = [...otp];
        updatedOtp[index] = e.target.value;
        setOtp(updatedOtp);
        if (index > 0) {
          inputFieldRef.current[index - 1].focus();
          inputFieldRef.current[index - 1].select();
        }
        break;
      }
      case 'Enter': {
        if (otp.find((val) => val != '')) {
          console.log(otp.join(''));
        }
        break;
      }
    }
  };
  console.log({ otp });
  return (
    <>
      <h1>REACT OTP INPUT</h1>
      <div style={{ display: 'flex', gap: '5px' }}>
        {Array.from({ length: 6 }).map((inputField, i) => {
          return (
            <input
              key={i}
              placeholder={'o'}
              ref={(reference) => (inputFieldRef.current[i] = reference)}
              style={{
                width: '40px',
                height: '40px',
                textAlign: 'center',
                borderRadius: '10px',
              }}
              onChange={(e) => handleInputFieldChange(e, i)}
              onKeyUp={(e) => handleKeyChange(e, i)}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
