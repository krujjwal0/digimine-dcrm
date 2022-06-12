// // import React from 'react';
// // import LoginFirstImage from './images/image1.png';
// // import LoginSecondImage from './images/Login2.svg';
// // import LoginThirdImage from './images/Login3.svg';
// // import LoginImage from './images/loginpageLogo.svg';
// // import Resend from './images/resendImage.svg';
// // import './style.css';
// // // import TextField from '@mui/material/TextField';

// // export default function Login() {
// //   return (
// //     <div className="font-sans">
// //       <div className="body1" />
// //       <div className="flex">
// //         <div className="-mt-40">
// //           <img className="absolute" src={LoginThirdImage} />
// //           <img className="absolute" src={LoginSecondImage} />
// //         </div>
// //         <div
// //           className="lg:w-2/6 md:max-w-md z-0"
// //           style={{ marginTop: '-500px', marginLeft: '780px' }}
// //         >
// //           <div
// //             className="card bg-white shadow-md rounded-lg px-4 py-4 "
// //             style={{ height: '450px' }}
// //           >
// //             <div className="ml-12 mt-4">
// //               <img src={LoginImage} />
// //             </div>
// //             <h2 className="text-xl text-center font-bold text-blue-800 mt-6">
// //               OTP
// //             </h2>
// //             <h4 className="text-md text-center font-normal text-blue-400 mt-2 ml-6">
// //               Enter the 4 digit OTP code sent at your email address{' '}
// //               <span>jyoti@gmail.com</span>
// //             </h4>
// //             <div className="flex mt-6 pl-2">
// //               <img className="" src={Resend} />
// //               <p className="font-sans mr-1">Resend Otp</p>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// import React,{useState} from 'react';
// import LoginFirstImage from './images/image1.png';
// import LoginSecondImage from './images/Login2.svg';
// import LoginThirdImage from './images/Login3.svg';
// import LoginImage from './images/loginpageLogo.svg';
// import Resend from './images/resendImage.svg';
// import './style.css';
// import { Card } from '@material-ui/core';
// import CardContent from '@material-ui/core/CardContent';
// import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';

// export default function EmpLogin() {

//   return (
//     <div className="font-sans">
//       <div className="body">
//         <div className="">
//           <div className="absolute ">
//             <Card
//               className="mt-20 ml-64 w-1/3 h-2/5 p-4 font-sans "
//               style={{
//                 borderRadius: '25px',
//                 boxShadow: ' 0px 4px 40px rgba(108, 108, 108, 0.3)',
//                 marginLeft: '800px',
//               }}
//             >
//               <CardContent>
//                 <CardContent className="flex justify-center -mt-3">
//                   <img className="" src={LoginImage} />
//                 </CardContent>
//                 <CardContent className="-mt-6">
//                   <p
//                     className="flex justify-center p-5 ml-2 text-2xl font-sans font-bold"
//                     style={{ color: '#132B6B ' }}
//                   >
//                     Login
//                   </p>
//                   <div className="mt-6">
//                     <p className=" text-sm text-red font-sans">
//                       <TextField
//                         id="standard-basic"
//                         placeholder="Email Address"
//                         className="w-full"
//                         label="Email Address"
//                       />
//                     </p>

//                     <p className="font-sans flex justify-end font-normal"
//                     style={{fontSize: "14px", color: "#EB5757"}}>Error Message</p>
//                   </div>

//                 </CardContent>

//                   <div className="font-sans ml-9 mt-20">
//                   <Button
//                     variant="contained"
//                     style={{
//                       backgroundColor: '#F66B6B',
//                       color: '#FFFFFF',
//                       borderRadius: '60px',
//                       width: '245px',
//                       height: '50px',
//                     }}
//                   >
//                     <p className="font-sans font-bold" style={{fontSize: "20px"}}>Login</p>
//                   </Button>
//                 </div>

//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

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
                      className="flex justify-center p-5 ml-2 mt-8 text-4xl font-sans font-bold"
                      style={{ color: '#132B6B ' }}
                    >
                      Login
                    </p>
                    <div className="mt-28">
                      <p className=" text-xl text-red font-sans">
                        <TextField
                          id="standard-basic"
                          placeholder="Email Address"
                          className="w-full text-lg"
                        />
                      </p>

                      <p
                        className="font-sans flex justify-end font-normal"
                        style={{ fontSize: '24px', color: '#EB5757' }}
                      >
                        Error Message
                      </p>
                    </div>
                    {/* </div> */}
                  </CardContent>

                  <div className="font-sans ml-28 mt-32">
                    <Button
                      variant="contained"
                      style={{
                        backgroundColor: '#F66B6B',
                        color: '#FFFFFF',
                        borderRadius: '60px',
                        width: '320px',
                        height: '80px',
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
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
