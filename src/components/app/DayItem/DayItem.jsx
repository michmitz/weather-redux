import React from 'react';
import PropTypes from 'prop-types';

const DayItem = ({ date, currentTemp, hi, lo, description }) => (
  <div data-testid="day-div">
    <h2>Date: {date}</h2>
    <h3>Current Temp: {currentTemp}</h3>
    <p>Hi: {hi}</p>
    <p>Lo: {lo}</p>
    <p>Description: {description}</p>
  </div> 
);

DayItem.propTypes = {
  date: PropTypes.string.isRequired,
  currentTemp: PropTypes.number.isRequired,
  hi: PropTypes.number.isRequired,
  lo: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired
};

export default DayItem;

