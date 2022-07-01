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

        <div>
           <div className="flex justify-between mt-6">
        <label
          style={{
            fontWeight: '500',
            fontSize: '22px',
            lineHeight: '1px',
          }}
          className="font-sans"
        >
          Add New Categories
        </label>

        <div>
          <button className="" 
          onClick={props.handleCloseBtn}
          >
            {' '}
            < CloseIcon style={{color: 'red', fontWeight: '600px'}} />
          </button>
        </div>
      </div>  

      <div>
            <FormControl className=''>
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
                  width: '263px',
                }}
              >
                {/* {props.departmentList.map((dept, index) => {
                  console.log("dept============", dept); */}
                  return (
                    <MenuItem 
                        name= 'department'>Select your department</MenuItem>
                  )
                {/* })
                } */}
              </MSelect>

              <div>
            <TextField
              label="Enter New Categories (Rules)"
              name="mobileNumber"
            //   value={mobileNumber}
            //   onChange={e => setMobileNumber(e.target.value)}
              autoComplete="off"
              placeholder="Enter New Categories (Rules)"
              id="outlined-basic"
              style={{
                width: '263px',
              }}
            />
          </div>
            </FormControl>
          </div>

          <Button
            className="bg_red mx-auto  font-bold login_btn  w-60 h-14 rounded-full my-5 "
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
    )
}