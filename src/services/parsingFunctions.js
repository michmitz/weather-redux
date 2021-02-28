/* eslint-disable max-len */
const date = require('date-and-time');
const ordinal = require('date-and-time/plugin/ordinal');
const day_of_week = require('date-and-time/plugin/day-of-week');

date.plugin(ordinal);
date.plugin(day_of_week);


export const formatDateForWeatherDisplay = day => {
  const reformattedDay = new Date(`${day} 00:00`);

  const dayOfWeek = date.format(reformattedDay, 'ddd', 'DDD MM YYYY');
  const dateWithOrd = date.format(reformattedDay, 'DDD');
  const month = date.format(reformattedDay, 'MMM', 'DDD MM YYYY');

  const result = [dayOfWeek, dateWithOrd, month];

  return result;
};

