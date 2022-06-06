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

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
import { loadRepos } from '../App/actions';
import { changeUsername } from './actions';
import { makeSelectUsername } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { Card, CardContent, Typography } from '@material-ui/core';
import icon1 from './images/card1.png';
import map from './images/map.png';
import graph from './images/graph.png';
const key = 'dashboard';

function Dashboard({
  username,
  loading,
  error,
  repos,
  onSubmitForm,
  onChangeUsername,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    // When initial state username is not null, submit the form to load repos
    if (username && username.trim().length > 0) onSubmitForm();
  }, []);

  const reposListProps = {
    loading,
    error,
    repos,
  };

  return (

    <div className='maindash'>
      <div  className='mx-20 mt-6  w-[95%]'>
        <div className='flex'>
          <Card className='w-[55%] mr-6 min-h-60'>
     <CardContent className='flex'>
       <img className='mt-3 h-[30%] w-[25%]' src={icon1} />
       <div className='ml-6'>
       <Typography>
       Welcome, User
       </Typography>
       <div className='mt-6'>
         <Typography>
       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
       </Typography>   </div></div>
     </CardContent>
     <div className='flex'>
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
          <Card className='w-[45%] h-60'>
           
            </Card>
        </div>
        <div className='flex mt-3'>
        <Card className='w-[45%] h-60'>
            <img className='m-6' src={map} />
            </Card>
          <Card className='w-[55%] ml-6 h-60'>
          <img className='m-6' src={graph} />
          </Card>
          
        </div>
      </div>
    </div>

  );
}

Dashboard.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  onChangeUsername: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRepos());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Dashboard);