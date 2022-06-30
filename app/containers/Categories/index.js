/*
 * Categories
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import HistoryCard from '../History';
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
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { Card, CardContent, FormGroup, Typography } from '@material-ui/core';
import Switch from '@material-ui/core/Switch';
import { green } from '@material-ui/core/colors';
import Dialog from '@material-ui/core/Dialog';
import emp_image from '../../images/emp_image.png';
import DialogContent from '@material-ui/core/DialogContent';
import { alpha, styled, withStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import './style.css';

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

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }
  return (
    <div className="myprofile1 font-sans">
      <div className="w-full">
        <div className="ml-8 ">
          <div className="ml-4 mt-3 text-xl ">
            <p
              style={{ color: '#151F63', fontSize: '18px' }}
              className="font-sans font-semibold"
            >
              Categories
            </p>
            <p
              style={{ color: '#F66B6B', fontSize: '11px' }}
              className=" font-sans ml-18"
            >
              Dashboard | <span style={{ color: '#151F63' }}>History</span>
            </p>
            <hr />
          </div>
          <div className="flex font-sans">
            <div className="flex mt-5 flex justify-start">
              <form>
                <select className="w-20 font-sans  border-2 rounded-[20px] h-7">
                  <option className="font-sans">Sort By</option>
                </select>
              </form>

              <div className="font-sans flex justify-between ml-5 w-80 h-7 flex item-strech border-2 px-5 rounded-[20px]">
                <InputBase
                  placeholder="Search by Rule"
                  inputProps={{ 'aria-label': 'search' }}
                />
                <SearchIcon className="" />
              </div>

              <button className="font-sans border-2 w-20 ml-6  h-8 rounded-[20px]">
                Clear
              </button>
            </div>

            <div className="font-sans w-56 h-8 mt-5 ml-48 border-2 bg-blue-800 rounded-full flex justify-center">
              <AddIcon className="text-white" />
              <button className="text-white ">Add New Categories</button>
            </div>
          </div>

          <div className="mt-6 font-sans">
            <div className={classes.root}>
              <Accordion
                expanded={expanded === 'panel1'}
                onChange={handleChange('panel1')}
                className="rounded-full font-sans"
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
                    <button className="font-sans">Add Sub Rule</button>
                    <div className="flex ml-5 font-sans">
                      Rule A<p style={{ background: 'pink' }}>25</p>
                      <div className="ml-6 flex">
                        <ChevronLeftIcon />
                        <div className="border-2 flex">
                          5<p>(4)</p>
                        </div>
                        <div className="border-2 flex ml-3">
                          5<p>(4)</p>
                        </div>
                        <ChevronRightIcon />
                      </div>
                    </div>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <div>
                      <p
                        className="font-sans"
                        style={{ backgroundColor: '#F5F5F5' }}
                      >
                        {' '}
                        <Breadcrumbs aria-label="breadcrumb">
                          <Link color="inherit" href="/" onClick={handleClick}>
                            Section
                          </Link>
                          <Link
                            color="inherit"
                            href="/getting-started/installation/"
                            onClick={handleClick}
                          >
                            Rules
                          </Link>
                          <Link
                            color="inherit"
                            href="/getting-started/installation/"
                            onClick={handleClick}
                          >
                            Clause
                          </Link>
                          <Typography color="textPrimary">
                            Sub Clause
                          </Typography>
                        </Breadcrumbs>
                      </p>

                      <div className="mt-7">
                        Title of the Rules and Regulations
                        <p>Electrical Safety Officer</p>
                      </div>
                      <hr />
                      <div className="mt-7">
                        Responsibility
                        <p> <Breadcrumbs aria-label="breadcrumb">
                          <Link color="inherit" href="/" onClick={handleClick}>
                            Owner
                          </Link>
                          <Link
                            color="inherit"
                            href="/getting-started/installation/"
                            onClick={handleClick}
                          >
                            Agent
                          </Link>
                          <Link
                            color="inherit"
                            href="/getting-started/installation/"
                            onClick={handleClick}
                          >
                            Manager
                          </Link>
                          {/* <Typography color="textPrimary">
                            Sub Clause
                          </Typography> */}
                        </Breadcrumbs></p>
                      </div>

                      <div className="mt-7">
                       Description
                        <p>Electrical Safety Officer</p>
                      </div>

                      <div className="mt-7">
                       Revelant Circular
                        <p>Electrical Safety Officer</p>
                      </div>
                    </div>
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion
                expanded={expanded === 'panel2'}
                onChange={handleChange('panel2')}
                className="mt-6"
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                >
                  <Typography className={classes.heading}>Users</Typography>
                  <Typography className={classes.secondaryHeading}>
                    You are currently not an owner
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Donec placerat, lectus sed mattis semper, neque lectus
                    feugiat lectus, varius pulvinar diam eros in elit.
                    Pellentesque convallis laoreet laoreet.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === 'panel3'}
                onChange={handleChange('panel3')}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3bh-content"
                  id="panel3bh-header"
                >
                  <Typography className={classes.heading}>
                    Advanced settings
                  </Typography>
                  <Typography className={classes.secondaryHeading}>
                    Filtering has been entirely disabled for whole web server
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                    Integer sit amet egestas eros, vitae egestas augue. Duis vel
                    est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === 'panel4'}
                onChange={handleChange('panel4')}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel4bh-content"
                  id="panel4bh-header"
                >
                  <Typography className={classes.heading}>
                    Personal data
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                    Integer sit amet egestas eros, vitae egestas augue. Duis vel
                    est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
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
)(Categories);
