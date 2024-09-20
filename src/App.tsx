/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck
import './App.css';
import SwipeableTextMobileStepper from './components/SwipeableTextMobileStepper/SwipeableTextMobileStepper';
import ResponsiveAppBar from './components/ResponsiveAppBar/ResponsiveAppBar';
import ImgMediaCard from './components/ImgMediaCard/ImgMediaCard';
import Yandex from './components/Yandex/Yandex';
import BasicCard from './components/BasicCard/BasicCard';
import Divider from '@mui/material/Divider';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { manicurePrice, manPrice, womanPrice, colorPrice } from './price';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import { Routes, Route } from 'react-router-dom';
import MenHaircut from './components/ MenHaircuts/MenHaircuts';
import Home from './components/Home/Home';
import WomenHaircut from './components/WomenHaircut/WomenHaircut'
import Coloring from './components/Coloring/Coloring'
import { useMediaQuery } from '@mui/material';
import Footer from './components/Footer/Footer'

import prerender from 'prerender-node';
import { useEffect } from 'react';

function App() {
  const isMobile = useMediaQuery('(max-width:480px)');

  useEffect(() => {
    const fetchPrerenderedPage = async () => {
      await prerender.render({
        uri: '/',
        token: '9K4AjWeqvqw9U8GnCibg',
      });
    };

    fetchPrerenderedPage();
  }, []);

  return (
    <>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/men" element={<MenHaircut />} />
        <Route path="/women" element={<WomenHaircut />} />
        <Route path="/coloring" element={<Coloring />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>
      {isMobile? <span/> : <ScrollToTop />}
      
    </>
  );
}

export default App;
