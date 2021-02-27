/* eslint-disable max-len */
const date = require('date-and-time');
const ordinal = require('date-and-time/plugin/ordinal');
const day_of_week = require('date-and-time/plugin/day-of-week');

date.plugin(ordinal);
date.plugin(day_of_week);

//Creates an array of 29 days from today (standard lunar cycle)
function createLunarMonth(today) {
  let days = 0;
  const dateArr = [];

  do{
    days++;
    dateArr.push(date.addDays(today, days));
  } while(days <= 29);

  return dateArr;
}

//Gets the moon phase for the exact date
function getMoonPhase(day, month, year)
{
  let c;
  let e;
  let jd;
  let b;
  const moonPhases = ['New Moon', 'Waxing Crescent Moon', 'Quarter Moon', 'Waxing Gibbous Moon', 'Full Moon', 'Waning Gibbous Moon', 'Last Quarter Moon', 'Waning Crescent Moon'];

  if(month < 3) {
    year--;
    month += 12;
  }

  ++month;

  c = 365.25 * year;

  e = 30.6 * month;

  jd = c + e + day - 694039.09; //jd is total days elapsed

  jd /= 29.5305882; //divide by the moon cycle

  b = parseInt(jd); //int(jd) -> b, take integer part of jd

  jd -= b; //subtract integer part to leave fractional part of original jd

  b = Math.round(jd * 8); //scale fraction from 0-8 and round

  if(b >= 8) {
    b = 0; //0 and 8 are the same so turn 8 into 0
  }

  // 0 => New Moon
  // 1 => Waxing Crescent Moon
  // 2 => Quarter Moon
  // 3 => Waxing Gibbous Moon
  // 4 => Full Moon
  // 5 => Waning Gibbous Moon
  // 6 => Last Quarter Moon
  // 7 => Waning Crescent Moon
    
  return moonPhases[b];
}

//Formats the date for a specific day into an object I prefer
//2021-02-27T06:19:27.826Z => { dayOfWeek: 'Sun', dateWithOrd: '27th', month: 'Mar' }
function formatDateForDisplay(day) {
  const dayOfWeek = date.format(day, 'ddd', 'DDD MM YYYY');
  const dateWithOrd = date.format(day, 'DDD');
  const month = date.format(day, 'MMM', 'DDD MM YYYY');

  const result = { dayOfWeek, dateWithOrd, month };

  return result;
}

//Formats date to be passed into the moon phase function
function formatForMoonPhase(time) {
  const formattedDate = date.format(time, 'D MM YYYY');

  const dateArr = formattedDate.split(' ');
    
  const day = Number(dateArr[0]);
  const month = Number(dateArr[1]);
  const year = Number(dateArr[2]);

  return { day, month, year };
}

//Returns an array of objects with date formatted for display on website (Mon Mar 28th) and moon phases for each date for a full lunar cycle (29 days)
export const getPhasesForMonth = () => {
  const today = new Date();
  const calendar = createLunarMonth(today);
  const moonPhases = []; 

  calendar.forEach(date => {
    const formattedTime = formatForMoonPhase(date);
    const dateToDisplay = formatDateForDisplay(date);
    const moonPhase = getMoonPhase(formattedTime.day, formattedTime.month, formattedTime.year);

    moonPhases.push({ dateToDisplay, moonPhase });
  });

  return moonPhases;
};





