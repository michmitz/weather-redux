import React from 'react';
import CityForm from '../components/app/CityForm/CityForm';
import Header from '../components/app/Header/Header';
import headerFormStyles from './HeaderForm.css';

export default function HeaderForm() {
  return (
    <div className={headerFormStyles.container}>
      <Header />
      <CityForm />
    </div>
  );
}
