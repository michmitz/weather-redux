/* eslint-disable max-len */
import React from 'react';
import DayItem from '../DayItem/DayItem';
import { useSelector } from 'react-redux';
import styles from '../../../styles/styles.css';

const DayList = () => {
  const forecast = useSelector(state => state.weather);
  const loading = useSelector(state => state.loading);

  if(loading) {
    return <h1>Loading...</h1>;
  }

  const dateElements = forecast.map(date => (
    <li key={date.date}>
      <DayItem {...date} />
    </li>
  ));

  return (
    <ul>
      {dateElements}
    </ul>
  );
};

export default DayList;
