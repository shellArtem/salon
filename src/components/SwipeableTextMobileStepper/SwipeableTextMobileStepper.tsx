import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { useMediaQuery } from '@mui/material';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    // label: 'San Francisco – Oakland Bay Bridge',
    imgPath:
      '/1.jpg',
  },
  {
    // label: 'Bird',
    imgPath:
      '/2.jpg',
  },
  {
    // label: 'Bali, Indonesia',
    imgPath:
      '/3.jpg',
  },
  {
    // label: 'Goč, Serbia',
    imgPath:
      '/4.jpg',
  },
  {
    // label: 'Bird',
    imgPath:
      '/5.jpg',
  },
  {
    // label: 'Bali, Indonesia',
    imgPath:
      '/6.jpg',
  },
  {
    // label: 'Bird',
    imgPath:
      '/7.jpg',
  },
  {
    // label: 'Bali, Indonesia',
    imgPath:
      '/8.jpg',
  },
];

function SwipeableTextMobileStepper() {

  const isMobile = useMediaQuery('(max-width:480px)');
  
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: 800, flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'background.default',
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        
        }}
      >
        {/* <Typography>{images[activeStep].label}</Typography> */}
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: isMobile? 255 : 455,
                  display: 'block',
                  maxWidth: 800,
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
      sx={{
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
      
      }}
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
}

export default SwipeableTextMobileStepper;