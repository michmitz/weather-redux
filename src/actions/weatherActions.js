import { getWeather } from '../services/weatherApi';

export const SET_SEARCH = 'SET_SEARCH';
export const setSearch = search => ({
  type: SET_SEARCH,
  payload: search
});

export const SET_LOADING = 'SET_LOADING';
export const setLoading = loading => ({
  type: SET_LOADING,
  payload: loading
});

export const SET_WEATHER = 'SET_WEATHER';
export const setWeather = weather => ({
  type: SET_WEATHER,
  payload: weather
});

export const fetchWeather = (search) => dispatch => {
  dispatch(setLoading(true));
  
  getWeather(search)
    .then(weather => {
      dispatch(setWeather(weather));
    })
    .finally(() => dispatch(setLoading(false)));
};

