import * as React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useMediaQuery } from '@mui/material';


export default function BasicCard({img, description, alt} : any) {

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
    <Card sx={{
      width: '100%',
      maxWidth: 320,
      height: 'auto',
      borderRadius: '12px',
      mx: 'auto',
    }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          <img src={img} alt={alt} loading="lazy" style={{ maxWidth: 64, height: 'auto' }} />
        </Typography>
        <Typography
          variant="body2"
          sx={{ fontSize: isMobile ? 13 : 14, lineHeight: 1.5 }}
        >
          {description}
        </Typography>
      </CardContent>
      <CardActions
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "end",
      }}>
        <Button onClick={handleClickOpen} size="small">Записаться</Button>
      </CardActions>
    </Card>
    <Dialog
    open={open}
    keepMounted
    onClose={handleClose}
    aria-describedby="alert-dialog-slide-description"
  >
    <DialogTitle style={{textAlign: 'center', fontFamily: "'Comfortaa', sans-serif", fontSize: isMobile? '18px' : '20px'}}></DialogTitle>
    <DialogContent>
      <DialogContentText 
      id="alert-dialog-slide-description"
      fontSize={isMobile? 15 : 18}
      >
        <h2> Вы можете записаться к нам </h2>
        <h3> по телефону: <a href="tel:+79771076625"> 8(977)107-66-25 </a></h3>
        <h3> или через мессенджеры: 
          <a href="https://wa.me/79771076625">
            {" "}
            <WhatsAppIcon />{" "}
          </a>
          <a href="https://t.me/salon_i_like_it">
            {" "}
            <TelegramIcon />{" "}
          </a>

        </h3>
        
      </DialogContentText>
    </DialogContent>
    <DialogActions style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "end",
      }}>
      <Button onClick={handleClose}>Х</Button>
    </DialogActions>
  </Dialog>
  </>
  );
}