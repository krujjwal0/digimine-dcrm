import React from 'react';
import arrow from './images/Vector.svg';
import date from './images/Date.png'

export default function Add() {

  return (
    <div
      style={{ backgroundColor: '#E5E5E5' }}
      className=" w-full h-screen -mt-8"
    >
      <div className=" ml-72 pt-28">
        <div className="rounded-tl-[50px] bg-white h-20 border-2 border-b-slate-1000 flex">
        <div className='mt-5 ml-10 text-xl text-[#151F63]'>
        <i class="fa-solid fa-chevron-left"></i>
        </div>
          <div className="ml-4 mt-4 text-xl ">
            <p
              style={{ color: '#151F63', fontSize: '18px' }}
              className="font-sans font-semibold"
            >
               Add
            </p>
            <p
              style={{ color: '#F66B6B', fontSize: '11px' }}
              className=" font-sans ml-18"
            >
              {' '}
              Dashboard | <span style={{ color: '#151F63' }}> Add </span>
            </p>
          </div>
        </div>
        <div className="bg-white h-screen">
          <div className="flex">
            <div>
              <form>
                <p className="ml-9 mt-8 font-sans font-bold">
                  Select Department <span style={{ color: 'red' }}> * </span>{' '}
                </p>
                
                <select className="w-96 ml-9 mt-3 border-2 rounded-[20px] h-9">
                  <option className="ml-2 font-sans">Select</option>
                </select>

                <p className="ml-9 mt-7 font-sans font-bold">
                  Select
                </p>

                <select className="w-96 ml-9 mt-3 border-2 rounded-[20px] h-9">
                  <option className="ml-2 font-sans">Select OTC</option>
                </select>

                <p className="ml-9 mt-11 font-sans font-bold">
                  Date
                </p>
                    
                <select className="w-96 ml-9 mt-3 border-2 rounded-[20px] h-9">
                  <option className="ml-2 font-sans">Select Your Date  </option>
                </select>
              </form>
            </div>
            <div className="bg-[#E5E5E5] ml-6 rounded-lg mt-8">
            <form className='mr-6 mb-6'>
                <p className="ml-9 mt-8 font-bold font-sans">
                  Select Assign Person <span style={{ color: 'red' }}> * </span>{' '}
                </p>
                <select className="w-96 ml-9 mt-3 border-2 rounded-[20px] h-9">
                  <option className="ml-2 font-sans">Select</option>
                </select>

                <p className="ml-9 mt-4 font-sans font-bold">
                  Select Reveiwer
                </p>

                <select className="w-96 ml-9 mt-3 border-2 rounded-[20px] h-9">
                  <option className="ml-2 font-sans">Select </option>
                </select>

                <p className="ml-9 mt-4 font-sans font-bold">
                  Select Lead Reveiwer 
                </p>

                <select className="w-96 ml-9 mt-3 border-2 rounded-[20px] h-9 font-sans">
                  <option className="ml-2">Select</option>
                </select>
              </form>
              
            </div>
          </div>
          <div className='pt-10 ml-9'>
            <button className='w-28 h-10' style={{backgroundColor: 'rgb(246, 107, 107)', 
            color: 'white', 
            borderRadius: '50px' }}>
              NEXT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
