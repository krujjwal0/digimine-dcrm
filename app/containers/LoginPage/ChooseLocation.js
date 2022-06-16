import React from 'react';
import LoginImage from './images/Logo.svg';
import Resend from './images/resendImage.svg';
import './style.css';
import Link from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Divider } from '@material-ui/core';


export default function Location() {
  return (
    <div className="font-sans location_page  py-">
      <div className="container h-full min-h-full relative z-10">
      <div className="w-1/2  -mt-10 quote_box md:text-2xl text-xl font-semibold" style={{marginLeft: "42%"}}><h3 className="text-white font-sans">Choose Location</h3></div>
        <div className="flex justify-end mt-20 flex-wrap h-full  min-h-full items-center" style={{marginRight: "23%"}}>
          <div className="card bg-white shadow-lg rounded-3xl py-10 px-10 max-w-xl w-8/12">
           
             
              <div className="flex mt-10 ml-24  justify-between">
              
              <div className="w-24 h-5 ml-4 ">
            <select className=" font-sans  text-gray-150 w-60  text-black h-10 pl-4 pr-8 -mt-12 bg-white hover:border-gray-400">
              <option selected>Banglore</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <div className='w-60'>
            <Divider />
            </div>
            
          </div>
             
              </div>
              
            
          </div>
        </div>
        
        {/* <div className="msg_box  flex flex-wrap pt-5">
          <div className="w-1/2 lg:-mt-20 quote_box md:text-4xl text-2xl font-bold"><h3 className="text-white font-sans"></h3></div>
<div className="copyright_text w-1/2 text-center text-xs font-sans text-white">© 2020 MineMagma. All Rights Reserved</div>
        </div> */}
      </div>
      
    </div>
  );
}