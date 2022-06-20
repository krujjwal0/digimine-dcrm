import React from 'react'
import { TextField, Box } from '@material-ui/core';
import close from '../History/image/close.png';
import camera from '../History/image/camera.png';

export default function AddUser() {
  return (
    <div className="">
      <div className="flex">
        <label style={{
          fontFamily: 'Nunito',
          marginTop: '18px',
          fontWeight: '600',
          fontSize: '24px',
          lineHeight: '15px',
        }}>Add User</label>

        <div>
          <button className="ml-40"> <img className='rounded-full ml-3 w-[41px] h-[41px]'
            src={close}
          /></button>
        </div>
      </div>
      <br />
      <div className="flex">
        <div> <Box
          sx={{
            width: '111.5px',
            height: '102.68px',
            background: '#E5E7EB',
            borderRadius: '10px',
            transform: 'matrix(1, 0, 0, -1, 0, 0)',
          }}
        >
          <img className='rounded-full ml-3 w-[41px] h-[41px]'
            src={camera} />
        </Box>
        </div>
        <div className="my-2 ml-4">
          <div>
            <TextField
              label="Name"
              name="name"
              autoComplete="off"
              placeholder="Enter Here"
              id="outlined-basic"
              style={{
                width: '200px',
              }}
            /></div>
          <div>
            <TextField
              label="Employee ID"
              name="employee id"
              autoComplete="off"
              placeholder="Enter Here"
              id="outlined-basic"
              style={{
                width: '200px',
              }}
            /></div>
          <div>
            <TextField
              label="Phone No"
              name="phone no"
              autoComplete="off"
              placeholder="Enter Here"
              id="outlined-basic"
              style={{
                width: '200px',
              }}
            /></div>
          <div>
            <TextField
              label="Email Address"
              name="email address"
              autoComplete="off"
              placeholder="Enter Here"
              id="outlined-basic"
              style={{
                width: '200px',
              }}
            /></div>
          <div>
            <TextField
              label="Select Department"
              name="select department"
              autoComplete="off"
              placeholder="Enter Here"
              id="outlined-basic"
              style={{
                width: '200px',
              }}
            /></div>
        </div>

      </div>
    </div>
  )
}
