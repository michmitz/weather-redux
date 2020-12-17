import { SET_SEARCH } from '../actions/weatherActions';

const initialState = {
  search: '',
  loading: true,
  weather: []
};
  
export default function reducer(state = initialState, action) {
  switch(action.type) {
    case SET_SEARCH:
      return { ...state, search: action.payload };
    default:
      return state;
  } 
}
