/* eslint-disable max-len */
import React from 'react';
import headerStyles from './Header.css';

export default function Header() {
  return (
    <header>
      Forecast...
      <div id="heart">
        <iframe src="https://giphy.com/embed/1AeRHdZ17pvIiWYleY" frameBorder="0" className={headerStyles.gif} allowFullScreen></iframe>
      </div>
    </header>
  );
}
