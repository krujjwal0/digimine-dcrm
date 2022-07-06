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

export default function AddSubCategories(props) {
  console.log("propss===", props);
  const [state, setState] = useState({ name:"", title: "", responsibility: "", description:"",circular:"" });
  const handleChange = e => {
    const { name, value } = e.target;
    setState(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  return (
    <div className="ml-8 mt-2 w-full mb-12 px-2">
      <div className="flex w-full mt-6">
        <div className='w-11/12'>
          <label
            style={{
              fontWeight: '500',
              fontSize: '24px',
              lineHeight: '1px',
              color: ' #000000',
              fontWeight: '700'
            }}
            className="font-sans font-normal font-black"
          >
            Add Sub Rules
          </label>
        </div>

        <div className="-mt-2 ">
          <button className="" onClick={props.handleCloseBtn}>
            {' '}
            <CloseIcon style={{ color: 'red', fontWeight: '600px' }} />
          </button>
        </div>
      </div>

      <div className="mt-5">
        <div className="flex flex-col mt-10 font-sans ">
          <label className="font-sans font-semibold" style={{ color: '#66737E', fontSize: '12px', textTransform: "uppercase" }}>Title of the Rules/Regulations</label>

          <TextField fullWidth
            id="standard-basic"
            // label="Standard"
            variant="standard"
            name="title"
            value={state.title}
            onChange={(e) => handleChange(e)}
            className="font-sans "
            style={{ marginTop: '3px', placeholder: '#66737E' }}
          />
        </div>

        <div className="flex flex-col mt-10 font-sans ">
          <label className="font-sans font-semibold" style={{ color: '#66737E', fontSize: '12px', textTransform: "uppercase" }}>Name of Sub Rule</label>
          <TextField fullWidth
            id="standard-basic"
            // label="Standard"
            variant="standard"
            name="name"
            value={state.name}
            onChange={(e) => handleChange(e)}
            className="font-sans "
            style={{ marginTop: '3px', placeholder: '#66737E' }}
          />
        </div>

        <div className="flex flex-col mt-7 font-sans">
          <label className="font-sans font-semibold" style={{ color: '#66737E', fontSize: '12px', textTransform: "uppercase" }}>Responsibility</label>
          <TextField fullWidth
            id="standard-basic"
            // label="Standard"
            variant="standard"
            name="responsibility"
            onChange={(e) => handleChange(e)}
            value={state.responsibility}
            style={{ marginTop: '3px', placeholder: '#66737E' }}
          />
        </div>
        <div className='font-sans mt-7 flex flex-col'>
          <label className="font-sans font-semibold" style={{ color: '#66737E', fontSize: '12px', textTransform: "uppercase" }} for="review">Description</label>

          <textarea style={{ color: '#66737E', fontSize: '12px' }} className='font-sans mt-3 border-2 border-gray-300 items-center' id="review"
            name="description"
            value={state.description}
            rows="4" cols="50"
            onChange={(e) => handleChange(e)}
          >
          </textarea>
        </div>

        <div className="flex flex-col mt-7 font-sans">
          <label className="font-sans font-semibold" style={{ color: '#66737E', fontSize: '12px', textTransform: "uppercase" }}>Relevant Circulars</label>
          <TextField fullWidth
            id="standard-basic"
            // label="Standard"
            variant="standard"
            name="circular"
            onChange={(e) => handleChange(e)}
            value={state.circular}
            className="font-sans"
            style={{ marginTop: '3px', placeholder: '#66737E' }}
          />
        </div>

        <div className='font-sans mt-9'>
          <p className="font-sans font-semibold" style={{ color: '#66737E', fontSize: '12px', textTransform: "uppercase" }}>
            Attachment Circulars
            <button
              className="font-sans mt-5 flex w-36 h-9 text-white rounded-full flex justify-center"
              style={{ background: '#132B6B' }}
            >
              <p className="mt-2 font-sans">Browse</p>
            </button>
          </p>
        </div>
      </div>
      <div className="mt-12 mb-12 ">
        <Button
          className="bg_red  font-bold login_btn mt-7  w-56 h-12 rounded-full   "
          style={{ borderRadius: '50px' }}
          onClick={e => props.createSubRuleInCategory(state.name, props.parentRule, state.title, state.responsibility, state.description, state.circular)}
        >
          <p className="font-sans font-bold text-lg" style={{ color: '#fff' }}>
            Create Sub Rules
          </p>
        </Button>
      </div>
    </div>
  );
}
