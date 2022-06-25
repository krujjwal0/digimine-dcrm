/*
 * Help
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, memo } from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { withStyles } from '@material-ui/core/styles';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';

import reducer from './reducer';
import saga from './saga';
import { Card, CardContent, FormGroup, Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import HomeIcon from '@material-ui/icons/Home';
import ClearAllIcon from '@material-ui/icons/ClearAll';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import { getQ_A } from './action';

const key = 'helpReducer';

function Help(props) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });


  useEffect(() => {
    props.getQ_A();
    console.log("Help Questions and Answers ", props.help_Q_A)
  }, [props.help_Q_A]);

  useEffect(()=>{
    console.log("Help UseEffect ", props.help_Q_A)
  },[props.help_Q_A])
  return (
    <div className="maindash">
      <div className="mx-20 mt-6  w-[95%] h-full">
        <Typography
          sx={{ display: 'flex', alignItems: 'center' }}
          color="text.primary"
          className='font-sans font-bold text-xl'
          style={{ marginLeft: '30px', fontWeight: '800', fontSize: '30px', color: '#132B6B' }}
        >Help
          {/* <ClearAllIcon sx={{ mr: 0.5 }} fontSize="inherit" /> */}
        </Typography>

        <p
          className=" font- sans font-bold ml-20 text-xl mt-5"
          style={{ color: '#F66B6B' }}
        >
          <p className="font-sans">
            Hope you can find frequently asked questions. We help you to find
            the answer !
          </p>
        </p>
        <div className="flex rounded-full">
          <div className="mt-10 absolute ml-5 ">
            <SearchIcon />
          </div>
          <input
            className=" mt-7 border-2 border-gray-300 bg-white w-full h-12 px-16 rounded-full  text-sm focus:outline-none"
            style={{}}
            type="text"
            name="search"
            placeholder="Search"
          />
        </div>

        <div className="mt-7">
          {props.help_Q_A.length > 0 ? props.help_Q_A.map((ques, i) =>
            <Accordion
              key={i}
              className="w-full"
              style={{ border: '1px solid #DCE1EA', borderRadius: '10px' }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className="mt-8" style={{ marginTop: '7px' }}>
                  {ques.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  {ques.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ) : <p>!</p>}

        </div>

        <Accordion
           
              className="w-full"
              style={{ border: '1px solid #DCE1EA', borderRadius: '10px' }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className="mt-8" style={{ marginTop: '7px' }}>
                question
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                 Lorem
                </Typography>
              </AccordionDetails>
            </Accordion>
               <Accordion
           
               className="w-full mt-5 "
               style={{ border: '1px solid #DCE1EA', borderRadius: '10px' }}
             >
               <AccordionSummary
                 expandIcon={<ExpandMoreIcon />}
                 aria-controls="panel1a-content"
                 id="panel1a-header"
               >
                 <Typography className="mt-8" style={{ marginTop: '7px' }}>
                 question
                 </Typography>
               </AccordionSummary>
               <AccordionDetails>
                 <Typography>
                  Lorem
                 </Typography>
               </AccordionDetails>
             </Accordion>
                <Accordion
           
                className="w-full mt-5"
                style={{ border: '1px solid #DCE1EA', borderRadius: '10px' }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className="mt-8" style={{ marginTop: '7px' }}>
                  question
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                   Lorem
                  </Typography>
                </AccordionDetails>
              </Accordion>

        <div className="mt-9 flex pl-80 mb-12">
          <Button
            className="bg_red mx-auto  font-bold login_btn  w-60 h-14 rounded-full my-5 "
            style={{ borderRadius: '50px' }}
            onClick={e => login(e)}
          >
            <p
              className="font-sans font-bold text-lg"
              style={{ color: '#fff' }}
            >
              Contact Us
            </p>
          </Button>
        </div>
      </div>
    </div>
  );
}

Help.propTypes = {
  // help_Q_A: PropTypes.string,
  getQ_A: PropTypes.func
};

const mapStateToProps = state => ({
  help_Q_A: state.helpReducer.help.length > 0 ? state.helpReducer.help : []

})

export function mapDispatchToProps(dispatch) {
  return {
    getQ_A: () => dispatch(getQ_A()),

  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Help);

