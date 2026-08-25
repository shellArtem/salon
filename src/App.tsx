/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck
import './App.css';
import ResponsiveAppBar from './components/ResponsiveAppBar/ResponsiveAppBar';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import StickyCallButton from './components/StickyCallButton/StickyCallButton';
import { Routes, Route } from 'react-router-dom';
import MenHaircut from './components/MenHaircuts/MenHaircuts';
import Home from './components/Home/Home';
import WomenHaircut from './components/WomenHaircut/WomenHaircut';
import Coloring from './components/Coloring/Coloring';
import { useMediaQuery } from '@mui/material';

function App() {
  const isMobile = useMediaQuery('(max-width:480px)');

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
      {isMobile ? null : <ScrollToTop />}
      <StickyCallButton />
    </>
  );
}

export default App;
