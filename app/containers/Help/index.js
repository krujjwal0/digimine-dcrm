/*
 * Dashboard
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

// import reducer from './reducer';
// import saga from './saga';
import { Card, CardContent, FormGroup, Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const key = 'dashboard';

function Help() {
  //   useInjectReducer({ key, reducer });
  //   useInjectSaga({ key, saga });

  //   useEffect(() => {}, []);

  return (
    <div className="maindash">
      <div className="mx-20 mt-6  w-[95%] h-full">
        <p
          className=" font- sans font-bold ml-20 text-xl"
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
                Accordion 1
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <div className="mt-6">
            <Accordion
              className="w-full"
              style={{ border: '1px solid #DCE1EA', borderRadius: '10px' }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography className="mt-8" style={{ marginTop: '7px' }}>
                  Accordion 2
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>

          <div className="mt-6">
            <Accordion
              className="w-full"
              style={{ border: '1px solid #DCE1EA', borderRadius: '10px' }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography className="mt-8" style={{ marginTop: '7px' }}>
                  Accordion 2
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>

          <div className="mt-6">
            <Accordion
              className="w-full"
              style={{ border: '1px solid #DCE1EA', borderRadius: '10px' }}
            >
              <AccordionSummary
             
                expandIcon={<ExpandMoreIcon  />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography className="mt-8" style={{ marginTop: '7px' }}>
                  Accordion 2
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>

       <div className='mt-9 flex pl-80 mb-12'>
       <Button
          className="bg_red mx-auto  font-bold login_btn  w-60 h-14 rounded-full my-5 "
          style={{borderRadius: '50px'}}
          onClick={e => login(e)}
        >
          <p className='font-sans font-bold text-lg' style={{color: '#fff'}}>Contact Us</p>
        </Button>
       </div>
      </div>
    </div>
  );
}

// Dashboard.propTypes = {
//   loading: PropTypes.bool,
//   error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
//   repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
//   onSubmitForm: PropTypes.func,
//   username: PropTypes.string,
//   onChangeUsername: PropTypes.func,
// };

// const mapStateToProps = createStructuredSelector({
//   repos: makeSelectRepos(),
//   username: makeSelectUsername(),
//   loading: makeSelectLoading(),
//   error: makeSelectError(),
// });

// export function mapDispatchToProps(dispatch) {
//   return {
//     onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
//     onSubmitForm: evt => {
//       if (evt !== undefined && evt.preventDefault) evt.preventDefault();
//       dispatch(loadRepos());
//     },
//   };
// }

// const withConnect = connect(
//   mapStateToProps,
//   mapDispatchToProps,
// );

// export default compose(
//   withConnect,
//   memo,
// )(Dashboard);

export default Help;
