// eslint-disable-next-line max-len
import { SET_LOADING, SET_SEARCH, SET_WEATHER } from '../actions/weatherActions';

const initialState = {
  search: '',
  loading: false,
  weather: []
};
  
export default function reducer(state = initialState, action) {
  switch(action.type) {
    case SET_SEARCH:
      return { ...state, search: action.payload };
    case SET_LOADING:
      return { ...state, loading: action.payload };
    case SET_WEATHER:
      return { ...state, weather: action.payload };
    default:
      return state;
  } 
}
