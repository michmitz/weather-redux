/* eslint-disable max-len */

export const convertToFahrenheit = (celsius) => {
  const fahrenheit = celsius * 9 / 5 + 32;

  return Math.floor(fahrenheit);
};

export const parseDate = (dateString) => {
  const parsedDate = new Date(dateString);

  const monthNames = ['Jan', 'Feb', 'March', 'April', 'May', 'June',
    'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

  const month = monthNames[parsedDate.getMonth()];
  const day = parsedDate.getUTCDate();
  
  const getOrdinalNum = (day) => {
    let selector;

    if(day <= 0) {
      selector = 4;
    } else if((day > 3 && day < 21) || day % 10 > 3) {
      selector = 0;
    } else {
      selector = day % 10;
    }
  
    return day + ['th', 'st', 'nd', 'rd', ''][selector];
  };

  const formattedDay = getOrdinalNum(day);

  const result = `${month} ${formattedDay}`;

  return result;
};

export const currentTempDisplay = (dateString, currentTemp) => {
  const parsedDate = new Date(dateString);
  const date = parsedDate.getDate();

  const todayLong = new Date();
  const today = todayLong.getDate();

  if(today !== date) {
    return false;
  } else return `Current Temp: ${currentTemp}°`;

};
