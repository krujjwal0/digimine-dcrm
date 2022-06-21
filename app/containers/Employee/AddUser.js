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

import reducer from './reducer';
import saga from './saga';
import { addUser, getAllDepartment, getAllRoles } from './actions';

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
  return (
    <div className="">
      <div className="flex">
        <label
          style={{
            fontFamily: 'Nunito',
            marginTop: '18px',
            fontWeight: '600',
            fontSize: '24px',
            lineHeight: '15px',
          }}
        >
          Add User
        </label>

        <div>
          <button className="ml-40">
            {' '}
            <img className="rounded-full ml-3 w-[40px] h-[40px]" src={close} />
          </button>
        </div>
      </div>
      <br />
      <div className="flex">
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
            <img className="ml-8 w-[41px] h-[41px] rotate-180" src={camera} />
          </Box>
        </div>
        <div className="my-2 ml-4">
          <div>
            <TextField
              label="Name"
              name="name"
              value={name}
              onChange={e => setName(e.target.value)}
              autoComplete="off"
              placeholder="Enter Here"
              id="outlined-basic"
              style={{
                width: '200px',
              }}
            />
          </div>
          <div>
            <TextField
              label="Employee ID"
              name="employeeId"
              value={employeeId}
              onChange={e => setEmployeeId(e.target.value)}
              autoComplete="off"
              placeholder="Enter Here"
              id="outlined-basic"
              style={{
                width: '200px',
              }}
            />
          </div>
          <div>
            <TextField
              label="Phone No"
              name="mobileNumber"
              value={mobileNumber}
              onChange={e => setMobileNumber(e.target.value)}
              autoComplete="off"
              placeholder="Enter Here"
              id="outlined-basic"
              style={{
                width: '200px',
              }}
            />
          </div>
          <div>
            <TextField
              label="Email Address"
              name="emailId"
              value={emailId}
              onChange={e => setEmailId(e.target.value)}
              autoComplete="off"
              placeholder="Enter Here"
              id="outlined-basic"
              style={{
                width: '200px',
              }}
            />
          </div>
          <div>
            <TextField
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
            />
          </div>
          <div className="mt-10">
            <Button
              onClick={() => insertUser()}
              style={{
                position: 'absolute',
                width: '155px',
                height: '40px',
                background: '#98E91D',
                borderRadius: '60px',
              }}
            >
              Save
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
  // usersList: state.users.EmployeeCardList.length > 0 ? state.users.EmployeeCardList : []
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
