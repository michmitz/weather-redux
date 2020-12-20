import React from 'react';
import DayList from './DayList/DayList';
import CityForm from './CityForm/CityForm';
import Header from './Header/Header';

export default function App() {
  return (
    <main>
      <Header />
      <CityForm />
      <DayList />
    </main>
  );
}

