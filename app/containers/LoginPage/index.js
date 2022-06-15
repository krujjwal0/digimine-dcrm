import React, { useState, useEffect } from 'react';
import logoIcon from './images/logo.svg';
import backgroundImage from './images/head.png';
import Login from './LoginPage';

export default function SplashScreen() {
  const [showView, setShowView] = useState();
  const [a, setA] = useState(true);
  useEffect(() => {
    setTimeout(splash, 3000);
  }, []);
  const splash = () => {
    setA(false);
  };

  return a ? (
    <div>
      <div className="bg-white w-full">
        <div>
          
          <img className="w-full h-screen" src={backgroundImage} />
        </div>
      </div>

      {/* {showView ? (
        <div className="font-sans">
        <div className="body1">
          <div className="">
            <div className="absolute ">
              <Card
                className="mt-20 ml-64 w-2/5 h-1/4 p-4 font-sans "
                style={{
                  borderRadius: '25px',
                  boxShadow: ' 0px 4px 40px rgba(108, 108, 108, 0.3)',
                  marginLeft: '800px',
                }}
              >
                <CardContent>
                  <CardContent className="flex justify-center -mt-3">
                    <img className="" src={LoginImage} />
                  </CardContent>
                  <CardContent className="-mt-6">
                    <p
                      className="flex justify-center p-5 ml-2 text-2xl font-sans font-bold"
                      style={{ color: '#132B6B ' }}
                    >
                      Login
                    </p>
                    <div className="mt-6">
                      <p className=" text-sm text-red font-sans">
                        <TextField
                          id="standard-basic"
                          placeholder="Enter your username"
                          className="w-full"
                        />
                      </p>
  
                      <p className="font-sans flex justify-end font-normal" style={{fontSize: "14px", color: "#EB5757"}}>Error Message</p>
                    </div>
                    <div className="mt-5 ">
                      <p className=" text-sm text-red font-sans ">
                        <TextField
                          id="standard-basic"
                          placeholder="Password"
                          className="w-full ml-3"
                        />
                         <>
                   
                   {!showPassword ? 
                  <VisibilityOffIcon 
                 
                  className='mt-2 z-0 -ml-10' /> : 
                  <VisibilityIcon className='mt-5 z-0 -ml-10'
                  />
                  }
  
                  </>
                      </p>
                    </div>
                  </CardContent>
  <div className='ml-8'>
                  <p className="font-sans ml-20 mt-4" style={{fontSize: "14px", color:"#EB5757"}}>
                    Invalid username password
                  </p>
                  <div className="font-sans ml-14 mt-5">
                    <Button
                      variant="contained"
                      style={{
                        backgroundColor: '#F66B6B',
                        color: '#FFFFFF',
                        borderRadius: '60px',
                        width: '245px',
                        height: '50px',
                      }}
                    >
                      <p className="font-sans font-bold" style={{fontSize: "20px"}}>Login</p>
                    </Button>
                  </div>
                  <p className="ml-24 mt-4 font-sans font-normal" 
                  style={{color:"#124D50", fontSize: "14px"}}>Forget your password?</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      ) : null} */}
    </div>
  ) : (
    <Login />
  );
}
