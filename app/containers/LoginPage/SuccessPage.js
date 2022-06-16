import React from 'react';
import userImage from './images/user.jpg';
import './style.css';
import Button from '@material-ui/core/Button';


export default function Login() {
  return (
    <div className="font-sans login_page  py-">
      <div className="container h-full min-h-full relative z-10">
        <div className="flex justify-end flex-wrap h-full  min-h-full items-center">
          <div className="card bg-white shadow-lg rounded-3xl pt-10 pb-20 px-10 max-w-xl w-1/2">
              <div className="userImage text-center">
              <img src={userImage} alt="UserImage" className="w-full mx-auto mb-4"/>
              </div>

              <p className=" font-sans text-center font-semibold" style={{fontSize:'16px', color:"#000"}}>Rajat Kapoor</p>
              <h1 className="text-center font-bold font-sans text-3xl mt-14 text_red">Login Successful!</h1>
              <p className=" text-center font-sans font-medium mb-5 text_blue" style={{fontSize:'18px'}}>You have successfully signed into <br/>your account</p>   
              <div className="form_box w-full">
  
              <Button className="bg_red otp_btn mx-auto   font-sans login_btn  w-60 rounded-3xl my-5">
                Continue
              </Button>

            </div>
          </div>
        </div>
        <div className="msg_box  flex flex-wrap pt-5">
          <div className="w-1/2 lg:-mt-20 quote_box md:text-4xl text-2xl font-bold"><h3 className="text-white font-sans">Smart Platform for</h3><h3 className="text_blue  font-sans">
Smart People</h3></div>
<div className="copyright_text w-1/2 text-center text-xs font-sans text-white">© 2020 MineMagma. All Rights Reserved</div>
        </div>
      </div>
      
    </div>
  );
}