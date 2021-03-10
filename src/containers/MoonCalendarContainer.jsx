/* eslint-disable max-len */
import React from 'react';
import background from '../styles/auroraBackground.css';
import MoonPhaseCarousel from '../components/app/MoonPhaseCarousel/MoonPhaseCarousel';
import Header from '../components/app/Header/Header';
import styles from '../styles/styles.css';

export default function MoonCalendarContainer() {
  return (
    <div className={`${background.backgroundContainer} ${styles.fadeInAndOut}`}>
      <div className={background.customBackground}></div>
      <div className={background.auroralStars}></div>
      <div className={background.auroralStarsBlinking}></div>
      <div className={background.auroralStarsBlinkingBig}></div>
      <div className={styles.componentContainer}>
        <div className={styles.contentContainer}>
          <MoonPhaseCarousel />
        </div>
      </div>
    </div>
  );
}


