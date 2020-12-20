/* eslint-disable max-len */
export const getWeather = async(search) => {
  return fetch(`https://api.weatherbit.io/v2.0/forecast/daily?city=${search}&key=${process.env.WEATHERBIT_KEY}`)
    .then(res => res.json())
    .then(json => json.data.map(date => ({
      date: date.datetime,
      currentTemp: date.temp,
      hi: date.high_temp,
      lo: date.low_temp,
      description: date.weather.description
    })));
};
