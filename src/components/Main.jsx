
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';


import GlobalStyles from './styles/GlobalStyles';
import DefaultTheme from './styles/DefaultTheme';
import Logo from '../assets/logo.png';
import {
    AppBar,
    Badge,
    Button,
    Card, 
    CardContent,
    Fade,
    FormControl,
    FormControlLabel,
    FormGroup,
    IconButton,
    Radio,
    RadioGroup,
    Stepper,
    Step,
    StepContent,
    StepLabel,
    TextField,
    Toolbar, 
    Typography
} from '@material-ui/core';

import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
  } from '@material-ui/pickers';

import InputMask from 'react-input-mask';

function getSteps() {
    return ['Personal Information', 'Certification and Backup Withholding', 'Additional People'];
}
  
function getStepContent(step) {
    switch (step) {
      case 0:
        return `Are you an existing customer?`;
      case 1:
        return 'Under penalties of perjury, I certify that the number I entered on this application is my correct taxpayer identification/social security number and that I am a U.S. person (including U.S. resident alien).';
      case 2:
        return `Step # 3`;
      default:
        return 'Unknown step';
    }
}
  

//import MenuIcon from '@material-ui/icons/Menu';
//import NotificationsIcon from '@material-ui/icons/Notifications';

export default function Main() {

    const [spacing, setSpacing] = React.useState(2);
    const classes = GlobalStyles(DefaultTheme);
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();
    const [value, setValue] = React.useState('');
    const [ssn, setSsn] = React.useState('');
    const [fieldHelperText, setFieldHelperText] = React.useState('');
    const [showError, setShowError] = React.useState(false);

    const [selectedDate, setSelectedDate] = React.useState(new Date('20002-09-15'));

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    
    const handleChangeRadio = (event) => {
      setValue(event.target.value);
    };

    const handleNext = () => {
        setFieldHelperText(false);
        setShowError(false);
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setFieldHelperText(false);
        setShowError(false);
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const handleChange = (event) => {
        setSpacing(Number(event.target.value));
      };

    const handleShowError = () => {
      setFieldHelperText("SSN was not found");
    };


    return (
        <div className={classes.title}>
            <div className={classes.root}>
                <AppBar position="static" className={classes.appColor}>
                    <Toolbar>
                        <img src={Logo} alt="logo" className={[classes.logoSizing,classes.menuButton].join(' ')} />
                        <div className={classes.title}>
                          
                        </div>
                        {/*<Badge badgeContent={4} color="secondary">
                            <NotificationsIcon />
                        </Badge>*/}

                    </Toolbar>
                    
                </AppBar>
                <div>
                    <Grid container className={classes.sectionMargin}>
                        <Typography variant="h5">Account Creation</Typography>
                        <Grid item xs={12}>
                            <Card>
                                <CardContent>
                                    <Fade in={Math.random()} timeout={1700}>
                                    <div>
                                    <Stepper activeStep={activeStep} orientation="vertical">
                                        {steps.map((label, index) => (
                                        <Step key={label}>
                                            <StepLabel>{label}</StepLabel>
                                            <StepContent>
                                            <Typography>{getStepContent(index)}</Typography>
                                            <div className={classes.actionsContainer}>
                                                {
                                                (index === 0)
                                                  ? <div>
                                                    <RadioGroup aria-label="existing" name="existing" value={value} onChange={handleChangeRadio}>
                                                        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                                        <FormControlLabel value="no" control={<Radio />} label="No" />
                                                    </RadioGroup>
                                                    {
                                                        value === 'yes'
                                                        ?  <div className={classes.formElement}>
                                                            <TextField
                                                                id="standard-error-helper-text"
                                                                label="SSN"
                                                                helperText={fieldHelperText}
                                                                variant="outlined"
                                                                value={ssn}
                                                                onChange={e => {
                                                                setSsn(e.target.value);
                                                                setShowError(true);
                                                                }}
                                                                error={showError}
                                                            />
                                                            
                                                            </div>
                                                        : value === 'no' 
                                                        ? <React.Fragment>
                                                            <Grid container>
                                                            <Grid item xs={12} md={4}>

                                                                <FormGroup className={classes.formElement}>
                                                                    <FormControl margin="normal">
                                                                        <TextField
                                                                            id="First Name"
                                                                            label="First Name"
                                                                            variant="outlined"
                                                                        />
                                                                    </FormControl>
                                                                        
                                                                    <FormControl margin="normal">
                                                                        <TextField
                                                                            id="Last Name"
                                                                            label="Last Name"
                                                                            variant="outlined"
                                                                        />
                                                                    </FormControl>

                                                                    <FormControl margin="normal">
                                                                        <TextField
                                                                            id="ssn"
                                                                            label="SSN"
                                                                            variant="outlined"
                                                                        />
                                                                    </FormControl>
                                                                </FormGroup>
                                                            </Grid>
                                                            </Grid>
                                                          </React.Fragment>
                                                        : void 0
                                                    }
                                                    </div>
                                                  : void 0
                                                }
                                                <div>
                                                <Button
                                                    size="small"
                                                    disabled={activeStep === 0}
                                                    onClick={handleBack}
                                                    className={classes.button}
                                                >
                                                    Back
                                                </Button>
                                                <Button
                                                    size="small"
                                                    variant="contained"
                                                    color="primary"
                                                    onClick={(index === 0 && ssn.length !== 11) ? handleShowError : handleNext}
                                                    className={classes.button}
                                                >
                                                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                                </Button>
                                                </div>
                                            </div>
                                            </StepContent>
                                        </Step>
                                        ))}
                                    </Stepper>
                                    {activeStep === steps.length && (
                                        <div>
                                        <Typography>All steps completed - you&apos;re finished</Typography>
                                        <Button onClick={handleReset} className={classes.button}>
                                            Reset
                                        </Button>
                                        </div>
                                    )}
                                    </div>
                                    </Fade>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    );
}
