/* eslint-disable max-len */
export const convertToFahrenheit = (celsius) => {
  const fahrenheit = celsius * 9 / 5 + 32;

  return Math.floor(fahrenheit);
};

export const parseDate = (date) => {
  const options = { month: 'short' };
  const month = (new Intl.DateTimeFormat('en-US', options).format(new Date(date)));

  const dateArr = date.split('-');
  const day = Number(dateArr[2]);
  
  
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
