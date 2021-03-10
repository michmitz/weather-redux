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
      <div className={headerStyles.themeContainer}>
        <h1>
          {chosenTheme === 'weather' ? 'weather!' : 'upcoming moon phases'}
        </h1>

        {
          chosenTheme === 'weather' ? <button className={headerStyles.weatherButton} value="moon" onClick={handleThemeChange}>view moon phases</button>
            : <button className={headerStyles.moonButton} value="weather" onClick={handleThemeChange}>view weather</button>
        }
        
      </div>

    </header>
  );
}

Header.propTypes = {
  chosenTheme: PropTypes.string,
  onChange: PropTypes.func
};



