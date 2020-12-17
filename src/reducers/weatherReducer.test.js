import reducer from './weatherReducer';
const { setSearch } = require('../actions/weatherActions');


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

});
