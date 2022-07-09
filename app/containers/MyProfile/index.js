/*
 * Categories
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, memo, useState } from 'react';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import EditIcon from '@material-ui/icons/Edit';

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
import { Card } from '@material-ui/core';
import { loadRepos } from '../App/actions';
import { changeUsername } from './actions';
import { makeSelectUsername } from './selectors';
import reducer from './reducer';
import saga from './saga';
import photo from './image/profilepic.png';
import axios from 'axios';
import {getUserProfileDetail} from '../LoginPage/actions'


const key = 'categories';

export function Categories({
  username,
  loading,
  error,
  repos,
  onSubmitForm,
  onChangeUsername,
  userProfileData,
  getUserProfileDetail
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    // When initial state username is not null, submit the form to load repos
    if (username && username.trim().length > 0) onSubmitForm();
  }, []);

  useEffect(() => {
    getUserProfileDetail();
    let awtToken = localStorage.getItem('awtToken');
    axios({
      method: 'GET',
      url: 'http://13.232.217.210:15000/api/download',
      headers: {
        Authorization: `Bearer ${awtToken}`,
        'Content-Type': 'application/json',
      },
      responseType: "blob"
    }).then(response => {
      console.log("here in useEffect profile1===", response)
      var blobURL = URL.createObjectURL(response.data);
      console.log("here in useEffect profile2===", blobURL)
      var reader = new FileReader();
      reader.readAsDataURL(response.data);
      reader.onloadend = function () {
        var base64String = reader.result;
        console.log('Base64 String - ', base64String);
        console.log('Base64 String without Tags- ',
          base64String.substr(base64String.indexOf(', ') + 1));
          setsrcBase64(base64String.substr(base64String.indexOf(', ') + 1));
      }
    }).catch(error => {
      console.error(error);
    });
  })

const [srcBase64, setsrcBase64] = useState()
  // const reposListProps = {
  //   loading,
  //   error,
  //   repos,
  // };


  return (
    <div className="content">
      <div className='w-full'>
        <div className="ml-8 pt-1 ">
          <div className="mt-5 ml-10 text-xl text-[#151F63]">
            <i className="fa-solid fa-chevron-left" />
          </div>
          <div className="ml-4 mt-4 text-xl ">
            <p
              style={{ color: '#151F63', fontSize: '18px' }}
              className="font-sans font-semibold"
            >
              My Profile
            </p>
            <p
              style={{ color: '#F66B6B', fontSize: '11px' }}
              className=" font-sans ml-18"
            >
              Dashboard | <span style={{ color: '#151F63' }}>My Profile </span>
            </p>
            <hr />
          </div>
          <div className="flex justify-center">
            <Card
              className='mt-12 w-2/6 h-[65vh] flex justify-center '
            >
              <CardContent>
                <div className="text-right font-bold font-sans mt-2">
                  <EditIcon className="" /> Edit
                </div>
                <CardContent className="flex justify-center" >
                  <img className='h-24' src={srcBase64} style={{borderRadius:'50%'}} />
                </CardContent>
                <CardContent className='-mt-6'>
                  <p className="flex justify-center  text-2xl font-sans font-bold">
                   {userProfileData.name}
                  </p>
                  <div className=" flex justify-center  bg-[#F66B6B] rounded-md ">
                    <p className="text-center text-sm text-white font-sans">
                      Employee ID {userProfileData.employeeId}
                    </p>
                  </div>
                </CardContent>
                <p className="text-[#66737E] flex justify-center mt-2 font-sans text-xs font-bold">
                  Phone
                </p>
                <p className="text-[#132B6B] flex justify-center font-sans text-xl font-bold">
                 {userProfileData.mobileNumber}
                </p>
                <p className="text-[#66737E] flex justify-center mt-6 font-sans text-xs font-bold">
                  Email Address
                </p>
                <p className="text-[#132B6B] flex justify-center font-sans text-xl font-bold">
                {userProfileData.emailId}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

Categories.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  onChangeUsername: PropTypes.func,
};

// const mapStateToProps = createStructuredSelector({
//   repos: makeSelectRepos(),
//   username: makeSelectUsername(),
//   loading: makeSelectLoading(),
//   error: makeSelectError(),
// });

const mapStateToProps = state => ({
  userProfileData: state.loginReducer.userProfileData,
  
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRepos());
      
    },
    getUserProfileDetail:() => dispatch(getUserProfileDetail())
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Categories);
