import React, { useState, useRef } from 'react';

// import "../styles/PopUp.css"


const Popup = ({ onClose, onOtpSubmit }) => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputRefs = useRef([React.createRef(), React.createRef(), React.createRef(), React.createRef()]);

  const handleOtpChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    const enteredOtp = Number(otp.join(''));
    onOtpSubmit(enteredOtp);
  };

  const handleInputChange = (index, event) => {
    const { value } = event.target;
    const maxLength = 1;

    if (value.length <= maxLength) {
      handleOtpChange(index, value);
      if (index < inputRefs.current.length - 1 && value.length >= maxLength) {
        inputRefs.current[index + 1].current?.focus();
      }
    }
  };

  const handleInputKeyDown = (index, event) => {
    if (event.key === 'Backspace' && otp[index] === '') {
      if (index > 0) {
        inputRefs.current[index - 1].current?.focus();
      }
    }
  };

  return (
    <div id='popupdiv'>
      <div id="popup" className="popup openpopup">
        <h1>EMAIL <br /> VERIFICATION</h1>
        <h3>Check Your Email for OTP</h3>
        {/* <h3>Check your Email for OPT</h3> */}

        <form onSubmit={handleOtpSubmit}>
          <div id="otpInput">
            <h3>Enter Your OTP</h3>
            {otp.map((value, index) => (
              <input
                key={index}
                type="number"
                value={value}
                onChange={(e) => handleInputChange(index, e)}
                onKeyDown={(e) => handleInputKeyDown(index, e)}
                maxLength={1}
                ref={inputRefs.current[index]}
                style={{ marginRight: index < otp.length - 1 ? '5px' : 0 }}
              />
            ))}
          </div>
          <button type="submit"  id="otpButton">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Popup;
