import React, { useEffect, useState, memo } from 'react';
import LoginImage from './images/Logo.svg';
import Resend from './images/resendImage.svg';
import './style.css';
import Link from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Divider } from '@material-ui/core';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';

import { validateOtpAction, getAdminLocationsAction } from './actions';
import reducer from './reducer';
import saga from './saga';
import { Redirect } from 'react-router-dom';

const key = 'loginReducer';

export function ChooseLocation(props) {

  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const [choosedLocation, setChoosedLocation] = useState(props.adminLocations[0]);
  useEffect(() => {
    console.log("admin Locations", props.adminLocations)
  }, [props.adminLocations,props.showFeedback])
  const [redirectToFeedbackPage, setRedirectToFeedbackPage] = useState(props.showFeedback);

  useEffect(() => {
    console.log("callGetLocationAction Send data in Action")
    // const data='';
    props.getAdminLocationsAction();
  }, [])

  if (redirectToFeedbackPage) {
    return <Redirect to={{ pathname: '/form' }} />;
  }

  const selectLocation = (value) => {
    console.log(value)
    //Call api to show users list of particular Location

  }

  return (
    <div className="font-sans location_page  py-">
      <div className="container h-full min-h-full relative z-10">
        <div className="w-1/2  -mt-10 quote_box md:text-2xl text-xl font-semibold" style={{ marginLeft: "42%" }}><h3 className="text-white font-sans">Choose Location</h3></div>
        <div className="flex justify-end mt-20 flex-wrap h-full  min-h-full items-center" style={{ marginRight: "23%" }}>
          <div className="card bg-white shadow-lg rounded-3xl py-10 px-10 max-w-xl w-8/12">


            <div className="flex mt-10 ml-24  justify-between">

              <div className="w-24 h-5 ml-4 ">
                <select className=" font-sans  text-gray-150 w-60  text-black h-10 pl-4 pr-8 -mt-12 bg-white hover:border-gray-400"
                  onClick={selectLocation}
                  value={choosedLocation}
                >
                  {/* {props.adminLocations ? */}
                  {props.adminLocations.map((data, index) => {
                    console.log(data);
                    return (<option key={index} name={data}
                      value={data.id}>{data.name}</option>);
                  })}
                  {/* : <option>No data Available</option>} */}

                  {/* <option selected>Banglore</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option> */}
                </select>
                <div className='w-60'>
                  <Divider />
                </div>

              </div>


            </div>


          </div>

        </div>

        {/* <div className="msg_box  flex flex-wrap pt-5">
          <div className="w-1/2 lg:-mt-20 quote_box md:text-4xl text-2xl font-bold"><h3 className="text-white font-sans"></h3></div>
<div className="copyright_text w-1/2 text-center text-xs font-sans text-white">© 2020 MineMagma. All Rights Reserved</div>
        </div> */}
      </div>
      <div className="form_box w-full">
        <Button className=" otp_btn mx-auto   font-sans login_btn  w-60 rounded-3xl my-5" onClick={() => setRedirectToFeedbackPage(true)}>
          Continue
        </Button>
      </div>
    </div>
  );
}
ChooseLocation.propTypes = {
  // userName: PropTypes.string,
  // onValidateOtp: PropTypes.func,
};

const mapStateToProps = state => {
  return {
    adminLocations: state.loginReducer.adminLocations.length > 0 ? state.loginReducer.adminLocations : [],
    showFeedback: state.loginReducer.showFeedback
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    onValidateOtp: data => dispatch(validateOtpAction(data)),
    getAdminLocationsAction: data => dispatch(getAdminLocationsAction(data))
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(ChooseLocation);

