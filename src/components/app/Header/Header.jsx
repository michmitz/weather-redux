/* eslint-disable max-len */
import React from 'react';
import headerStyles from './Header.css';

export default function Header() {
  return (
    <header>
      Forecast...
      <div id="heart">
        <img src={'/assets/rainbow.gif'} />
      </div>
    </header>
  );
}

