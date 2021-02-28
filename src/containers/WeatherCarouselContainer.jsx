/* eslint-disable max-len */
import React from 'react';
import background from '../styles/auroraBackground.css';
import DayCarousel from '../components/app/DayCarousel/DayCarousel';
import CityForm from '../components/app/CityForm/CityForm';
import Header from '../components/app/Header/Header';
import styles from '../styles/styles.css';

export default function MoonCalendarContainer() {
  return (
    <div className={background.backgroundContainer}>
      <div className={background.customBackground}></div>
      <div className={background.auroralStars}></div>
      <div className={background.auroralStarsBlinking}></div>
      <div className={background.auroralStarsBlinkingBig}></div>
      <div className={styles.componentContainer}>
        <Header />
        <div className={styles.contentContainer}>
          <CityForm />
          <DayCarousel />
        </div>
      </div>
    </div>
  );
}


