import { TextField, Box, Button } from '@material-ui/core';
import React, { useState, memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import camera from '../History/image/camera.png';
import close from '../History/image/close.png';
import CloseIcon from '@material-ui/icons/Close';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import reducer from './reducer';
import saga from './saga';
import { addUser, getAllDepartment, getAllRoles } from './actions';
import { Divider } from '@material-ui/core';
const key = 'users';

export function AddUser(props) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const [name, setName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [employeeId, setEmployeeId] = useState('');
  const [emailId, setEmailId] = useState('');
  const [departmentId, setDepartmentId] = useState(1);
  const [roleId, setRoleId] = useState(3);
  const insertUser = () => {
    // Add condition for blank
    const data = {
      roleId, // backend3
      name,
      mobileNumber,
      emailId,
      departmentId, // 1
      employeeId,
    };
    props.addUser(data);
  };
  useEffect(() => {
    props.getAllDepartment();
    props.getAllRoles();
  }, []);

  const selectDepartmentId = value => {
    console.log(value);
    setDepartmentId(value)
    // Call api to show users list of particular Location
  };

  return (
    <div className="">
      <div className="flex flex justify-between mt-6">
        <label
          style={{
            // fontFamily: 'Nunito',
            // marginTop: '18px',
            fontWeight: '600',
            fontSize: '24px',
            lineHeight: '15px',
          }}
          className="font-sans"
        >
          Add User
        </label>

        <div>
          <button className="">
            {' '}
            {/* <img className="rounded-full ml-3 w-[40px] h-[40px]" src={close} /> */}
           < CloseIcon style={{color: 'red', fontWeight: '600px'}} />
          </button>
        </div>
      </div>
      <br />
      <div className="flex mt-8">
        <div>
          {' '}
          <Box
            sx={{
              width: '111.5px',
              height: '102.68px',
              background: '#E5E7EB',
              borderRadius: '10px',
              transform: 'matrix(1, 0, 0, -1, 0, 0)',
            }}
          >
            {/* <img className="ml-8 w-[41px] h-[41px] rotate-180" src={camera} /> */}
           <div className=' ml-11'><PhotoCameraIcon className='rotate' style={{marginTop: '44px', }} /></div> 
          </Box>
        </div>
        <div className="-mt-6 ml-12">
          <div>
            <TextField
              label="Name"
              name="name"
              value={name}
              onChange={e => setName(e.target.value)}
              autoComplete="off"
              placeholder="Name"
              id="outlined-basic"
              style={{
                width: '263px',
              }}
              className="font-sans"
              
            />
          </div>
          <div>
            <TextField
              label="Employee ID"
              name="employeeId"
              value={employeeId}
              onChange={e => setEmployeeId(e.target.value)}
              autoComplete="off"
              placeholder="Employee Id"
              id="outlined-basic"
              style={{
                width: '263px',
              }}
              className="font-sans"
            />
          </div>
          <div>
            <TextField
              label="Phone No"
              name="mobileNumber"
              value={mobileNumber}
              onChange={e => setMobileNumber(e.target.value)}
              autoComplete="off"
              placeholder="Phone"
              id="outlined-basic"
              style={{
                width: '263px',
              }}
              className="font-sans"
            />
          </div>
          <div>
            <TextField
              label="Email Address"
              name="emailId"
              value={emailId}
              onChange={e => setEmailId(e.target.value)}
              autoComplete="off"
              placeholder="Email Address"
              id="outlined-basic"
              style={{
                width: '263px',
              }}
              className="font-sans"
            />
          </div>
          <div>
            <select style={{
              width: '263px',
            }}
              className=" font-sans  text-gray-150   text-black h-10  pr-8 mt-3 bg-white hover:border-gray-400"
              onClick={( )=>selectDepartmentId}
              value={departmentId}
              placeholder="Select Department"
            >
              {props.departmentList.map((data, index) => {
                console.log("dept============", data);
                return (
                  <option className='font-sans'  key={index} name={data.name} value={data.id}>
                    {data.name}
                  </option>
                );
              })}
            </select>
            <div className=''>
              < Divider style={{color: 'LightGray'}} />
            </div>
            {/* <TextField
              label="Select Department"
              name="departmentId"
              value={departmentId}
              onChange={e => setDepartmentId(e.target.value)}
              autoComplete="off"
              placeholder="Enter Here"
              id="outlined-basic"
              style={{
                width: '200px',
              }}
            /> */}
          </div>
          <div>
            <select style={{
              width: '263px',
            }}
              className=" font-sans  text-gray-150   text-black h-10  pr-8 mt-3 bg-white hover:border-gray-400"
              onClick={selectDepartmentId}
              value={roleId}
              placeholder="Select Roles"
             
            >
              {props.rolesList.map((data, index) => {
                console.log("dept============", data);
                return (
                  
                  <option className='font-sans' placeholder='Select Roles' key={index} name={data.name} value={data.id}>
                    {data.name}
                  </option>
                );
              })}
            </select>
            <div className=''>
              < Divider style={{color: 'LightGray'}} />
            </div>
          </div>
          
          <div className="mt-6">
            <Button
              onClick={() => insertUser()}
              style={{
                position: 'absolute',
                width: '160px',
                height: '40px',
                background: '#98E91D',
                borderRadius: '60px',
              }}
            >
             <p className='font-sans -ml-3'>Save</p> 
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

AddUser.propTypes = {
  addUser: PropTypes.func,
};

const mapStateToProps = state => ({
  departmentList: state.users.departmentList.length > 0 ? state.users.departmentList : [], 
   rolesList: state.users.rolesList.length > 0 ? state.users.rolesList : []

});

export function mapDispatchToProps(dispatch) {
  return {
    addUser: data => dispatch(addUser(data)),
    getAllDepartment: () => dispatch(getAllDepartment()),
    getAllRoles: () => dispatch(getAllRoles()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(AddUser);
