import React from 'react';
import background from '../styles/auroraBackground.css';
import DayCarousel from '../components/app/DayCarousel/DayCarousel';
import CityForm from '../components/app/CityForm/CityForm';
import Header from '../components/app/Header/Header';

export default function BackgroundContainer() {
  return (
    <div className={background.backgroundContainer}>
      <div className={background.customBackground}></div>
      <div className={background.auroralStars}></div>
      <div className={background.componentContainer}>
        <Header />
        <CityForm />
        <DayCarousel />
      </div>
    </div>
  );
}

