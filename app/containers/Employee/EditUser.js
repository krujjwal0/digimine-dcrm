import { TextField, Box, Button } from '@material-ui/core';
import React, { useState, memo, useEffect } from 'react';
import close from '../History/image/close.png';
import camera from '../History/image/camera.png';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';


import reducer from './reducer';
import saga from './saga';
// import { editUser } from './actions';

const key = 'users';



export function EditUser(props) {

  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });


  const [name, setName] = useState(props.list.name);
  const [mobileNumber, setMobileNumber] = useState(props.list.mobileNumber);
  const [employeeId, setEmployeeId] = useState(props.list.employeeId);
  const [emailId, setEmailId] = useState(props.list.emailId);
  const [departmentId, setDepartmentId] = useState(props.list.departmentId);
  const [roleId, setRoleId] = useState(1);
  const updateUser = () => { 
    let active = props.list.active;
    const data = {
      ...props.list,
      roleId, // backend3
      name,
      mobileNumber,
      emailId,
      departmentId, // 1
      employeeId,
      active,
    };
    props.editUser(data);
  }
  
  const selectDepartmentId = value => {
    console.log(value);
    setDepartmentId(value)
    // Call api to show users list of particular Location
  };
  useEffect(() => {
    props.getAllDepartment();
    props.getAllRoles();
  }, []);

  return (
    <div className="">
      <div className="flex">
        <label style={{
          fontFamily: 'Nunito',
          marginTop: '18px',
          fontWeight: '600',
          fontSize: '24px',
          lineHeight: '15px',
        }}>Update User</label>

        <div>
          <button className="ml-40"> <img className='rounded-full ml-3 w-[40px] h-[40px]'
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
          <img className='ml-8 w-[41px] h-[41px] rotate-180'
            src={camera} />
        </Box>
        </div>
        <div className="my-2 ml-4">
          <div>
            <TextField
              label="Name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              name="employeeId"
              value={employeeId}
              onChange={(e) => setEmployeeId(e.target.value)}
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
              name="mobileNumber"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
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
              name="emailId"
              value={emailId}
              onChange={(e) => setEmailId(e.target.value)}
              autoComplete="off"
              placeholder="Enter Here"
              id="outlined-basic"
              style={{
                width: '200px',
              }}
            /></div>
          <div>
          <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">
                Department
              </InputLabel>
              <MSelect
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="departmentId"
                required={true}
                onClick={(e) => selectDepartmentId(e)}
                value={departmentId}
                style={{
                  width: '175px',
                }}
              >
                {props.departmentList.map((dept, index) => {
                  console.log("dept============", dept);
                  return (
                    <MenuItem key={index} name={dept.name} value={dept.id}>{dept.name}</MenuItem>
                  )
                })
                }
              </MSelect>
            </FormControl>
          </div>
          <div>
          <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">
                Role
              </InputLabel>
              <MSelect
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="roleId"
                required={true}
                onClick={(e) => selectRoleId(e)}
                value={roleId}
                style={{
                  width: '175px',
                }}
              >
                {props.rolesList.map((role, index) => {
                  console.log("dept============", role);
                  return (
                    <MenuItem key={index} name={role.name} value={role.id}>{role.name}</MenuItem>
                  )
                })
                }
              </MSelect>
            </FormControl>
          </div>
          <div className="mt-10"><Button
            onClick={() => updateUser()}
            style={{
              position: 'absolute',
              width: '155px',
              height: '40px',
              background: '#98E91D',
              borderRadius: '60px'
            }}>Update</Button></div>
        </div>

      </div>
    </div>
  )
}

EditUser.propTypes = {
  // editUser: PropTypes.func,
};

const mapStateToProps = state => ({
  // usersList: state.users.EmployeeCardList > 0 ? state.users.EmployeeCardList : []
});

export function mapDispatchToProps(dispatch) {
  return {
    // editUser: data => dispatch(editUser(data)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(EditUser);
