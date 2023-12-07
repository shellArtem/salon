import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { useMediaQuery } from '@mui/material';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function ImgMediaCard({ service, description, img, alt, price }: any) {
  const isMobile = useMediaQuery('(max-width:480px)');

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Card sx={{ maxWidth: 345, height: 800 }} >
        <CardMedia
          component="img"
          alt={alt}
          height="340"
          image={img}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {service}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            style={{ height: "250px" }}
          >
            {description}
          </Typography>
        </CardContent>
        <CardActions
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "end",
          }}
        >
          {/* <Button size="small">Share</Button> */}
          <Button size="small" onClick={handleClickOpen}>Узнать цены</Button>
        </CardActions>
      </Card>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle style={{textAlign: 'center', fontFamily: "'Comfortaa', sans-serif", fontSize: isMobile? '30px' : '40px'}}>{service}</DialogTitle>
        <DialogContent>
          <DialogContentText 
          id="alert-dialog-slide-description"
          fontSize={isMobile? 15 : 30}
          >
            {price}
            
          </DialogContentText>
        </DialogContent>
        <DialogActions style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "end",
          }}>
          <Button onClick={handleClose}>Закрыть</Button>
          {/* <Button onClick={handleClose}>Agree</Button> */}
        </DialogActions>
      </Dialog>
    </>
  );
}
