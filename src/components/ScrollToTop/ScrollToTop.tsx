import { useState, useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Fab from '@mui/material/Fab';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Zoom from '@mui/material/Zoom';

const useStyles = makeStyles(() => ({
  root: {
    position: 'fixed',
    bottom: '2rem',
    right: '2rem',
  },
}));

const ScrollToTop = () => {
  const classes = useStyles();
  const [isVisible, setIsVisible] = useState(false);

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    setIsVisible(trigger);
  }, [trigger]);

  return (
    <div className={classes.root}>
      <Zoom in={isVisible}>
        <Fab onClick={handleClick} aria-label="scroll-to-top">
          <ArrowUpwardIcon />
        </Fab>
      </Zoom>
    </div>
  );
};

export default ScrollToTop;