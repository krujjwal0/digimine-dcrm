/*
 * Regulatory
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, useState, memo } from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent } from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import Popover from '@material-ui/core/Popover';
import Switch from '@material-ui/core/Switch';
import MoreVert from '@material-ui/icons/MoreVert';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { alpha, styled, withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import { EditUser } from './EditUser';
import { deleteUser, editUser, showEmployee, changeUsername, getAllDepartment, getAllRoles, setEmployee  } from './actions';
import { loadRepos } from '../App/actions';
import { makeSelectUsername } from './selectors';
import reducer from './reducer';
import saga from './saga';
import emp_image from '../../images/emp_image.png';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core';
import { InputBase } from '@material-ui/core';
import Menu from '@material-ui/core/Menu';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { connect } from 'react-redux';
import { compose } from 'redux';
import AddUser from './AddUser';

const StyledMenu = styled(props => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light'
        ? 'rgb(55, 65, 81)'
        : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

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
  showEmployee,
  editUser,
  rolesList,
  departmentList,
  getAllDepartment,
  getAllRoles,
  EmployeeCardListreplica
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
    console.log('USers List index =====', usersList);
  }, []);

  const reposListProps = {
    loading,
    error,
    repos,
  };

  const handleChange = event => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClickEdit = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseEdit = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const [editUserData,setEditUserData]=useState({});
  const [showEdit, setShowEdit] = useState(false);
  const openEdit = (data) => {
    setEditUserData(data)
    setShowEdit(true);
  };
  const handleEditExit = () => {
    setShowEdit(false);
  };
  useEffect(() => {}, [usersList]);
  const onDeleteUser = id => {
    const verify = window.confirm('Are you sure you want to delete ?');
    console.log('Verify====id ', verify, id);
    if (verify == true) {
      console.log('Inside true');
      // pass id to delete
      deleteUser(id);
    }
  };

  const [showExport, setShowExport] = useState(false);
  const openExport = () => {
    setShowExport(true)
  }
  const handleExit = () => {
    setShowExport(false)
  }

 const [anchorE2, setAnchorE2] = useState(null);

  const handleClick = (event) => {
    setAnchorE2(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorE2(null);
  };

  // const open = Boolean(anchorEl);
  // const id = open ? 'simple-popover' : undefined;

  const [foundUser, setFoundUsers] = useState("");
  const [name, setName] = useState("");
  const filter = (e) => {
    const keyword = e.target.value;
    let obj = {
      fromSaga: false,
      results: [],
    }

    if (keyword !== '') {
      const results = usersList.filter((list) => {
        return list.name.toLowerCase().startsWith(keyword.toLowerCase());
      });
      setFoundUsers(results);
      console.log('show result inside filter', results)
      // obj.results = results;
      // setEmployee(obj);
    }
    else {
      setFoundUsers(usersList);
      //setEmployee(obj);
    }

    setName(keyword);
  };

  
  return (
    <div className="myprofile">
      <div className="mt-16 w-full">
        {/* <UsersUtility usersList={usersList} EmployeeCardListreplica={EmployeeCardListreplica}/> */}
        <div className="md:flex  m-2">
      <select
        className="border-2 border-gray-200 bg-white h-9 px-3 pr-2 ml-6 rounded-full text-sm focus:outline-none"
        style={{ width: '10%', borderRadius: '8px' }}
        onChange={() => orderBy()}
      >
        <option value="" disabled selected>
          Sort by
        </option>
        <option value="departmentName">Department</option>
        <option value="emailId">Email_ID</option>
        <option value="id">User_ID</option>
      </select>

      <label className="border-0 border-gray-200 bg-white h-9 mt-2 px-2 ml-2 rounded-full text-sm"
        style={{ width: '12%', borderRadius: '8px' }}>Search By</label>
      <select
        className="border-2 border-gray-200 bg-white h-9 px-2 pr-2 ml-1 rounded-full text-sm focus:outline-none"
        style={{ width: '14%', borderRadius: '8px' }}
      // onChange={() => orderBy()}
      >
        <option value="" disabled selected>
          Department
        </option>
        <option value="1">Marketing</option>
        <option value="2">Account</option>
        <option value="3">IT</option>
        <option value="4">HR</option>
      </select>

      <input
        className="border-2 border-gray-300 bg-white w-72 h-9 px-8 pr-6 ml-3 rounded-full text-sm focus:outline-none"
        value={name}
        onChange={filter}
        style={{ borderRadius: '8px' }}
        type="text"
        name="search"
        placeholder="Search by name"
      />
      <button className="text-green-500 border-2 rounded-full border-gray-300 mr-3 ml-3 pr-2 pl-1">
        Clear
      </button>
      <Button
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<MoreVertIcon />}
        style={{
          color: 'white',
          borderRadius: '30px',
          background: 'rgba(102, 115, 126, 0.46)',
        }}
      >
        ACTION
      </Button>
      <Popover
        id={id}
        open={open}
        anchorE2={anchorE2}
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
          <div><button className="text-slate-200 mx-3" disable>Import Excel</button></div>
          <div><button className="text-slate-200 mx-3 my-2" disable>Import SAP</button></div>
          <div><button className="mx-3" onClick={openExport}>Add User</button></div>
        </div>
      </Popover>
      <Dialog open={showExport} onClose={handleExit}>
        <DialogContent style={{
          borderRadius: '15px',
          background: '#FFFFFF',
          boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.15)',
          Width: '70%',
          Height: '80%',
        }}>
          <AddUser rolesList={rolesList} departmentList={departmentList} getAllDepartment={getAllDepartment} getAllRoles={getAllRoles} />
        </DialogContent>
      </Dialog>
    </div>
        <div className="">
          <div className=" w-full">
            {foundUser &&
              foundUser.length > 0 &&
              foundUser.map((list, index) => (
                <div
                  className="block text-gray lg:ml-6 md:ml-10 sm:ml-12"
                  key={list.name}
                >
                  <div className="my-5 w-full justify-center " />
                  <div>
                    <Card
                      className="w-full rounded-full h-[72px]"
                      style={{ borderRadius: '50px', marginTop: '10px' }}
                    >
                      <CardContent className="justify-center">
                        <div className="flex rounded-full" key={list.name}>
                          <div className="">
                            <img
                              className="rounded-full ml-3 w-[41px] h-[41px]"
                              src={emp_image}
                            />
                          </div>
                          <div className="ml-10">
                            <p className="text-[11px] font-sans font-semibold text-[#66737E] mt-[2px]">
                              Employee
                            </p>
                            <div className="flex">
                              <p className="text-[13px] font-sans font-bold text-[#132B6B] mt-[8px]">
                                {list.name}
                              </p>
                              <div className="flex justify-center w-20 bg-[#F66B6B] ml-1 mt-[6px] rounded-md h-4">
                                <p className="text-center text-[11px] mt-[2px] text-white font-sans">
                                  {list.employeeId}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="ml-10">
                            <p className="text-[11px] font-sans font-semibold text-[#66737E] mt-[2px]">
                              Department
                            </p>
                            <p className="text-[13px] font-sans font-bold text-[#132B6B] mt-[8px]">
                              {list.departmentName}
                            </p>
                          </div>
                          <div className="ml-12">
                            <p className="text-[11px] font-sans font-semibold text-[#66737E] mt-[2px]">
                              Phone
                            </p>
                            <p className="text-[13px] font-sans font-bold text-[#132B6B] mt-[8px]">
                              {list.mobileNumber}
                            </p>
                          </div>
                          <div className="ml-12">
                            <p className="text-[11px] font-sans font-semibold text-[#66737E] mt-[2px]">
                              Email ID
                            </p>
                            <p className="text-[13px] font-sans font-bold text-[#132B6B] mt-[8px]">
                              {list.emailId}
                            </p>
                          </div>
                          <div className="ml-12">
                            <p className="text-[11px] font-sans font-semibold text-[#66737E] mt-[2px]">
                              Active
                            </p>
                            {/* <FormControlLabel
control={<IOSSwitch checked={state.checkedB} onChange={handleChange} name="checkedB" />}

/> */}
                            <GreenSwitch {...label} defaultChecked />
                          </div>
                          <div className="mt-2 ml-8">
                            <MoreVert onClick={handleClickEdit} />
                          </div>
                          <Popover
                            id={id}
                            open={open}
                            anchorEl={anchorEl}
                            onClose={handleCloseEdit}
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
                              <div>
                                <button
                                  className="my-1 mx-4"
                                  disable
                                  onClick={() => openEdit(list)}
                                >
                                  Edit
                                </button>
                              </div>
                              <div>
                                <button
                                  className="my-1 mx-4"
                                  onClick={() => onDeleteUser(list.id)}
                                >
                                  Delete
                                </button>
                              </div>
                            </div>
                          </Popover>
                          <Dialog
                            open={showEdit}
                            onClose={handleEditExit}
                            className="w-50 h-50"
                          >
                            <DialogContent
                              style={{
                                borderRadius: '15px',
                                background: '#FFFFFF',
                                boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.15)',
                                Width: '604px',
                                Height: '494px',
                              }}
                            >
                              <EditUser list={editUserData} editUser={editUser} rolesList={rolesList} departmentList={departmentList} getAllDepartment={getAllDepartment} getAllRoles={getAllRoles} />
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
              ))}
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
  usersList:
    state.users.EmployeeCardList.length > 0 ? state.users.EmployeeCardList : [],
    rolesList:
    state.users.rolesList.length > 0 ? state.users.rolesList : [],
    departmentList:
    state.users.departmentList.length > 0 ? state.users.departmentList : [],
  
});

export function mapDispatchToProps(dispatch) {
  return {
    showEmployee: data => dispatch(showEmployee(data)),
    setEmployee: obj => dispatch(setEmployee(obj)),
    editUser: data => dispatch(editUser(data)),
    deleteUser: data => dispatch(deleteUser(data)),
    onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
    getAllDepartment:()=>dispatch(getAllDepartment()),
    getAllRoles:()=>dispatch(getAllRoles()),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRepos());
    },
  };

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
