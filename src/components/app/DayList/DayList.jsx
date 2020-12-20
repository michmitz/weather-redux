import React from 'react';
import DayItem from '../DayItem/DayItem';
import { useSelector } from 'react-redux';

const DayList = () => {
  const forecast = useSelector(state => state.weather);

  const dateElements = forecast.map(date => {
    <li key={date.date}>
      <DayItem {...date} />
    </li>;
  });

  return (
    <ul>
      {dateElements}
    </ul>
  );
};

export default DayList;
