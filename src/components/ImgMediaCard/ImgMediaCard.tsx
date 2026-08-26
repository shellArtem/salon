import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { useMediaQuery } from '@mui/material';
import FullscreenImageViewer from '../FullscreenImageViewer/FullscreenImageViewer';
import './ImgMediaCard.css';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function ImgMediaCard({
  service,
  description,
  img,
  alt,
  price,
  fromPrice,
}: any) {
  const isMobile = useMediaQuery('(max-width:480px)');
  const [open, setOpen] = React.useState(false);
  const [viewerOpen, setViewerOpen] = React.useState(false);

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Card
        className="service-card"
        sx={{
          width: '100%',
          maxWidth: 400,
          height: 'auto',
          borderRadius: '12px',
          display: 'flex',
          flexDirection: 'column',
          mx: 'auto',
          overflow: 'hidden',
        }}
      >
        <button
          type="button"
          className="service-card-media-btn"
          aria-label={`Открыть фото: ${service}`}
          onClick={() => setViewerOpen(true)}
        >
          <img
            className="service-card-media"
            src={img}
            alt={alt}
            loading="lazy"
            decoding="async"
          />
          <span className="service-card-media-hint">Нажмите, чтобы рассмотреть</span>
        </button>

        <CardContent sx={{ flexGrow: 1, pb: 1 }}>
          <Typography
            gutterBottom
            variant={isMobile ? 'h6' : 'h5'}
            component="div"
            sx={{ fontFamily: "'Comfortaa', sans-serif" }}
          >
            {service}
          </Typography>
          {fromPrice ? (
            <p className="service-card-price">
              <span className="service-card-price-label">от </span>
              <span className="service-card-price-value">{fromPrice}</span>
              <span className="service-card-price-currency"> ₽</span>
            </p>
          ) : null}
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              fontSize: isMobile ? 13 : 14,
              lineHeight: 1.45,
              fontFamily: "'Comfortaa', sans-serif",
            }}
          >
            {description}
          </Typography>
        </CardContent>
        <CardActions
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'end',
            paddingBottom: 16,
          }}
        >
          <Button size="small" onClick={handleClickOpen}>
            Узнать цены
          </Button>
          <Button size="small" href="tel:+79771076625">
            Записаться
          </Button>
        </CardActions>
      </Card>

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        fullScreen={isMobile}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle
          style={{
            textAlign: 'center',
            fontFamily: "'Comfortaa', sans-serif",
            fontSize: isMobile ? '24px' : '40px',
          }}
        >
          {service}
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-slide-description"
            className="service-price-dialog"
            fontSize={isMobile ? 15 : 22}
          >
            {price}
          </DialogContentText>
        </DialogContent>
        <DialogActions
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'end',
            gap: 8,
          }}
        >
          <Button onClick={handleClose}>Закрыть</Button>
          <Button href="tel:+79771076625" variant="contained" color="inherit">
            Записаться
          </Button>
        </DialogActions>
      </Dialog>

      <FullscreenImageViewer
        src={img}
        alt={alt || service}
        open={viewerOpen}
        onClose={() => setViewerOpen(false)}
      />
    </>
  );
}
