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
    <form onSubmit={handleSubmit}>
      <label className={formStyles.cityLabel}>Enter a City and State:
        <textarea onChange={handleChange} placeholder="Portland, OR"></textarea>
      </label>
      <button className={formStyles.submitButton}>Submit</button>
    </form>
  );
};

export default CityForm;
