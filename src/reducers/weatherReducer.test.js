import reducer from './weatherReducer';
const { setSearch, setLoading } = require('../actions/weatherActions');


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

});
