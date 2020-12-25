/* eslint-disable max-len */
import React from 'react';
import styles from '../../styles/styles.css';
import CityForm from './CityForm/CityForm';
import DayCarousel from './DayCarousel/DayCarousel';
import Header from './Header/Header';

export default function App() {
  return (
    <main>
      <Header />
      <CityForm />
      <DayCarousel />
    </main>
  );
}

