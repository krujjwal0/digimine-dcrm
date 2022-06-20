import React, { useEffect, useState,memo } from 'react';
// import 'react-virtualized/styles.css';
// import {Column, Table} from 'react-virtualized';
// import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer';
// import List from 'react-virtualized/dist/commonjs/List';
// import { List } from "react-virtualized";
import Popover from '@material-ui/core/Popover';
import './style.css';
import { List, AutoSizer } from 'react-virtualized';
import { alpha, styled, withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import MoreVert from '@material-ui/icons/MoreVert';
import { Card, CardContent } from '@material-ui/core';
import emp_image from '../../images/emp_image.png';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';


import reducer from './reducer';
import saga from './saga';
import { showEmployee } from './actions';

const key = 'users';



const GreenSwitch = styled(Switch)(({ theme }) => ({
  '& .MuiSwitch-switchBase.Mui-checked': {
    color: green[600],
    '&:hover': {
      backgroundColor: alpha(green[600], theme.palette.action.hoverOpacity),
    },
  },
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: green[600],
  },
}));
const label = { inputProps: { 'aria-label': 'Switch demo' } };

// List data as an array of strings
const list = [
  { name: 'Brian Vaughn', id: 1 },
  // 'heena',
  // 'atulniya'
  // And so on...
];

// function rowRenderer({
//   key, // Unique key within array of rows
//   index, // Index of row within collection
//   isScrolling, // The List is currently being scrolled
//   isVisible, // This row is visible within the List (eg it is not an overscanned row)
//   style, // Style object to be applied to row (to position it)
// }) {
//   console.log('List ::::', list, key, index);
//   return (
//     <div key={key} className="row rounded-full">
//       <div>
//         <img className="empImg" src={emp_image} alt="user image" />
//       </div>
//       <div className="content">
//         <label>Employee</label>
//         <p>{list[index].name}</p>
//       </div>
//       <div className="content">
//         <label> {/*  Id */} </label>
//         <p>{/* {list[index].id} */}</p>
//       </div>
//       <div className="content">
//         <label> Department </label>
//         <p>{/* {list[index].department} */}hr</p>
//       </div>
//       <div className="content">
//         <label> Phone </label>
//         <p>
//           9876543210
//           {/* {list[index].id} */}
//         </p>
//       </div>
//       <div className="content">
//         <label> Phone </label>
//         <p>
//           9876543210
//           {/* {list[index].id} */}
//         </p>
//       </div>
//       <div className="content">
//         <label>Active</label>
//         <p>
//           {/* {list[index].id} */}
//         </p>
//       </div>
//       <div className="content">
//         <MoreVert />
//       </div>
//     </div>
//   );
// }

export function Users(props) {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedC: true,
  });

  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const handleChange = event => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  useEffect(() => {
    props.showEmployee();
  }, [])
  return (
    <div className="">
      {/* <div className="list">
        <List
          width={900}
          height={600}
          rowCount={list.length}
          rowHeight={50}
          rowRenderer={rowRenderer}
        />
      </div> */}
      <Card className='w-full rounded-full h-[72px]' style={{ borderRadius: '50px', marginTop: '10px' }}>
        <CardContent>
          <div className="flex rounded-full">
            <div className=''>

              <img className='rounded-full ml-3 w-[41px] h-[41px]'
                src={emp_image}

              />

            </div>

            <div className='ml-10'>
              <p className="text-[11px] font-sans font-semibold text-[#66737E] mt-[2px]">
                Employee
              </p>
              <div className='flex'>
                <p className="text-[13px] font-sans font-bold text-[#132B6B] mt-[8px]">
                  Rajat Kapoor
                </p>
                <div className="flex justify-center w-20 bg-[#F66B6B] ml-1 mt-[6px] rounded-md h-4">
                  <p className="text-center text-[11px] mt-[2px] text-white font-sans">
                    #0123456789
                  </p>
                </div>
              </div>
            </div>
            <div className='ml-10'>
              <p className="text-[11px] font-sans font-semibold text-[#66737E] mt-[2px]">
                Department
              </p>
              <p className='text-[13px] font-sans font-bold text-[#132B6B] mt-[8px]'>
                Mining
              </p>
            </div>
            <div className='ml-12'>
              <p className="text-[11px] font-sans font-semibold text-[#66737E] mt-[2px]">
                Phone
              </p>
              <p className='text-[13px] font-sans font-bold text-[#132B6B] mt-[8px]'>
                97845 56895
              </p>
            </div>
            <div className='ml-12'>
              <p className="text-[11px] font-sans font-semibold text-[#66737E] mt-[2px]">
                Email ID
              </p>
              <p className='text-[13px] font-sans font-bold text-[#132B6B] mt-[8px]'>
                rkapoor@gmail.com
              </p>
            </div>
            <div className='ml-12'>
              <p className="text-[11px] font-sans font-semibold text-[#66737E] mt-[2px]">
                Active
              </p>
              {/* <FormControlLabel
                control={<IOSSwitch checked={state.checkedB} onChange={handleChange} name="checkedB" />}
                
              /> */}
              <GreenSwitch {...label} defaultChecked />
            </div>
            <div className='mt-2 ml-8'>
              <MoreVert onClick={handleClick} />
            </div>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              style={{
                borderRadius: '15px',
                // background: '#FFFFFF',
                // boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.15)'
              }}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
            >
              <div className="p-2 m-2">
                <div><button className="my-1 mx-4" disable>Edit</button></div>
                <div><button className="my-1 mx-4" disable>Delete</button></div>
              </div>
            </Popover>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

Users.propTypes = {
  showEmployee: PropTypes.func,
};

const mapStateToProps = state => ({
  usersList: state.users.EmployeeCardList > 0 ? state.users.EmployeeCardList : []
});

export function mapDispatchToProps(dispatch) {
  return {
    showEmployee: data => dispatch(showEmployee(data)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Users);
