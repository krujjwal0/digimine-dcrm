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
import './style.css';
import { Redirect, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import reducer from './reducer';
import FormImg from './images/formImage.png';
import logo from '../../images/logo.svg';
import {
  getFeedbackFormData,
  setFeedbackFormData,
  saveDataFeedbackForm,
  setShowToFeedBackPage,
} from './actions';
import saga from './saga';
import { setNavBar } from '../App/actions';
import StepButton from '@material-ui/core/StepButton';

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


const key = 'loginReducer';

function FeedbackForm({
  feedbackFormData,
  getFeedbackFormData,
  setFeedbackFormData,
  setNavBar,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  // let steps = []; 

  useEffect(() => { }, [feedbackFormData])
  // useEffect(()=>{},[steps])
  const history = useHistory();



  useEffect(() => {
    console.log('inside useeffect', feedbackFormData);
    getFeedbackFormData();
    // steps=[...feedbackFormData];
    console.log('inside useeffect steps', feedbackFormData);
    // saveDataFeedbackForm();
    // setShowToFeedBackPage();
  }, []);

  const [activeStep, setActiveStep] = React.useState(0);
  const [feedbackRadioCheck, setFeedbackRadioCheck] = useState();
  const [completed, setCompleted] = React.useState({});

  function handleSkip() {
    history.push('/dashboard');
    setNavBar(true);
  }
  // const handleNext = () => {
  // history.push('/dashboard');
  // setNavBar(true);
  // setRedirectToUserManagementPage(true);

  // active when we have feedback form API
  //   setActiveStep(prevActiveStep => prevActiveStep + 1);
  // };

  // const handleNext = () => {
  //    history.push('/dashboard');
  // setNavBar(true);
  // setRedirectToUserManagementPage(true);
  //   const newActiveStep =
  //     isLastStep() && !allStepsCompleted()
  //       ? // It's the last step, but not all steps have been completed,
  //       // find the first step that has been completed
  //       steps.findIndex((step, i) => !(i in completed))
  //       : activeStep + 1;
  //   setActiveStep(newActiveStep);
  // };



  // const handleBack = () => {
  //   setActiveStep(prevActiveStep => prevActiveStep - 1);
  // };

  // const handleReset = () => {
  //   setActiveStep(0);
  // };

  const [
    redirectToUserManagementPage,
    setRedirectToUserManagementPage,
  ] = useState(false);

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
    history.push({ pathname: '/help' });
    setNavBar(true);
  }




  const totalSteps = () => {
    return feedbackFormData.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    history.push('/dashboard');
    setNavBar(true);
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
        // find the first step that has been completed
        feedbackFormData.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper nonLinear activeStep={activeStep}>
        {feedbackFormData.map((feed, index) => (
          <>
            <div>
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
                Question {index + 1}
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
                {feed.question}
              </p>
            </div>
            <Step key={index} completed={completed[index]}>


              <StepButton color="inherit" onClick={handleStep(index)}>
                {index}
              </StepButton>
            </Step>
          </>
        ))}
      </Stepper>
      <div>
        {allStepsCompleted() ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleNext} sx={{ mr: 1 }}>
                Next
              </Button>
              {activeStep !== feedbackFormData.length &&
                (completed[activeStep] ? (
                  <Typography variant="caption" sx={{ display: 'inline-block' }}>
                    Step {activeStep + 1} already completed
                  </Typography>
                ) : (
                  <Button onClick={handleComplete}>
                    {completedSteps() === totalSteps() - 1
                      ? 'Finish'
                      : 'Complete Step'}
                  </Button>
                ))}
            </Box>
          </React.Fragment>
        )}
      </div>
    </Box>
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
    feedbackFormData: state.loginReducer.feedbackFormData
      ? state.loginReducer.feedbackFormData
      : [],

    // feedbackFormData: state.loginReducer.feedbackFormData > 0 ? state.loginReducer.feedbackFormData : [],
  };
};

export function mapDispatchToProps(dispatch) {
  return {
    getFeedbackFormData: data => dispatch(getFeedbackFormData(data)),
    setFeedbackFormData: data => dispatch(setFeedbackFormData(data)),
    saveDataFeedbackForm: data => dispatch(saveDataFeedbackForm(data)),
    setShowToFeedBackPage: data => dispatch(setShowToFeedBackPage(data)),
    setNavBar: data => dispatch(setNavBar(data)),
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
