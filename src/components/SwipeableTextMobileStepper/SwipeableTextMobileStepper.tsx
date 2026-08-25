import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import './SwipeableTextMobileStepper.css';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  { label: 'парикмахерские кресла', imgPath: '/carousel-chairs.jpg' },
  { label: 'рабочее место мастера маникюра', imgPath: '/carousel-manicure.jpg' },
  { label: 'кабинет педикюра', imgPath: '/carousel-pedicure.jpg' },
  { label: 'интерьер парикмахерской', imgPath: '/carousel-corridor.jpg' },
  { label: 'ресепшн', imgPath: '/carousel-reception.jpg' },
  { label: 'парикмахерские инструменты', imgPath: '/carousel-tools.jpg' },
  { label: 'мужская стрижка', imgPath: '/carousel-haircut.jpg' },
  { label: 'маникюрные инструменты', imgPath: '/carousel-nail-tools.jpg' },
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prev) => Math.min(prev + 1, maxSteps - 1));
  };

  const handleBack = () => {
    setActiveStep((prev) => Math.max(prev - 1, 0));
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Box className="carousel">
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 12,
          bgcolor: 'transparent',
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
        }}
      />
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        style={{ width: '100%' }}
      >
        {images.map((step, index) => (
          <div key={step.imgPath} style={{ width: '100%' }}>
            {Math.abs(activeStep - index) <= 2 ? (
              <div className="carousel-slide">
                <img
                  className="carousel-image"
                  src={step.imgPath}
                  alt={step.label}
                  loading={index === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                />
              </div>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        sx={{
          borderBottomLeftRadius: 16,
          borderBottomRightRadius: 16,
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
            Далее
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
            Назад
          </Button>
        }
      />
    </Box>
  );
}

export default SwipeableTextMobileStepper;
