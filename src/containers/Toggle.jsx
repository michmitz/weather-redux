/* eslint-disable max-len */
import React, { useState } from 'react';
import background from '../styles/auroraBackground.css';
import Header from '../components/app/Header/Header';
import styles from '../styles/styles.css';
import MoonCalendarContainer from './MoonCalendarContainer';
import WeatherContainer from './WeatherCarouselContainer';

export default function ToggleTheme() {
  const [chosenTheme, setTheme] = useState('weather');

  function handleThemeChange(theme) {
    setTheme(theme);
  }

  return (
    <>
      <Header chosenTheme={chosenTheme} onChange={handleThemeChange} />
      {
        chosenTheme === 'weather' ? <WeatherContainer /> : <MoonCalendarContainer />
      }
    </>
  );
}
