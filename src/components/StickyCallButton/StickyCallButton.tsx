import { useMediaQuery } from '@mui/material';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import './StickyCallButton.css';

export default function StickyCallButton() {
  const isMobile = useMediaQuery('(max-width:899px)');

  if (!isMobile) return null;

  return (
    <a href="tel:+79771076625" className="sticky-call-btn" aria-label="Записаться по телефону">
      <LocalPhoneIcon fontSize="small" />
      Записаться
    </a>
  );
}
