import React, { useEffect, useState, memo } from 'react';
import { Card } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import LoginImage from './images/Logo.svg';
import Resend from './images/resendImage.svg';
import { Redirect } from 'react-router-dom';
import './style.css';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';

import { generateOtpByEmailIdAction } from './actions';
import { makeSelectUsername } from './selectors';
import reducer from './reducer';
import saga from './saga';

const key = 'loginReducer';

export function Login({loading, error, onGenerateOtpByEmailIdAction}) {  
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const [emailId,setEmailId]=useState('');
  const [redirectToReferrer, setRedirectToReferrer] = useState(false);

  const login = () => {
    console.log("login for otp")
    onGenerateOtpByEmailIdAction(emailId)
    // fakeAuth.authenticate(() => {
    setRedirectToReferrer(true);
    // });
  };

  if (redirectToReferrer) {
    return <Redirect to={{ pathname: '/otp' }} />;
  }

  return (
    <div className="font-sans login_page  py-">
      <div className="container h-full min-h-full relative z-10">
        <div className="flex justify-end flex-wrap h-full  min-h-full items-center">
          <div className="card bg-white shadow-lg rounded-3xl py-10 px-10 max-w-xl w-1/2">
            <div className="logo text-center">
              <img
                src={LoginImage}
                alt="LoginImage"
                className="w-72 mx-auto mb-5"
              />
            </div>
            <h1 className="text-center font-bold font-sans text-3xl mb-8 text_blue mt-16">
              Login
            </h1>
            <div className="form_box pt-8 w-full">
              <TextField
                error
                name="emailId"
                type="email"
                id="standard-error-helper-text"
                placeholder="Enter Your Username"
                value={emailId}
                onChange={event => setEmailId(event.target.value)}

                //helperText="Error message."
                variant="standard"
                style={{ width: '100%', color: '#6E7B8B', fontSize: '16px' }}
              />
              <p className="text-right mb-32 mt-2 font-sans text-red-500">
                {/* Error Message */}
              </p>
              {/* <TextField
                name="password"
                type="password"
                placeholder="***"
                      style={{width:'100%', color:'#6E7B8B', fontSize:'20px', marginBottom:'30px'}}
              /> */}
              {/* <p className="text_red text-center my-4 font-sans font-medium"  style={{ fontSize:'14px'}}>Invalid username and password</p> */}
              <Button
                className="bg_red mx-auto  font-bold login_btn  w-60 h-14 rounded-3xl my-5 "
                onClick={(e)=>login(e)}
              >
                Login
              </Button>

              {/* <p className="text-center mt-7 font-medium"  style={{ fontSize:'14px', color:'#124D50'}}><Link href="#" className="font-sans">Forgot Your password?</Link></p> */}
            </div>
          </div>
        </div>
        <div className="msg_box  flex flex-wrap pt-5">
          <div className="w-1/2 lg:-mt-20 quote_box md:text-4xl text-2xl font-bold">
            <h3 className="text-white font-sans">Smart Platform for</h3>
            <h3 className="text_blue  font-sans">Smart People</h3>
          </div>
          <div className="copyright_text w-1/2 text-center text-xs font-sans text-white">
            © 2020 MineMagma. All Rights Reserved
          </div>
        </div>
      </div>
    </div>
  );
}

Login.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  // repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  // onSubmitForm: PropTypes.func,
  // username: PropTypes.string,
  onGenerateOtpByEmailIdAction: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  // repos: makeSelectRepos(),
  // username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onGenerateOtpByEmailIdAction: data => dispatch(generateOtpByEmailIdAction(data)),
    // onSubmitForm: evt => {
    //   if (evt !== undefined && evt.preventDefault) evt.preventDefault();
    //   dispatch(loadRepos());
    // },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Login);

