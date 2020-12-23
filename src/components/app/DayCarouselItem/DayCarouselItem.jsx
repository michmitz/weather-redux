/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import dayCarouselItemStyles from './DayCarouselItem.css';
import { getGif } from '../../../services/getGif';

const DayCarouselItem = ({ date, currentTemp, hi, lo, description, imgCode }) => {
  const imgSrc = getGif(imgCode);
  
  return (
    <div className={dayCarouselItemStyles.dayDiv} data-testid="day-div">
      <h2 className={dayCarouselItemStyles.date}>{date}</h2>
      <h3 className={dayCarouselItemStyles.currentTemp}>Current Temp: {currentTemp}˚</h3>
      <p>Hi: {hi}˚</p>
      <p>Lo: {lo}˚</p>
      <p>{description}</p>
      <img src={`/assets/${imgSrc}`} alt="partly cloudy" />
    </div>
  );
};

DayCarouselItem.propTypes = {
  date: PropTypes.string.isRequired,
  currentTemp: PropTypes.number.isRequired,
  hi: PropTypes.number.isRequired,
  lo: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  imgCode: PropTypes.number.isRequired
};

export default DayCarouselItem;
