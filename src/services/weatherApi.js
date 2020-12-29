/* eslint-disable max-len */
import { parseDate, currentTempDisplay } from './parsingFunctions';

export const getWeather = async(search) => {
  return fetch(`https://api.weatherbit.io/v2.0/forecast/daily?city=${search}&key=${process.env.REACT_APP_WEATHERBIT_KEY}&units=I`)
    .then(res => res.json())
    .then(json => json.data.map(date => ({
      date: parseDate(date.datetime),
      currentTemp: currentTempDisplay((date.datetime), (date.temp)),
      hi: date.high_temp,
      lo: date.low_temp,
      description: date.weather.description,
      imgCode: date.weather.code
    })));
};


