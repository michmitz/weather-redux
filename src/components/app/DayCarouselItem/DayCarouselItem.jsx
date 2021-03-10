/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import dayCarouselItemStyles from './DayCarouselItem.css';
import { getGif } from '../../../services/getGif';

const DayCarouselItem = ({ date, hi, lo, description, imgCode }) => {
  const imgSrc = getGif(imgCode);
  
  return (
    <div className={dayCarouselItemStyles.dayDiv} data-testid="day-div">
      <h2 className={dayCarouselItemStyles.date}>{`${date[0]}, ${date[2]} ${date[1]}`}</h2>
      <p>Hi: {hi}˚</p>
      <p>Lo: {lo}˚</p>
      <p>{description}</p>
      <img src={`/assets/${imgSrc}`} alt={imgSrc} />
    </div>
  );
};

DayCarouselItem.propTypes = {
  date: PropTypes.array.isRequired,
  hi: PropTypes.number.isRequired,
  lo: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  imgCode: PropTypes.number.isRequired
};

export default DayCarouselItem;
