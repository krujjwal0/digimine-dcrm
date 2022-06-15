import React from 'react';
// import 'react-virtualized/styles.css';
// import {Column, Table} from 'react-virtualized';
// import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer';
// import List from 'react-virtualized/dist/commonjs/List';
// import { List } from "react-virtualized";

import './style.css';
import { List, AutoSizer } from 'react-virtualized';
import emp_image from '../../images/emp_image.png';
import { alpha, styled } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Switch from '@material-ui/core/Switch';

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
  { name: 'Brian Vaughn', id: 1 },
  { name: 'Brian Vaughn', id: 1 },
  // 'heena',
  // 'atulniya'
  // And so on...
];

function rowRenderer({
  key, // Unique key within array of rows
  index, // Index of row within collection
  isScrolling, // The List is currently being scrolled
  isVisible, // This row is visible within the List (eg it is not an overscanned row)
  style, // Style object to be applied to row (to position it)
}) {
  console.log('List ::::', list, key, index);
  return (
    <div key={key} style={style} className="row">
      <div>
        <img className='empImg' src={emp_image} alt="user image" />
      </div>
      <div className="content">
        <label>Employee</label>
        <p>{list[index].name}</p>
      </div>
      <div className="content">
        <label> {/*  Id */} </label>
        <p>{/* {list[index].id} */}</p>
      </div>
      <div className="content">
        <label> Department </label>
        <p>{/* {list[index].department} */}hr</p>
      </div>
      <div className="content">
        <label> Phone </label>
        <p>
          9876543210
          {/* {list[index].id} */}
        </p>
      </div>
      <div className="content">
        <label> Phone </label>
        <p>
          9876543210
          {/* {list[index].id} */}
        </p>
      </div>
      <div className="content">
        <label>Active</label>
        <p>
        <GreenSwitch {...label} defaultChecked />
          {/* {list[index].id} */}
        </p>
      </div>
    </div>
  );
}


export default function Users() {


  
  return (
    <>
      <div />
      <div className="list">
        <List
          width={900}
          height={600}
          rowCount={list.length}
          rowHeight={50}
          rowRenderer={rowRenderer}
        />
      </div>
    </>
  );
}
