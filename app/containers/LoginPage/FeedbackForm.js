import React, { useState, useEffect, memo } from 'react';
import Box from '@material-ui/core/Box';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
// import QuestionMarkIcon from '@material-ui/icons/QuestionMark';
import HelpIcon from '@material-ui/icons/Help';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import FormImg from './images/formImage.png';
import './style.css';
import { Redirect, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import reducer from './reducer';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import logo from '../../images/logo.svg';
import {
  getFeedbackFormData,
  setFeedbackFormData,
  saveDataFeedbackForm,
  setShowToFeedBackPage,
} from './actions';
import saga from './saga';
import { setNavBar } from '../App/actions';

// const steps = [
//   {
//     label: '',
//     description: ``,
//   },
//   {
//     label: '',
//     description: '',
//   },
//   {
//     label: '',
//     description: ``,
//   },
// ];

const steps = ['', '', '', '', '', '', '', '', '', ''];
const key = 'loginReducer';

function FeedbackForm(
  { feedbackFormData, getFeedbackFormData, setFeedbackFormData, setNavBar }
) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });


  const history = useHistory();

  useEffect(() => {
    console.log('inside useeffect', feedbackFormData);
    getFeedbackFormData();
    saveDataFeedbackForm();
    setShowToFeedBackPage();
  }, []);

  const [activeStep, setActiveStep] = React.useState(0);
  const [feedbackRadioCheck, setFeedbackRadioCheck] = useState();

  const handleNext = () => {
    history.push('/dashboard')
    setNavBar(true)
    // setRedirectToUserManagementPage(true);

    // active when we have feedback form API
    // setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const [redirectToUserManagementPage, setRedirectToUserManagementPage] = useState(false);

  if (redirectToUserManagementPage) {
    return <Redirect to={{ pathname: '/formsecond' }} />;
  }

  const [redirectToFeedbackPageTwo, setRedirectToFeedbackPageTwo] = useState(
    false,
  );

  if (redirectToFeedbackPageTwo) {
    return <Redirect to={{ pathname: '/admin/users' }} />;
  }

  const onClickRadioFeedback = event => {
    setFeedbackRadioCheck(event.target.value);
    console.log(event.target.value);
  };

  const handleSave = e => {
    let data;
    data = {
      feedbackRadioCheck,
    };
    saveDataFeedbackForm(data);
    setRedirectToFeedbackPageTwo(true);

    const addFeedBackData = e => {
      handleSave();
      setShowToFeedBackPage(true);
    };
  };

  function helpPageCall() {
    history.push({pathname: '/help'})
    setNavBar(true)
  }

  return (
    <div className="bg-white w-full min-h-screen font-sans">
      <div className="font-sans ml-28 flex flex justify-between">
        <div className="mt-22">
          <img
            src={logo}
            style={{ width: '250px', height: '80px', marginTop: '30px' }}
          />
        </div>
        <div className="font-sans mt-9" style={{ marginRight: '26%' }}>
          <label
            style={{
              color: '#132B6B',
              // fontFamily: 'Omnes',
              fontWeight: '500',
              fontSize: '35px',
              lineHeight: '110%',
              // marginLeft: '817px'
            }}
            className="font-sans absolute"
          >
            Feedback Form
          </label>
        </div>
      </div>
      <div className="flex ml-32">
        <div
          className="mt-24"
          style={{
            background: '#F46B6B',
            height: '270px',
            width: '3px',
            // marginLeft: '117px',
          }}
        />
        <div className="w-3/4 mt-24 ml-6">
          <label
            style={{
              width: '176px',
              height: '40px',
              left: '154px',
              // fontFamily: 'Omnes',
              fontWeight: '600',
              fontSize: '32px',
              lineHeight: '110%',
              color: '#F46B6B',
            }}
            className="font-sans"
          >
            Question 1
          </label>
          <p
            style={{
              color: '#132B6B',
              // fontFamily: 'Nunito',
              fontWeight: '700',
              fontSize: '20px',
              lineHeight: '25px',
              width: '808px',
              height: '60px',
              left: '154px',
              // marginTop: '8px',
            }}
            className="mt-4 font-sans"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className=" mt-7 -ml-1">
            <FormControl className="mb-3">
              {/* <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel> */}
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                onClick={onClickRadioFeedback}
              >
                <FormControlLabel
                  style={{
                    color: '#132B6B',
                    // fontFamily: 'Omnes',
                    fontWeight: '400',
                    fontSize: '12px',
                  }}
                  value="OptionOne"
                  control={
                    <Radio
                      value="Enable"
                      name="Disable"
                      checked={feedbackRadioCheck === 'Enable'}
                    />
                  }
                  label="Lorem ipsum dolor sit amet, consectetur"
                  className="font-sans"
                />
                <FormControlLabel
                  className=" mb-3 font-sans"
                  style={{
                    color: '#132B6B',
                    fontFamily: 'Omnes',
                    fontWeight: '400',
                    fontSize: '12px',
                    marginLeft: '38px',
                  }}
                  value="OptionTwo"
                  control={
                    <Radio
                      value="Disable"
                      name="Disable"
                      checked={feedbackRadioCheck === 'Disable'}
                    />
                  }
                  label="Lorem ipsum dolor sit amet, consectetur"
                />
                <br />
                <br />
                <FormControlLabel
                  className="font-sans"
                  style={{
                    color: '#132B6B',
                    fontFamily: 'Omnes',
                    fontWeight: '400',
                    fontSize: '12px',
                  }}
                  value="OptionThree"
                  control={
                    <Radio
                      value="ThirdOption"
                      name="Disable"
                      checked={feedbackRadioCheck === 'ThirdOption'}
                    />
                  }
                  label="Lorem ipsum dolor sit amet, consectetur"
                />
                <FormControlLabel
                  className="font-sans"
                  style={{
                    color: '#132B6B',
                    fontFamily: 'Omnes',
                    fontWeight: '400',
                    fontSize: '12px',
                    marginLeft: '38px',
                  }}
                  value="optionFour"
                  control={
                    <Radio
                      value="OptionFour"
                      name="Disable"
                      checked={feedbackRadioCheck === 'OptionFour'}
                    />
                  }
                  label="Lorem ipsum dolor sit amet, consectetur"
                />
              </RadioGroup>
            </FormControl>
          </div>
        </div>
        <div className=" ml-36 step_list -mt-12">
          <Box sx={{ maxWidth: 400 }}>
            <Stepper
              activeStep={1}
              orientation="vertical"
              style={{ marginLeft: '0px', width: '20.77px' }}
            >
              {steps.map(label => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Box>
          {/* <Box sx={{ maxWidth: 400 }}>
            <Stepper activeStep={activeStep} orientation="vertical">
              {steps.map((step, index) => (
                <Step key={step.label}>
                  <StepLabel
                    optional={
                      index === 2 ? <Typography variant="caption" /> : null
                    }
                  >
                    {step.label}
                  </StepLabel>
                  <StepContent>
                    <Typography>{step.description}</Typography>
                    <Box sx={{ mb: 2 }}>
                      <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? 'Finish' : 'Continue'}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
                    </Box>
                  </StepContent>
                </Step>
              ))}
            </Stepper>
            {activeStep === steps.length && (
              <Paper square elevation={0} sx={{ p: 3 }}>
                <Typography>
                  All steps completed - you&apos;re finished
                </Typography>
                <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                  Reset
                </Button>
              </Paper>
            )}
          </Box> */}
        </div>
      </div>
      <div className="flex flex justify-between  ">
        <div className="flex w-full ml-32 " onClick={()=>{helpPageCall()}}>
          <HelpOutlineIcon
            className="mb-6 "
            // onClick={()=>{history.push({pathname: '/help'})}}
            style={{
              backgroundColor: '#FFFFFF',
              width: '55px',
              height: '45px',
              color: '#132B6B',
            }}
          />
          <p
            className="font-sans mt-4 font-semibold "
            style={{ color: '#132B6B' }}
          >
            Help
          </p>
          <div>
            <img
              src={FormImg}
              style={{
                position: 'absolute',
                backgroundSize: '100% auto',
                width: '100%',
                height: '30%',
                maxHeight: '95px',
                content: '',
                left: '0',
                bottom: '0',
                top: '612px',
              }}
            />
          </div>
        </div>

        <div className="mr-80 -mt-12 ">
          <button
            style={{
              background: '#132B6B',
              borderRadius: '60px',
              color: 'white',
              width: '115px',
              height: '40px',
            }}
            className="font-sans absolute"
            onClick={handleNext}
          >
            NEXT
          </button>
          {/* <button
            style={{
              background: '#132B6B',
              borderRadius: '60px',
              color: 'white',
              width: '115px',
              height: '40px',
              marginTop: '42px',
            }}
            className="font-sans absolute"
            onClick={handleSave}
          >
            SAVE
          </button> */}
        </div>
      </div>
    </div>
  );
}

FeedbackForm.propTypes = {
  dispatch: PropTypes.func,
};

const mapStateToProps = state => {
  console.log(
    'checking data of feedbackform state to props',
    state.loginReducer.feedbackFormData,
  );
  return {
    // feedbackFormData: state.loginReducer.feedbackFormData
    //   ? state.loginReducer.feedbackFormData
    //   : [],

    feedbackFormData: state.loginReducer.feedbackFormData,
  };
};

export function mapDispatchToProps(dispatch) {
  return {
    getFeedbackFormData: data => dispatch(getFeedbackFormData(data)),
    setFeedbackFormData: data => dispatch(setFeedbackFormData(data)),
    saveDataFeedbackForm: data => dispatch(saveDataFeedbackForm(data)),
    setShowToFeedBackPage: data => dispatch(setShowToFeedBackPage(data)),
    setNavBar: data => dispatch(setNavBar(data))
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(FeedbackForm);
