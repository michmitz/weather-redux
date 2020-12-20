import React from 'react';
import PropTypes from 'prop-types';

const DayItem = ({ date, hi, lo, description }) => {

  return <div data-testid="day-div">
    <h2>Date:{date}</h2>
    <h3>Hi: {hi}</h3>
    <h3>Lo: {lo}</h3>
    <p>{description}</p>
  </div>;
};

DayItem.propTypes = {
  date: PropTypes.string.isRequired,
  hi: PropTypes.number.isRequired,
  lo: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired
};

export default DayItem;

