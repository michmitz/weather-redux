/* eslint-disable max-len */
export const convertToFahrenheit = (celsius) => {
  const fahrenheit = celsius * 9 / 5 + 32;

  return Math.floor(fahrenheit);
};

export const getWeather = async(search) => {
  return fetch(`https://api.weatherbit.io/v2.0/forecast/daily?city=${search}&key=${process.env.REACT_APP_WEATHERBIT_KEY}`)
    .then(res => res.json())
    .then(json => json.data.map(date => ({
      date: date.datetime,
      currentTemp: convertToFahrenheit(date.temp),
      hi: convertToFahrenheit(date.high_temp),
      lo: convertToFahrenheit(date.low_temp),
      description: date.weather.description
    })));
};


