/*
 * Regulatory
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, useState, memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Card, CardContent } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import CardActions from '@material-ui/core/CardActions';
import Popover from '@material-ui/core/Popover';
import Switch from '@material-ui/core/Switch';
import MoreVert from '@material-ui/icons/MoreVert';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { alpha, styled, withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import { EditUser } from './EditUser';
import { deleteUser, editUser, showEmployee, changeUsername } from './actions';
import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
import { loadRepos } from '../App/actions';
import { makeSelectUsername } from './selectors';
import reducer from './reducer';
import saga from './saga';
import Users from './Users';
import UsersUtility from './UsersUtility';
import emp_image from '../../images/emp_image.png';

const key = 'users';

const GreenSwitch = styled(Switch)(({ theme }) => ({
  '& .MuiSwitch-switchBase.Mui-checked': {
    color: green[600],
    '&:hover': {
      backgroundColor: alpha(green[600], theme.palette.action.hoverOpacity),
    },
  },
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: green[600],
  },
}));
const label = { inputProps: { 'aria-label': 'Switch demo' } };

export function Employee({
  username,
  usersList,
  deleteUser,
  loading,
  error,
  repos,
  onSubmitForm,
  onChangeUsername,
  showEmployee
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedC: true,
  });

  useEffect(() => {
    // When initial state username is not null, submit the form to load repos
    if (username && username.trim().length > 0) onSubmitForm();
  }, []);

  useEffect(() => {
    showEmployee();
    console.log("USers List index =====", usersList)
  }, [])

  const reposListProps = {
    loading,
    error,
    repos,
  };

  const handleChange = event => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const [showEdit, setShowEdit] = useState(false);
  const openEdit = () => {
    setShowEdit(true)
  }
  const handleExit = () => {
    setShowEdit(false)
  }
  useEffect(() => {
  }, [usersList])
  const onDeleteUser = (id) => {

    let verify = window.confirm("Are you sure you want to delete ?");
    console.log("Verify====id ", verify, id)
    if (verify == true) {
      console.log("Inside true");
      //pass id to delete
     deleteUser(id)
    }
  }

  return (
    <div className="myprofile">
      <div className="mt-16 w-full">
        <UsersUtility />
        <div className="">
          {/* {usersList && usersList.length > 0 && usersList.map((user, index) => { */}
          <div className=" w-full" >
            {/* gap-x-1 */}

            {usersList && usersList.length > 0 && usersList.map((list, index) => {
              return (
                <div className="block text-gray lg:ml-6 md:ml-10 sm:ml-12" key={list.name}
                // style={{border:'2px solid red', marginLeft:'6px',marginRight:'6px'}}
                >
                  <div className="my-5 w-full justify-center " />
                  <div>

                    <Card className='w-full rounded-full h-[72px]' style={{ borderRadius: '50px', marginTop: '10px' }}>

                      <CardContent className="justify-center">

                        <div className="flex rounded-full" key={list.name} >

                          <div className=''>
                            <img className='rounded-full ml-3 w-[41px] h-[41px]'
                              src={emp_image}
                            />
                          </div>
                          <div className='ml-10'>
                            <p className="text-[11px] font-sans font-semibold text-[#66737E] mt-[2px]">
                              Employee
                            </p>
                            <div className='flex'>
                              <p className="text-[13px] font-sans font-bold text-[#132B6B] mt-[8px]">
                                {list.name}
                              </p>
                              <div className="flex justify-center w-20 bg-[#F66B6B] ml-1 mt-[6px] rounded-md h-4">
                                <p className="text-center text-[11px] mt-[2px] text-white font-sans">
                                  {list.id}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className='ml-10'>
                            <p className="text-[11px] font-sans font-semibold text-[#66737E] mt-[2px]">
                              Department
                            </p>
                            <p className='text-[13px] font-sans font-bold text-[#132B6B] mt-[8px]'>
                              {list.departmentName}
                            </p>
                          </div>
                          <div className='ml-12'>
                            <p className="text-[11px] font-sans font-semibold text-[#66737E] mt-[2px]">
                              Phone
                            </p>
                            <p className='text-[13px] font-sans font-bold text-[#132B6B] mt-[8px]'>
                              {list.mobileNumber}
                            </p>
                          </div>
                          <div className='ml-12'>
                            <p className="text-[11px] font-sans font-semibold text-[#66737E] mt-[2px]">
                              Email ID
                            </p>
                            <p className='text-[13px] font-sans font-bold text-[#132B6B] mt-[8px]'>
                              {list.emailId}
                            </p>
                          </div>
                          <div className='ml-12'>
                            <p className="text-[11px] font-sans font-semibold text-[#66737E] mt-[2px]">
                              Active
                            </p>
                            {/* <FormControlLabel
control={<IOSSwitch checked={state.checkedB} onChange={handleChange} name="checkedB" />}

/> */}
                            <GreenSwitch {...label} defaultChecked />
                          </div>
                          <div className='mt-2 ml-8'>
                            <MoreVert onClick={handleClick} />
                          </div>
                          <Popover
                            id={id}
                            open={open}
                            anchorEl={anchorEl}
                            onClose={handleClose}
                            style={{
                              borderRadius: '15px',
                              // background: '#FFFFFF',
                              // boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.15)'
                            }}
                            anchorOrigin={{
                              vertical: 'bottom',
                              horizontal: 'left',
                            }}
                          >
                            <div className="p-2 m-2">
                              <div><button className="my-1 mx-4" disable onClick={openEdit}>Edit</button></div>
                              <div><button className="my-1 mx-4" onClick={() => onDeleteUser(list.id)}>Delete</button></div>
                            </div>
                          </Popover>
                          <Dialog open={showEdit} onClose={handleExit} className="w-50 h-50">
                            <DialogContent style={{
                              borderRadius: '15px',
                              background: '#FFFFFF',
                              boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.15)',
                              Width: '604px',
                              Height: '494px',
                            }}>
                              <EditUser />

                            </DialogContent>
                          </Dialog>
                        </div>
                      </CardContent>
                      <CardActions>
                        {/* <Button size="small">Learn More</Button> */}
                      </CardActions>
                    </Card>
                    {/* ))
                  ) : (
                    <h1>No results found!</h1>
                  )} */}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
        {/* <label className="users_heading">Users</label> */}
      </div>
      {/* <div className="flex mt-4 justify-center">
        <div className="w-[65%] h-screen bg-white rounded-t-[50px] align-center">
          <div className="mt-8">
            <UsersUtility showEmployee={showEmployee}/>
          </div>
          <div className="">
            <Users />
            {/* <Users />
            <Users /> */}
    </div>

  );
}

Employee.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  onChangeUsername: PropTypes.func,
};

const mapStateToProps = state => ({
  usersList: state.users.EmployeeCardList.length > 0 ? state.users.EmployeeCardList : []
});

export function mapDispatchToProps(dispatch) {
  return {
    showEmployee: data => dispatch(showEmployee(data)),
    editUser: data => dispatch(editUser(data)),
    deleteUser: data => dispatch(deleteUser(data)),
    onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRepos());
    },
  }

  // const mapStateToProps = createStructuredSelector({
  //   repos: makeSelectRepos(),
  //   username: makeSelectUsername(),
  //   loading: makeSelectLoading(),
  //   error: makeSelectError(),
  // });
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Employee);
