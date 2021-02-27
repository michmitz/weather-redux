/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import dayCarouselItemStyles from '../DayCarouselItem/DayCarouselItem.css';
import { getMoonGif } from '../../../services/getMoonGif';

const MoonCarouselItem = ({ dateToDisplay, moonPhase }) => {
  const imgSrc = getMoonGif(moonPhase);
  
  return (
    <div className={dayCarouselItemStyles.dayDiv} data-testid="day-div">
      <h2 className={dayCarouselItemStyles.date}>{dateToDisplay.dayOfWeek}, {dateToDisplay.month} {dateToDisplay.dateWithOrd}</h2>
      <img src={`/assets/moon-gifs/${imgSrc}`}/>
      <p>{moonPhase}</p>
    </div>
  );
};

MoonCarouselItem.propTypes = {
  dateToDisplay: PropTypes.object.isRequired,
  moonPhase: PropTypes.number.isRequired
};

export default MoonCarouselItem;
