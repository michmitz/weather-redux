import React from 'react';
import background from '../styles/auroraBackground.css';
import DayCarousel from '../components/app/DayCarousel/DayCarousel';
import HeaderForm from './HeaderForm';

export default function BackgroundContainer() {
  return (
    <div className={background.backgroundContainer}>
      <div className={background.customBackground}></div>
      <div className={background.auroralStars}></div>
      <div className={background.componentContainer}>
        <HeaderForm />
        <DayCarousel />
      </div>
    </div>
  );
}

