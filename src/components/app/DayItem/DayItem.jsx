import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../../styles/styles.css';
import dayStyles from './DayItem.css';

const DayItem = ({ date, currentTemp, hi, lo, description }) => (
  <div className={dayStyles.dayDiv} data-testid="day-div">
    <h2 className={dayStyles.date}>{date}</h2>
    <h3 className={dayStyles.currentTemp}>Current Temp: {currentTemp}˚</h3>
    <p>Hi: {hi}˚</p>
    <p>Lo: {lo}˚</p>
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

