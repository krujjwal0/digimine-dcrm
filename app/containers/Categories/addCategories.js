import { TextField, Box, Button } from '@material-ui/core';
import React, { useState, memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import MSelect from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import CloseIcon from '@material-ui/icons/Close';


export default function AddCategories(props){
  
    return(

        <div className='ml-8 mt-2'>
           <div className="flex  mt-6">
            <div>
        <label
          style={{
            fontWeight: '700',
            fontSize: '24px',
            lineHeight: '1px',
          }}
          className="font-sans"
        >
          Add New Categories
        </label>
        </div>

        <div className='-mt-2 ml-36 '>
          <button className="" 
          onClick={props.handleCloseBtn}
          >
            {' '}
            < CloseIcon style={{color: 'red', fontWeight: '600px'}} />
          </button>
        </div>
      </div>  

      <div className='mt-5'>
            <FormControl className='font-sans'>
              <InputLabel id="demo-simple-select-label">
                Department
              </InputLabel>
              <MSelect
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="departmentId"
                required={true}
                // onClick={(e) => selectDepartmentId(e)}
                // value={departmentId}
                style={{
                  width: '190%',
                }}
                 className="font-sans"
              >
                {/* {props.departmentList.map((dept, index) => {
                  console.log("dept============", dept); */}
                  return (
                    <MenuItem 
                        name= 'department' className='font-sans '>Select Your Department</MenuItem>
                  )
                {/* })
                } */}
              </MSelect>

              <div className='mt-2' style={{fontSize: '5px'}}>
            <TextField
              label="Enter New Categories (Rules)"
              name="mobileNumber"
            //   value={mobileNumber}
            //   onChange={e => setMobileNumber(e.target.value)}
              autoComplete="off"
              placeholder="Enter New Categories (Rules)"
              id="outlined-basic"
              style={{
                width: '190%',
                fontSize: '5px'
              }}
              className="font-sans"
            />
          </div>
            </FormControl>
          </div>
<div className='mt-12 mb-12 '>
          <Button
            className="bg_red  font-bold login_btn mt-7  w-52 h-12 rounded-full   "
            style={{ borderRadius: '50px' }}
            // onClick={e => login(e)}
          >
            <p
              className="font-sans font-bold text-lg"
              style={{ color: '#fff' }}
            >
              Create Rules
            </p>
          </Button>
          </div>
        </div>
    )
}