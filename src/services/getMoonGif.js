export const getMoonGif = (moonPhase) => {
  if(moonPhase === 'New Moon') {
    return 'new-moon.gif';
  } else if(moonPhase === 'Waxing Crescent Moon') {
    return 'crescent.gif';
  } else if(moonPhase === 'Quarter Moon') {
    return 'half-moon.gif';
  } else if(moonPhase === 'Waxing Gibbous Moon') {
    return 'half-moon.gif';
  } else if(moonPhase === 'Full Moon') {
    return 'full-moon.gif';
  } else if(moonPhase === 'Waning Gibbous Moon') {
    return 'half-moon.gif';
  } else if(moonPhase === 'Last Quarter Moon') {
    return 'half-moon.gif';
  } else if(moonPhase === 'Waning Crescent Moon') {
    return 'crescent.gif';
  }
};
