import reducer from './weatherReducer';
// eslint-disable-next-line max-len
const { setSearch, setLoading, setWeather } = require('../actions/weatherActions');


describe('weather reducer', () => {
  it('handles the SET_SEARCH action', () => {
    const state = {
      search: '',
      loading: true,
      weather: []
    };

    const action = setSearch('Portland, OR');

    const newState = reducer(state, action);

    expect(newState).toEqual({
      search: 'Portland, OR',
      loading: true,
      weather: []
    });
  });

  it('handles the SET_LOADING action', () => {
    const state = {
      search: '',
      loading: true,
      weather: []
    };

    const action = setLoading(false);

    const newState = reducer(state, action);

    expect(newState).toEqual({
      search: '',
      loading: false,
      weather: []
    });
  });

  it('handles the SET_WEATHER action', () => {
    const state = {
      search: '',
      loading: true,
      weather: []
    };

    const action = setWeather([
      { day: 1, city: 'Portland, OR', weather: 50 },
      { day: 2, city: 'Portland, OR', weather: 50 }
    ]);

    const newState = reducer(state, action);

    expect(newState).toEqual({
      search: '',
      loading: true,
      weather: [
        { day: 1, city: 'Portland, OR', weather: 50 },
        { day: 2, city: 'Portland, OR', weather: 50 }
      ]
    });
  });

});
