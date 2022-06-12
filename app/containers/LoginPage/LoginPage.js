import React, { useEffect, useState } from 'react';
import SplashScreen from '.';
import LoginFirstImage from './images/image1.png';
import LoginSecondImage from './images/Login2.svg';
import LoginThirdImage from './images/Login3.svg';
import LoginImage from './images/loginpageLogo.svg';
import Resend from './images/resendImage.svg';
import './style.css';
// import TextField from '@mui/material/TextField';

export default function Login() {
  const [a, setA] = useState(true);
  useEffect(() => {
    setTimeout(splash, 3000);
  }, []);
  const splash = () => {
    setA(false);
  };
  return a ? (
    <SplashScreen />
  ) : (
    <div className="font-sans">
      <div className="body1" />
      <div className="flex">
        <div className="-mt-40">
          <img className="absolute" src={LoginThirdImage} />
          <img className="absolute" src={LoginSecondImage} />
        </div>
        <div
          className="lg:w-2/6 md:max-w-md z-0"
          style={{ marginTop: '-500px', marginLeft: '780px' }}
        >
          <div
            className="card bg-white shadow-md rounded-lg px-4 py-4 "
            style={{ height: '450px' }}
          >
            <div className="ml-12 mt-4">
              <img src={LoginImage} />
            </div>
            <h2 className="text-xl text-center font-bold text-blue-800 mt-6">
              OTP
            </h2>
            <h4 className="text-md text-center font-normal text-blue-400 mt-2 ml-6">
              Enter the 4 digit OTP code sent at your email address{' '}
              <span>jyoti@gmail.com</span>
            </h4>
            <div className="flex mt-6 pl-2">
              <img className="" src={Resend} />
              <p className="font-sans mr-1">Resend Otp</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
