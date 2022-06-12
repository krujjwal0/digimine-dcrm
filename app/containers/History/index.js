/*
 * Categories
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, memo } from 'react';
import CardContent from '@material-ui/core/CardContent';
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import Typography from '@material-ui/core/Typography';
import EditIcon from '@material-ui/icons/Edit';
import { alpha, makeStyles } from '@material-ui/core/styles';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';

import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Grid from '@material-ui/core/Grid';
import { Card, withWidth } from '@material-ui/core';
import { loadRepos } from '../App/actions';
import { changeUsername } from './actions';
import { makeSelectUsername } from './selectors';
import reducer from './reducer';
import saga from './saga';
import photo from './image/vector.png';

const key = 'history';

export function History({
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

  const [selectedDate, setSelectedDate] = React.useState(
    new Date('2014-08-18T21:11:54'),
  );

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  const useStyles = makeStyles(theme => ({
    search: {
      display: 'flex',
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      height: '30px',
      position: 'absolute',
      pointerEvents: 'none',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

  const classes = useStyles();

  return (
    <div className="myprofile">
      <div className="w-full">
        <div className="ml-8 ">
          <div className="ml-4 mt-3 text-xl ">
            <p
              style={{ color: '#151F63', fontSize: '18px' }}
              className="font-sans font-semibold"
            >
              History
            </p>
            <p
              style={{ color: '#F66B6B', fontSize: '11px' }}
              className=" font-sans ml-18"
            >
              Dashboard | <span style={{ color: '#151F63' }}>History</span>
            </p>
            <hr />
          </div>
          <div className="flex ">
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid>
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="MM/dd/yyyy"
                  id="date-picker-inline"
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                  className="m-4"
                  style={{ margin: '16px', width: '150px', height: '30px' }}
                />
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="MM/dd/yyyy"
                  id="date-picker-inline"
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                  className="ml-4 border-2 rounded-[20px]"
                  style={{ margin: '16px', width: '150px', height: '30px' }}
                />
              </Grid>
            </MuiPickersUtilsProvider>
            <form>
              <select className="w-36 m-4 border-2 rounded-[20px] h-9">
                <option>Department</option>
              </select>
            </form>
            <button
              className="w-28 h-9 m-4"
              style={{
                backgroundColor: '#C4C4C4',
                color: 'white',
                borderRadius: '50px',
                width: '112px',
              }}
            >
              SEARCH
            </button>
            <div className="mt-4 w-96 h-8 flex item-strech border-2 rounded-[20px]">
              <InputBase
                placeholder="Search by Report Name."
                inputProps={{ 'aria-label': 'search' }}
              />
              <SearchIcon className="ml-72" />
            </div>
          </div>
          <div className="flex">
            <Card className="border-2 rounded-[20px] m-6 w-[424px] h-[202px]">
              <CardContent>
                <div className="flex">
                  <img className="h-8 m-4" src={photo} />
                  <div className="mt-[20px] ml-[20px]">
                    <p className="text-[#132B6B] font-bold font-sans text-[15px]">
                      Project Name Lorem ipsum dolor sit amet
                    </p>
                    <div className="flex mt-[24px]">
                      <div className="h-[15px] w-[59px] bg-[#D8DCE5] rounded-[10px]">
                        <p className="h=[18px] w-[50px] text-[9px] font-sans ml-[5px] mt-[2px]">
                          Project ID
                        </p>
                      </div>
                      <div className="h-[15px] w-[59px] bg-[#D8DCE5] rounded-[10px] ml-[40px]">
                        <p className="h=[18px] w-[50px] text-[9px] ml-[5px] font-sans mt-[2px]">
                          Department
                        </p>
                      </div>
                      <div className="h-[15px] w-[49px] bg-[#D8DCE5] rounded-[10px] ml-[25px]">
                        <p className="h=[18px] w-[50px] text-[9px] ml-[5px] font-sans mt-[2px]">
                          Created
                        </p>
                      </div>
                    </div>
                    <div className="flex mt-[5px]">
                      <p className="text-[11px] font-bold text-[#132B6B] font-sans ml-[5px] mt-[2px]">
                        #0123456789
                      </p>
                      <p className="text-[11px] font-bold text-[#132B6B] font-sans ml-[27px] mt-[2px]">
                        Mining
                      </p>
                      <p className="text-[11px] font-bold text-[#132B6B] font-sans ml-[47px] mt-[2px]">
                        15th January, 2018
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <button
                    className="h-9 m-4"
                    style={{
                      backgroundColor: '#F66B6B',
                      color: 'white',
                      borderRadius: '50px',
                      width: '176px',
                    }}
                  >
                    <div className="font-sans text-[14px]">DOWNLOAD REPORT</div>
                  </button>
                  <button
                    className="w-28 h-9 m-4"
                    style={{
                      backgroundColor: '#66737E',
                      color: 'white',
                      borderRadius: '50px',
                      width: '176px',
                    }}
                  >
                    <div className="font-sans text-[14px]">VIEW REPORT</div>
                  </button>
                </div>
              </CardContent>
            </Card>
            <Card className="border-2 rounded-[20px] m-6 w-[424px] h-[202px]">
              <CardContent>
                <div className="flex">
                  <img className="h-8 m-4" src={photo} />
                  <div className="mt-[20px] ml-[20px]">
                    <p className="text-[#132B6B] font-bold font-sans text-[15px]">
                      Project Name Lorem ipsum dolor sit amet
                    </p>
                    <div className="flex mt-[24px]">
                      <div className="h-[15px] w-[59px] bg-[#D8DCE5] rounded-[10px]">
                        <p className="h=[18px] w-[50px] text-[9px] font-sans ml-[5px] mt-[2px]">
                          Project ID
                        </p>
                      </div>
                      <div className="h-[15px] w-[59px] bg-[#D8DCE5] rounded-[10px] ml-[40px]">
                        <p className="h=[18px] w-[50px] text-[9px] ml-[5px] font-sans mt-[2px]">
                          Department
                        </p>
                      </div>
                      <div className="h-[15px] w-[49px] bg-[#D8DCE5] rounded-[10px] ml-[25px]">
                        <p className="h=[18px] w-[50px] text-[9px] ml-[5px] font-sans mt-[2px]">
                          Created
                        </p>
                      </div>
                    </div>
                    <div className="flex mt-[5px]">
                      <p className="text-[11px] font-bold text-[#132B6B] font-sans ml-[5px] mt-[2px]">
                        #0123456789
                      </p>
                      <p className="text-[11px] font-bold text-[#132B6B] font-sans ml-[27px] mt-[2px]">
                        Mining
                      </p>
                      <p className="text-[11px] font-bold text-[#132B6B] font-sans ml-[47px] mt-[2px]">
                        15th January, 2018
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <button
                    className="h-9 m-4"
                    style={{
                      backgroundColor: '#F66B6B',
                      color: 'white',
                      borderRadius: '50px',
                      width: '176px',
                    }}
                  >
                    <div className="font-sans text-[14px]">DOWNLOAD REPORT</div>
                  </button>
                  <button
                    className="w-28 h-9 m-4"
                    style={{
                      backgroundColor: '#66737E',
                      color: 'white',
                      borderRadius: '50px',
                      width: '176px',
                    }}
                  >
                    <div className="font-sans text-[14px]">VIEW REPORT</div>
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="flex">
            <Card className="border-2 rounded-[20px] m-6 w-[424px] h-[202px]">
              <CardContent>
                <div className="flex">
                  <img className="h-8 m-4" src={photo} />
                  <div className="mt-[20px] ml-[20px]">
                    <p className="text-[#132B6B] font-bold font-sans text-[15px]">
                      Project Name Lorem ipsum dolor sit amet
                    </p>
                    <div className="flex mt-[24px]">
                      <div className="h-[15px] w-[59px] bg-[#D8DCE5] rounded-[10px]">
                        <p className="h=[18px] w-[50px] text-[9px] font-sans ml-[5px] mt-[2px]">
                          Project ID
                        </p>
                      </div>
                      <div className="h-[15px] w-[59px] bg-[#D8DCE5] rounded-[10px] ml-[40px]">
                        <p className="h=[18px] w-[50px] text-[9px] ml-[5px] font-sans mt-[2px]">
                          Department
                        </p>
                      </div>
                      <div className="h-[15px] w-[49px] bg-[#D8DCE5] rounded-[10px] ml-[25px]">
                        <p className="h=[18px] w-[50px] text-[9px] ml-[5px] font-sans mt-[2px]">
                          Created
                        </p>
                      </div>
                    </div>
                    <div className="flex mt-[5px]">
                      <p className="text-[11px] font-bold text-[#132B6B] font-sans ml-[5px] mt-[2px]">
                        #0123456789
                      </p>
                      <p className="text-[11px] font-bold text-[#132B6B] font-sans ml-[27px] mt-[2px]">
                        Mining
                      </p>
                      <p className="text-[11px] font-bold text-[#132B6B] font-sans ml-[47px] mt-[2px]">
                        15th January, 2018
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <button
                    className="h-9 m-4"
                    style={{
                      backgroundColor: '#F66B6B',
                      color: 'white',
                      borderRadius: '50px',
                      width: '176px',
                    }}
                  >
                    <div className="font-sans text-[14px]">DOWNLOAD REPORT</div>
                  </button>
                  <button
                    className="w-28 h-9 m-4"
                    style={{
                      backgroundColor: '#66737E',
                      color: 'white',
                      borderRadius: '50px',
                      width: '176px',
                    }}
                  >
                    <div className="font-sans text-[14px]">VIEW REPORT</div>
                  </button>
                </div>
              </CardContent>
            </Card>
            <Card className="border-2 rounded-[20px] m-6 w-[424px] h-[202px]">
              <CardContent>
                <div className="flex">
                  <img className="h-8 m-4" src={photo} />
                  <div className="mt-[20px] ml-[20px]">
                    <p className="text-[#132B6B] font-bold font-sans text-[15px]">
                      Project Name Lorem ipsum dolor sit amet
                    </p>
                    <div className="flex mt-[24px]">
                      <div className="h-[15px] w-[59px] bg-[#D8DCE5] rounded-[10px]">
                        <p className="h=[18px] w-[50px] text-[9px] font-sans ml-[5px] mt-[2px]">
                          Project ID
                        </p>
                      </div>
                      <div className="h-[15px] w-[59px] bg-[#D8DCE5] rounded-[10px] ml-[40px]">
                        <p className="h=[18px] w-[50px] text-[9px] ml-[5px] font-sans mt-[2px]">
                          Department
                        </p>
                      </div>
                      <div className="h-[15px] w-[49px] bg-[#D8DCE5] rounded-[10px] ml-[25px]">
                        <p className="h=[18px] w-[50px] text-[9px] ml-[5px] font-sans mt-[2px]">
                          Created
                        </p>
                      </div>
                    </div>
                    <div className="flex mt-[5px]">
                      <p className="text-[11px] font-bold text-[#132B6B] font-sans ml-[5px] mt-[2px]">
                        #0123456789
                      </p>
                      <p className="text-[11px] font-bold text-[#132B6B] font-sans ml-[27px] mt-[2px]">
                        Mining
                      </p>
                      <p className="text-[11px] font-bold text-[#132B6B] font-sans ml-[47px] mt-[2px]">
                        15th January, 2018
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <button
                    className="h-9 m-4"
                    style={{
                      backgroundColor: '#F66B6B',
                      color: 'white',
                      borderRadius: '50px',
                      width: '176px',
                    }}
                  >
                    <div className="font-sans text-[14px]">DOWNLOAD REPORT</div>
                  </button>
                  <button
                    className="w-28 h-9 m-4"
                    style={{
                      backgroundColor: '#66737E',
                      color: 'white',
                      borderRadius: '50px',
                      width: '176px',
                    }}
                  >
                    <div className="font-sans text-[14px]">VIEW REPORT</div>
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

History.propTypes = {
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
)(History);
