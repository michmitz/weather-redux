/* eslint-disable max-len */
import { convertToFahrenheit, parseDate, currentTempDisplay } from './parsingFunctions';

export const getWeather = async(search) => {
  return fetch(`https://api.weatherbit.io/v2.0/forecast/daily?city=${search}&key=${process.env.REACT_APP_WEATHERBIT_KEY}`)
    .then(res => res.json())
    .then(json => json.data.map(date => ({
      date: parseDate(date.datetime),
      currentTemp: currentTempDisplay((date.datetime), convertToFahrenheit(date.temp)),
      hi: convertToFahrenheit(date.high_temp),
      lo: convertToFahrenheit(date.low_temp),
      description: date.weather.description,
      imgCode: date.weather.code
    })));
};


