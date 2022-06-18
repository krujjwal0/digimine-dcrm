/*
 * Dashboard
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, memo } from 'react';
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

import FormControlLabel from '@material-ui/core/FormControlLabel';

const key = 'dashboard';

function Help() {
//   useInjectReducer({ key, reducer });
//   useInjectSaga({ key, saga });

//   useEffect(() => {}, []);

  return (
    <div className="maindash">
      <div className="mx-20 mt-6  w-[95%]">
        <div className="flex mt-7">
          <Card
            className="w-[45%] mr-6 ml-6 min-h-68 "
            style={{ borderRadius: '20px' }}
          >
            <CardContent className="flex">
              <div className="ml-6">
                <Typography>Welcome, User</Typography>
                <div className="mt-6">
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Typography>{' '}
                </div>
              </div>
            </CardContent>
            <div className="flex">
              <button
                style={{
                  backgroundColor: '#F66B6B',
                  color: 'white',
                  borderRadius: '50px',
                }}
                className="w-1/2 h-10 ml-8 mt-3"
              >
                Click Me
              </button>
              <button
                style={{
                  backgroundColor: 'white',
                  border: '1px solid black',
                  color: 'black',
                  borderRadius: '50px',
                }}
                className="w-1/2 h-10 ml-8 mt-3 mr-8"
              >
                Click Me
              </button>
            </div>
          </Card>
          <Card className="w-[36%] h-60" style={{ borderRadius: '20px' }} />
        </div>
        <div className="flex mt-3">
          <Card
            className="w-[39%] h-60 ml-6"
            style={{ borderRadius: '20px' }}
          />
          <Card
            className="w-[50%] ml-6 h-60"
            style={{ borderRadius: '20px' }}
          />
        </div>
        <Card
          className="w-full h-[72px] mt-[41px]"
          style={{ borderRadius: '20px' }}
        >
          <CardContent>
            <div className="flex">
              <div className="rounded-full h-[41px] w-[41px] ml-3 bg-[#132B6B]">
                <p className="text-white ml-[11px] mt-[11px] font-sans">RK</p>
              </div>
              <div className="ml-10">
                <p className="text-[11px] font-sans font-semibold text-[#66737E] mt-[2px]">
                  Department
                </p>
                <p className="text-[13px] font-sans font-bold text-[#132B6B] mt-[8px]">
                  Mining
                </p>
              </div>
              <div className="ml-10">
                <p className="text-[11px] font-sans font-semibold text-[#66737E] mt-[2px]">
                  Assign Person
                </p>
                <div className="flex">
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
              <div className="ml-16">
                <p className="text-[11px] font-sans font-semibold text-[#66737E] mt-[2px]">
                  Reviewer
                </p>
                <p className="text-[13px] font-sans font-bold text-[#132B6B] mt-[8px]">
                  Abhinandan Banerjee
                </p>
              </div>
              <div className="ml-12">
                <p className="text-[11px] font-sans font-semibold text-[#66737E] mt-[2px]">
                  Lead Reviewer
                </p>
                <p className="text-[13px] font-sans font-bold text-[#132B6B] mt-[8px]">
                  Rupesh Bansal
                </p>
              </div>
              <div className="ml-12">
                <p className="text-[11px] font-sans font-semibold text-[#66737E] mt-[2px]">
                  Category
                </p>
                <p className="text-[13px] font-sans font-bold text-[#132B6B] mt-[8px]">
                  OTC
                </p>
              </div>
              <div className="ml-12">
                <p className="text-[11px] font-sans font-semibold text-[#66737E] mt-[2px]">
                  Category
                </p>
                {/* <FormGroup>
                  <FormControlLabel
                    control={
                      <IOSSwitch
                        checked={state.checkedB}
                        onChange={handleChange}
                        name="checkedB"
                      />
                    }
                  />
                </FormGroup> */}
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="w-full h-[72px] mt-[10px]">
          <CardContent>
            <div className="flex">
              <div className="rounded-full h-[41px] w-[41px] ml-3 bg-[#132B6B]">
                <p className="text-white ml-[11px] mt-[11px] font-sans">RK</p>
              </div>
              <div className="ml-10">
                <p className="text-[11px] font-sans font-semibold text-[#66737E] mt-[2px]">
                  Department
                </p>
                <p className="text-[13px] font-sans font-bold text-[#132B6B] mt-[8px]">
                  Mining
                </p>
              </div>
              <div className="ml-10">
                <p className="text-[11px] font-sans font-semibold text-[#66737E] mt-[2px]">
                  Assign Person
                </p>
                <div className="flex">
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
              <div className="ml-16">
                <p className="text-[11px] font-sans font-semibold text-[#66737E] mt-[2px]">
                  Reviewer
                </p>
                <p className="text-[13px] font-sans font-bold text-[#132B6B] mt-[8px]">
                  Abhinandan Banerjee
                </p>
              </div>
              <div className="ml-12">
                <p className="text-[11px] font-sans font-semibold text-[#66737E] mt-[2px]">
                  Lead Reviewer
                </p>
                <p className="text-[13px] font-sans font-bold text-[#132B6B] mt-[8px]">
                  Rupesh Bansal
                </p>
              </div>
              <div className="ml-12">
                <p className="text-[11px] font-sans font-semibold text-[#66737E] mt-[2px]">
                  Category
                </p>
                <p className="text-[13px] font-sans font-bold text-[#132B6B] mt-[8px]">
                  OTC
                </p>
              </div>
              <div className="ml-12">
                <p className="text-[11px] font-sans font-semibold text-[#66737E] mt-[2px]">
                  Category
                </p>
                {/* <FormGroup>
                  <FormControlLabel
                    control={
                      <IOSSwitch
                        checked={state.checkedB}
                        onChange={handleChange}
                        name="checkedB"
                      />
                    }
                  />
                </FormGroup> */}
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="w-full h-[72px] mt-[10px]">
          <CardContent>
            <div className="flex">
              <div className="rounded-full h-[41px] w-[41px] ml-3 bg-[#132B6B]">
                <p className="text-white ml-[11px] mt-[11px] font-sans">RK</p>
              </div>
              <div className="ml-10">
                <p className="text-[11px] font-sans font-semibold text-[#66737E] mt-[2px]">
                  Department
                </p>
                <p className="text-[13px] font-sans font-bold text-[#132B6B] mt-[8px]">
                  Mining
                </p>
              </div>
              <div className="ml-10">
                <p className="text-[11px] font-sans font-semibold text-[#66737E] mt-[2px]">
                  Assign Person
                </p>
                <div className="flex">
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
              <div className="ml-16">
                <p className="text-[11px] font-sans font-semibold text-[#66737E] mt-[2px]">
                  Reviewer
                </p>
                <p className="text-[13px] font-sans font-bold text-[#132B6B] mt-[8px]">
                  Abhinandan Banerjee
                </p>
              </div>
              <div className="ml-12">
                <p className="text-[11px] font-sans font-semibold text-[#66737E] mt-[2px]">
                  Lead Reviewer
                </p>
                <p className="text-[13px] font-sans font-bold text-[#132B6B] mt-[8px]">
                  Rupesh Bansal
                </p>
              </div>
              <div className="ml-12">
                <p className="text-[11px] font-sans font-semibold text-[#66737E] mt-[2px]">
                  Category
                </p>
                <p className="text-[13px] font-sans font-bold text-[#132B6B] mt-[8px]">
                  OTC
                </p>
              </div>
              <div className="ml-12">
                <p className="text-[11px] font-sans font-semibold text-[#66737E] mt-[2px]">
                  Category
                </p>

                {/* <FormControlLabel
                  control={
                    <IOSSwitch
                      checked={state.checkedB}
                      onChange={handleChange}
                      name="checkedB"
                    />
                  }
                /> */}
              </div>
            </div>
          </CardContent>
        </Card>
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
