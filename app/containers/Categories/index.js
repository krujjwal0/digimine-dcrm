/*
 * Categories
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, useState, memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
// import {
//   makeSelectRepos,
//   makeSelectLoading,
//   makeSelectError,
// } from 'containers/App/selectors';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { Card, CardContent, FormGroup, Typography } from '@material-ui/core';
import Switch from '@material-ui/core/Switch';
import { green } from '@material-ui/core/colors';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import {
  alpha,
  styled,
  withStyles,
  makeStyles,
} from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import ClearAllIcon from '@material-ui/icons/ClearAll';
import AddCategory from './addCategories';
import AddSubCategory from './subCategories';
import './style.css';
import reducer from './reducer';
import saga from './saga';
import {
  getAllDepartmentInCategory,
  getCategoryList,
  addCategoryRule,
  addCategorySubRule,
  setSearchData,
  ClearSortnSearch
} from './actions';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    borderRadius: '50px',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

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
const key = 'categories';

export function Categories({
  getCategoryList,
  getAllDepartmentInCategory,
  departmentLisInCategory,
  addCategoryRule,
  categoryList,
  addCategorySubRule,
  setSearchData,
  categoryListReplica,
  ClearSortnSearch
  
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    getCategoryList();
    getAllDepartmentInCategory();
  }, []);

  // const reposListProps = {
  //   loading,
  //   error,
  //   repos,
  // };

  const [showAddCategory, setShowAddCategory] = useState(false);
  const openNewCategories = () => {
    setShowAddCategory(true);
  };
  const handleCloseBtn = () => {
    setShowAddCategory(false);
    setShowSubCategory(false);
  };

  const [showSubCategory, setShowSubCategory] = useState(false);
  const openSubCategory = (id) => {
    setShowSubCategory(true);
  };

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState('sm');

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }

  const createCategory = (deptName, newRule) => {
    const obj = {
      id: '',
      name: newRule,
      deleted: false,
      departmentId: deptName,
    };
    addCategoryRule(obj);
    handleCloseBtn()
  };

  const createSubRuleInCategory = (subRuleName, ruleId, title, responsibility, description, circular) => {
    const obj = {
      id: '',
      name: subRuleName,
      deleted: false,
      ruleId: ruleId,
      title: title,
      responsibility: responsibility,
      description: description
    };
    addCategorySubRule(obj);
    handleCloseBtn();
  };

  const search = e => {
    const keyword = e.target.value;
    console.log("Seacrh according to ====",keyword.length)
    if (keyword !== '' && keyword.length > 2) {
      const result = categoryListReplica.filter(value => value.name.toLowerCase().includes(keyword.toLowerCase()))
        console.log('show result name inside filter', result);
        setSearchData(result)
      }
      
    if(keyword.length === 0){
        ClearSortnSearch(categoryListReplica)
      }
    }

  return (
    <div className="content font-sans">
      <div className="w-full h-full">
        <div className="ml-8 ">
          <div className="mt-3 text-xl ">
            <Breadcrumbs
              aria-label="breadcrumb"
              className="font-sans font-bold text-xl"
              style={{ marginLeft: '0px', fontWeight: '800', fontSize: '20px' }}
            >
              <Typography
                sx={{ display: 'flex', alignItems: 'center' }}
                color="text.primary"
                className="font-sans font-bold text-xl"
                style={{
                  marginLeft: '30px',
                  fontWeight: '500',
                  fontSize: '21px',
                  color: '#132B6B',
                }}
              >
                <ClearAllIcon
                  sx={{ mr: 0.8 }}
                  fontSize="inherit"
                  className=""
                />
                Categories
              </Typography>
            </Breadcrumbs>
            <p
              style={{ color: '#F66B6B', fontSize: '13px' }}
              className=" font-sans ml-14 -mt-1"
            >
              <Link
                color="inherit"
                href="/"
                onClick={handleClick}
                className="font-sans"
              >
                Categories /
              </Link>
              <Link
                color="textPrimary"
                href="/components/breadcrumbs/"
                onClick={handleClick}
                aria-current="page"
                className="font-sans"
              >
                categories
              </Link>
            </p>
            <hr />
          </div>

          <div className="flex font-sans flex justify-between">
            <div className="flex mt-5 flex justify-start ml-2">
              <form>
                <select
                  className="w-24 font-sans px-2 border-2 rounded-[20px] h-9"
                  style={{ boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.15)' }}
                >
                  <option className="font-sans text-black">Sort by</option>
                </select>
              </form>

              <div
                className="font-sans flex justify-between ml-5 w-80 h-9 flex item-strech border-2 px-6 rounded-[20px]"
                style={{ boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.15)' }}
              >
                <InputBase
                  placeholder="Search by Rule"
                  name="search"
                  onChange={(e) => search(e)}
                  inputProps={{ 'aria-label': 'search' }}
                  className="font-sans font-normal"
                  style={{
                    fontSize: '13px',
                    color: '#AAAAAA',
                    fontWeight: '300',
                  }}
                />
                <SearchIcon
                  className="px-0 mt-1"
                  style={{ color: '#0F4C4F' }}
                />
              </div>

              <button
                className="font-sans border-2 text-red-400 w-20 ml-6  h-8 rounded-[20px]"
                style={{ boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.15)' }}
                onClick = {() => ClearSortnSearch(categoryListReplica)}
              >
                Clear
              </button>
            </div>

            <div
              className="font-sans w-56 h-9 mt-5  border-2 rounded-full flex justify-center m-2"
              style={{ background: '#132B6B' }}
            >
              {/* <AddIcon className="text-white mt-1 " /> */}
              <button className="text-white ml-2" onClick={openNewCategories}>
                ADD NEW CATEGORIES
              </button>
            </div>
            <div className="flex justify-between rounded-full ">
              <Dialog
                style={{
                  width: '50%',
                  borderRadius: '50px',
                  marginLeft: '30%',
                  marginTop: '7%',
                }}
                className="w-full h-3/4 "
                open={showAddCategory}
                onClose={handleCloseBtn}
              >
                <DialogContent
                  // style={{
                  //   borderRadius: '15px',
                  //   background: '#FFFFFF',
                  //   boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.15)',
                  //   Width: '70%',
                  //   Height: '80%',
                  // }}
                  className="flex justify-start"
                >
                  <AddCategory
                    departmentList={departmentLisInCategory}
                    createCategory={createCategory}
                    handleCloseBtn={handleCloseBtn}
                  />
                </DialogContent>
              </Dialog>
            </div>
          </div>

          {categoryList.map((list, index) => (
            <div className="mt-8 ml-3 w-11/12 font-sans">
              <div className={classes.root}>
                <Accordion
                  expanded={expanded === 'panel1'}
                  onChange={handleChange('panel1')}
                  className=" font-sans "
                  style={{ borderRadius: '30px' }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    className="flex"
                  >
                    <Typography
                      className={classes.heading}
                      style={{ display: 'inline-flex' }}
                    >
                      <button
                        className="font-sans flex w-36 h-8 text-white rounded-full flex justify-center"
                        style={{ background: '#132B6B' }}
                      >
                        <AddIcon className="mt-1 " onClick={()=>openSubCategory(list)} />
                        <p className="mt-1 font-sans">Add Sub Rule</p>
                      </button>

                      <Dialog
                        fullWidth={fullWidth}
                        maxWidth={maxWidth}
                        style={{
                          borderRadius: '50px',
                          marginLeft: '1%',
                          marginTop: '',
                        }}
                        className="w-full h-full "
                        open={showSubCategory}
                        onClose={handleCloseBtn}
                      >
                        <DialogContent
                          // style={{
                          //   borderRadius: '15px',
                          //   background: '#FFFFFF',
                          //   boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.15)',
                          //   Width: '70%',
                          //   Height: '80%',
                          // }}
                          className="flex justify-start"
                        >
                          <AddSubCategory
                            // addUser={addUser}
                            // rolesList={rolesList}
                            parentRule={list.id}
                            departmentList={departmentLisInCategory}
                            createSubRuleInCategory={createSubRuleInCategory}
                            // getAllDepartment={getAllDepartment}
                            // getAllRoles={getAllRoles}
                            handleCloseBtn={handleCloseBtn}
                          />
                        </DialogContent>
                      </Dialog>

                      <div className="flex ml-6 mt-1 font-sans">
                        <div className="flex">
                          <p
                            className="w-16 font-sans"
                            style={{
                              color: '#132B6B',
                              fontSize: '16px',
                              fontWeight: '700',
                            }}
                          >
                            {' '}
                            {list.name}
                          </p>
                          <p
                            className="rounded-full h-6 m-1 px-1 text-white font-sans items-center "
                            style={{
                              background: '#F66B6B',
                              fontSize: '12px',
                              width: '28px',
                            }}
                          >
                            25
                          </p>
                        </div>
                        <div className="ml-6 flex w-full ">
                          <ChevronLeftIcon style={{ color: '#36454F' }} />
                          <div
                            className="border-2 flex w-12 h-7 flex justify-center font-sans "
                            style={{
                              color: '#36454F',

                              borderRadius: '4px',
                            }}
                          >
                            5<p>(4)</p>
                          </div>
                          <div className="border-2 flex ml-3 w-12 h-7 flex justify-center">
                            5<p>(4)</p>
                          </div>
                          <div className="border-2 flex ml-3 w-12 h-7 flex justify-center">
                            5<p>(4)</p>
                          </div>
                          <div className="border-2 flex ml-3 w-12 h-7 flex justify-center">
                            5<p>(4)</p>
                          </div>
                          <ChevronRightIcon />
                        </div>
                      </div>
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <div className="">
                        <p
                          className="font-sans h-9 px-4 py-1 flex justify-start -ml-4"
                          style={{ backgroundColor: '#F5F5F5', width: '248%' }}
                        >
                          {' '}
                          <Breadcrumbs
                            aria-label="breadcrumb"
                            style={{
                              color: '#132B6B',
                              fontWeight: '600',
                              fontSize: '14px',
                            }}
                            className="font-sans "
                          >
                            <Link
                              color="inherit"
                              href="/"
                              onClick={handleClick}
                              className="font-sans "
                            >
                              Section
                            </Link>
                            <Link
                              color="inherit"
                              href="/getting-started/installation/"
                              onClick={handleClick}
                              className="font-sans"
                            >
                              Rules
                            </Link>
                            <Link
                              color="inherit"
                              href="/getting-started/installation/"
                              onClick={handleClick}
                              className="font-sans"
                            >
                              Clause
                            </Link>
                            <Typography
                              color="textPrimary"
                              className="font-sans"
                            >
                              SubClause No.
                            </Typography>
                          </Breadcrumbs>
                          <p
                            className="w-10 h-6 px-1  ml-2 font-sans"
                            style={{
                              background: '#8EF4D2',
                              color: '#36454F',
                              borderRadius: '4px',
                            }}
                          >
                            5(4)
                          </p>
                        </p>

                        <div className="m-4">
                          <div className="mt-7">
                            <p
                              className="font-sans"
                              style={{
                                color: ' #132B6B',
                                fontSize: '18px',
                                fontWeight: '600',
                              }}
                            >
                              Title of the Rules and Regulations
                            </p>
                            <p
                              className="font-sans"
                              style={{
                                fontSize: '14px',
                                color: '#000000',
                                fontWeight: '400',
                              }}
                            >
                              Electrical Safety Officer
                            </p>
                          </div>
                          <hr />
                          <div className="mt-7 font-sans">
                            <p
                              className="font-sans"
                              style={{
                                color: ' #132B6B',
                                fontSize: '18px',
                                fontWeight: '600',
                              }}
                            >
                              Responsibility
                            </p>
                            <Breadcrumbs aria-label="breadcrumb">
                              <Link
                                color="inherit"
                                href="/"
                                onClick={handleClick}
                                className="font-sans"
                                style={{
                                  fontSize: '14px',
                                  color: '#000000',
                                  fontWeight: '400',
                                }}
                              >
                                Owner
                              </Link>
                              <Link
                                color="inherit"
                                href="/getting-started/installation/"
                                onClick={handleClick}
                                className="font-sans"
                                style={{
                                  fontSize: '14px',
                                  color: '#000000',
                                  fontWeight: '400',
                                }}
                              >
                                Agent
                              </Link>
                              <Link
                                color="inherit"
                                href="/getting-started/installation/"
                                onClick={handleClick}
                                className="font-sans"
                                style={{
                                  fontSize: '14px',
                                  color: '#000000',
                                  fontWeight: '400',
                                }}
                              >
                                Manager
                              </Link>
                              {/* <Typography color="textPrimary">
                            Sub Clause
                          </Typography> */}
                            </Breadcrumbs>
                          </div>
                          <hr />
                          <div className="mt-7">
                            <p
                              className="font-sans"
                              style={{
                                color: ' #132B6B',
                                fontSize: '18px',
                                fontWeight: '600',
                              }}
                            >
                              Description
                            </p>
                            <p
                              className="font-sans"
                              style={{
                                fontSize: '14px',
                                color: '#000000',
                                fontWeight: '400',
                              }}
                            >
                              Electrical Safety Officer
                            </p>
                          </div>
                          <hr />
                          <div className="mt-7">
                            <p
                              className="font-sans"
                              style={{
                                color: ' #132B6B',
                                fontSize: '18px',
                                fontWeight: '600',
                              }}
                            >
                              Revelant Circular
                            </p>
                            <p
                              className="font-sans"
                              style={{
                                fontSize: '14px',
                                color: '#000000',
                                fontWeight: '400',
                              }}
                            >
                              Electrical Safety Officer
                            </p>
                          </div>
                        </div>
                      </div>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

Categories.propTypes = {
  // loading: PropTypes.bool,
  // error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  // repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  // onSubmitForm: PropTypes.func,
  // username: PropTypes.string,
  // onChangeUsername: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    getCategoryList: () => dispatch(getCategoryList()),
    getAllDepartmentInCategory: () => dispatch(getAllDepartmentInCategory()),
    addCategoryRule: (obj) => dispatch(addCategoryRule(obj)),
    addCategorySubRule: (obj) => dispatch(addCategorySubRule(obj)),
    setSearchData:(obj)=> dispatch(setSearchData(obj)),
    ClearSortnSearch:(obj)=> dispatch(ClearSortnSearch(obj))
  };
}

const mapStateToProps = state => ({
  categoryList:
    state.categories.categoryList.length > 0
      ? state.categories.categoryList
      : [],
  categoryListReplica:
    state.categories.categoryListReplica.length > 0
      ? state.categories.categoryListReplica
      : [],
  departmentLisInCategory:
    state.categories.departmentLisInCategory.length > 0
      ? state.categories.departmentLisInCategory
      : [],
});
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Categories);
