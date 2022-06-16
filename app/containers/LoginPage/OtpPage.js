import React,{useState,memo} from 'react';
import LoginFirstImage from './images/image1.png';
import LoginSecondImage from './images/Login2.svg';
import LoginThirdImage from './images/Login3.svg';
import LoginImage from './images/Logo.svg';
import Resend from './images/resendImage.svg';
import './style.css';
import Link from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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

import { validateOtpAction } from './actions';
import { makeSelectOtp } from './selectors';
import reducer from './reducer';
import saga from './saga';

const key = 'loginReducer';

export function OtpPage(props) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  console.log("type of",typeof props.otp)

  const [optIndex0,setOpt0]=useState(props.otp===""?"":props.otp.charAt(0));
  const [optIndex1,setOpt1]=useState(props.otp===""?"":props.otp.charAt(1));
  const [optIndex2,setOpt2]=useState(props.otp===""?"":props.otp.charAt(2));
  const [optIndex3,setOpt3]=useState(props.otp===""?"":props.otp.charAt(3));
  const [optIndex4,setOpt4]=useState(props.otp===""?"":props.otp.charAt(4));
  const [optIndex5,setOpt5]=useState(props.otp===""?"":props.otp.charAt(5));
  const [backToLogin, setBackToLogin] = useState(false);

  const validateOtp =()=>{
    console.log("VAlidating Otp");
    props.onValidateOtp(props.otp);
  }

  const redirectToLoginPage = () =>{
    setBackToLogin(true)
  }
  if (backToLogin) {
    return <Redirect to={{ pathname: '/otp' }} />;
  }
  return (
    <div className="font-sans login_page  py-">
      <div className="container h-full min-h-full relative z-10">
        <div className="flex justify-end flex-wrap h-full  min-h-full items-center">
          <div className="card bg-white shadow-lg rounded-3xl py-10 px-10 max-w-xl w-1/2">
            <div className="logo text-center">
              <img src={LoginImage} alt="LoginImage" className="w-72 mx-auto mb-4" />
            </div>
            <h1 className="text-center font-bold font-sans text-3xl text_blue">OTP</h1>
            <p className=" text-center font-sans font-medium mb-5" style={{ color: "#6E7B8B", }}>Enter the 4 digit OTP code sent at your email<br /> address <b className="font-sans text-sky-700">jyoti@gmail.com</b></p>   <div className="form_box w-full">
              <div className="flex mt-20 justify-between">
                <TextField
                  variant="standard"
                  disabled
                  value={optIndex0}
                  style={{ width: 'auto', color: '#6E7B8B', fontSize: '16px', borderBottom: '1px solid #EAEAEA', marginBottom: '20px', marginRight: '15px' }}
                />
                <TextField
                  variant="standard"
                  disabled
                  value={optIndex1}
                  style={{ width: 'auto', color: '#6E7B8B', fontSize: '16px', borderBottom: '1px solid #EAEAEA', marginBottom: '20px', marginRight: '15px' }}
                />
                <TextField
                  variant="standard"
                  disabled
                  value={optIndex2}
                  style={{ width: 'auto', color: '#6E7B8B', fontSize: '16px', borderBottom: '1px solid #EAEAEA', marginBottom: '20px', marginRight: '15px' }}
                />
                <TextField
                  variant="standard"
                  disabled
                  value={optIndex3}
                  style={{ width: 'auto', color: '#6E7B8B', fontSize: '16px', borderBottom: '1px solid #EAEAEA', marginBottom: '20px', marginRight: '15px' }}
                />
                <TextField
                  variant="standard"
                  disabled
                  value={optIndex4}
                  style={{ width: 'auto', color: '#6E7B8B', fontSize: '16px', borderBottom: '1px solid #EAEAEA', marginBottom: '20px', marginRight: '15px' }}
                />
                <TextField
                  variant="standard"
                  disabled
                  value={optIndex5}
                  style={{ width: 'auto', color: '#6E7B8B', fontSize: '16px', borderBottom: '1px solid #EAEAEA', marginBottom: '20px' }}
                />
              </div>

              <p className="text-gray-400 text-center flex mb-10 justify-center my-4 font-sans" style={{ fontSize: '14px' }}><img className="mr-3" src={Resend} /> Resend OTP</p>
              <Button className={props.otp?"bg_red otp_btn mx-auto   font-sans login_btn  w-60 rounded-3xl my-5":"bg-blue-600"}
              onClick={validateOtp}>
                Continue
              </Button>

              <p className="text_blue text-center mt-7 font-sans" style={{ fontSize: '14px' }}><Link href="/login" className="font-sans">&#8592;
                <b className="font-sans"> Back To Login</b></Link></p>
            </div>
          </div>
        </div>
        <div className="msg_box  flex flex-wrap pt-5">
          <div className="w-1/2 lg:-mt-20 quote_box md:text-4xl text-2xl font-bold"><h3 className="text-white font-sans">Smart Platform for</h3><h3 className="text_blue  font-sans">
            Smart People</h3></div>
          <div className="copyright_text w-1/2 text-center text-xs font-sans text-white">© 2020 MineMagma. All Rights Reserved</div>
        </div>
      </div>

    </div>
  );
}


OtpPage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  // repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  // onSubmitForm: PropTypes.func,
  otp: PropTypes.string,
  onValidateOtp: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  // repos: makeSelectRepos(),
  otp: makeSelectOtp(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onValidateOtp: data => dispatch(validateOtpAction(data)),
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
)(OtpPage);

