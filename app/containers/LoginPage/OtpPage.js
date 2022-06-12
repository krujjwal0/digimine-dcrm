import React, { useState } from 'react';
import { Card } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import LoginFirstImage from './images/image1.png';
import LoginSecondImage from './images/Login2.svg';
import LoginThirdImage from './images/Login3.svg';
import LoginImage from './images/loginpageLogo.svg';
import Resend from './images/resendImage.svg';
import smart from './images/Smart.svg';
import './style.css';
// import TextField from '@mui/material/TextField';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="font-sans">
      <div className="body" />
      <div className="flex">
        <div className="-mt-40">
          <img
            className="absolute"
            style={{
              bottom: '-30%',
              objectFit: 'cover',
              width: '100%',
              height: 'auto',
            }}
            src={LoginThirdImage}
          />
          <img
            className="absolute"
            style={{
              bottom: '-30%',
              objectFit: 'cover',
              width: '100%',
              height: 'auto',
            }}
            src={LoginSecondImage}
          />
          <p className="z-1 absolute ml-96 ">
            <img src={smart} style={{ width: '399px', height: '96px' }} />
          </p>
          <div>
            <div className="  ">
              <Card
                className="container absolute flex-wrap justify-end mt-20  w-1/4 h-4/6 p-4 font-sans  "
                style={{
                  borderRadius: '25px',
                  boxShadow: ' 0px 4px 40px rgba(108, 108, 108, 0.3)',
                  marginLeft: '1380px',
                  marginTop: '-26%',
                }}
              >
                <CardContent>
                  <CardContent className="flex justify-center -mt-3">
                    <img className="" src={LoginImage} />
                  </CardContent>
                  <CardContent className="-mt-4">
                    <p
                      className="flex justify-center p-5 ml-2 text-4xl font-sans font-bold"
                      style={{ color: '#132B6B ' }}
                    >
                      OTP
                    </p>
                    <div
                      className="mt-3 font-normal font-sans "
                      style={{ fontSize: '16px' }}
                    >
                      <p
                        className=" font-normal font-sans "
                        style={{ fontSize: '23px', marginLeft: '7px' }}
                      >
                        Enter the 4 digit OTP code sent at your email
                        <span>address jyoti@gmail.com</span>
                      </p>
                    </div>
                    <div className="mt-14 flex">
                      <div>
                        <p className=" text-xl text-red font-sans">
                          <TextField
                            id="standard-basic"
                            className="w-28 text-lg"
                          />
                        </p>
                      </div>
                      <div className="ml-8">
                        <p className=" text-xl text-red font-sans">
                          <TextField id="standard-basic" className="w-28 " />
                        </p>
                      </div>
                      <div className="ml-8">
                        <p className=" text-xl text-red font-sans">
                          <TextField id="standard-basic" className="w-28 " />
                        </p>
                      </div>
                      <div className="ml-8">
                        <p className=" text-xl text-red font-sans">
                          <TextField id="standard-basic" className="w-28 " />
                        </p>
                      </div>
                    </div>
                  </CardContent>
                  <div className="ml-14 mt-12">
                    <p
                      className="font-sans font-semibold ml-28 mt-4 flex"
                      style={{ fontSize: '24px', color: '#EB5757' }}
                    >
                      <img src={Resend} className="ml-4" />

                      <p className="ml-7 font-sans font-semibold">Resend OTP</p>
                    </p>
                    <div className="font-sans ml-14 mt-9">
                      <Button
                        variant="contained"
                        style={{
                          backgroundColor: '#F66B6B',
                          color: '#FFFFFF',
                          borderRadius: '60px',
                          width: '320px',
                          height: '70px',
                        }}
                      >
                        <p
                          className="font-sans font-bold"
                          style={{ fontSize: '28px' }}
                        >
                          Login
                        </p>
                      </Button>
                    </div>
                    <p
                      className="ml-24 mt-12 font-sans font-semibold"
                      style={{ color: '#124D50', fontSize: '24px' }}
                    >
                      Forget your password?
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
