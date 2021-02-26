/* eslint-disable max-len */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather, setSearch } from '../../../actions/weatherActions';
import styles from '../../../styles/styles.css';
import formStyles from './CityForm.css';

const CityForm = () => {
  const dispatch = useDispatch();
  const search = useSelector(state => state.search);
  
  const handleChange = ({ target }) => {
    dispatch(setSearch(target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(fetchWeather(search));
  };

  return (
    <div className={formStyles.container}>
      <div id="heart">
        <img src={'/assets/rainbow.gif'} />
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" className={formStyles.cityField} id="nme" required autoComplete="off" onChange={handleChange} />
        <label htmlFor="nme"><span>Enter a city and state...</span></label>
        <button className={formStyles.submitButton}>submit</button>
      </form>
    </div>
  );
};

export default CityForm;
