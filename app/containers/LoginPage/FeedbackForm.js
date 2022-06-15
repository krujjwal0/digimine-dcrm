import React from 'react'
import logo from '../../images/logo.svg';
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

const steps = [
    {
      label: '',
      description: ``,
    },
    {
      label: '',
      description:
        '',
    },
    {
      label: '',
      description: ``,
    },
  ];
  

export default function FeedbackForm() {

    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    const handleReset = () => {
      setActiveStep(0);
    };

    return (
        <div className="bg-white w-full">
            <div className="ml-24 mt-1 mx-18 flex">
                <div className="mt-22">
                    <img src={logo} style={{ width: '250px', height: '80px', marginTop: '30px' }} />
                </div>
                <div className="justify-end mt-12 ml-96 px-54">
                    <label style={{
                        color: '#132B6B',
                        fontFamily: 'Omnes',
                        fontWeight: '600',
                        fontSize: '40px',
                        lineHeight: '110%',
                        // marginLeft: '817px'
                    }}>Feedback Form</label>
                </div>
            </div>
            <div className="flex">
            <div className="mt-24" style={{background: '#F46B6B', height: '270px', width: '3px', marginLeft: '117px'}}/>
            <div className="mt-24 ml-24">
                <label style={{
                    width: '176px',
                    height: '40px',
                    left: '154px',
                    fontFamily: 'Omnes',
                    fontWeight: '600',
                    fontSize: '32px',
                    lineHeight: '110%',
                    color: '#F46B6B'
                }}>Question 7</label>
                <p style={{
                    color: '#132B6B',
                    fontFamily: 'Nunito',
                    fontWeight: '700',
                    fontSize: '20px',
                    lineHeight: '25px',
                    width: '808px',
                    height: '60px',
                    left: '154px',
                    marginTop: '8px',
                }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className=" mt-10">
                <FormControl>
      {/* <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel> */}
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel style={{ color: '#132B6B'}} value="female" control={<Radio />} label="Lorem ipsum dolor sit amet, consectetur" />
        <FormControlLabel value="male" control={<Radio />} label="Lorem ipsum dolor sit amet, consectetur" />
        <br/>
        <FormControlLabel value="other" control={<Radio />} label="Lorem ipsum dolor sit amet, consectetur" />
        <FormControlLabel value="disabled" control={<Radio />} label="Lorem ipsum dolor sit amet, consectetur" />
      </RadioGroup>
    </FormControl>
                </div>
            </div>
            <div className=" ml-4 mt-24">
            <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === 2 ? (
                  <Typography variant="caption"></Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              <Box sx={{ mb: 2 }}>
                {/* <div>
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
                </div> */}
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
            </div>
            </div>
        </div>
    )
}