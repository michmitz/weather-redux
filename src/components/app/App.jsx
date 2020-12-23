import React from 'react';
import DayList from './DayList/DayList';
import CityForm from './CityForm/CityForm';
import Header from './Header/Header';
import DayCarousel from './DayCarousel/DayCarousel';

export default function App() {
  return (
    <main>
      <Header />
      <CityForm />
      <DayCarousel />
    </main>
  );
}

