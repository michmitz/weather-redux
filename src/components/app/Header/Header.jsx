/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import headerStyles from './Header.css';

export default function Header({ chosenTheme, onChange }) {
  
  function handleThemeChange(e) {
    onChange(e.target.value);
  }

  return (
    <header>
      <h1>
        {chosenTheme === 'weather' ? 'Weather!' : 'Upcoming moon phases'}
      </h1>

      <select onChange={handleThemeChange} value={chosenTheme}>
        <option key="weather" value="weather">weather</option>
        <option key="moon" value="moon">moon phases</option>
      </select>

    </header>
  );
}

Header.propTypes = {
  chosenTheme: PropTypes.string,
  onChange: PropTypes.func
};



