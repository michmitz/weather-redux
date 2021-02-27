import React from 'react';
import ReactCardCarousel from 'react-card-carousel';
import dayCarouselStyles from '../DayCarousel/DayCarousel.css';
import { useSelector } from 'react-redux';
import MoonCarouselItem from '../MoonCarouselItem/MoonCarouselItem';
import { getPhasesForMonth } from '../../../services/moonApi.js';

const MoonPhaseCarousel = () => {
  const moonCalendar = getPhasesForMonth();
  const loading = useSelector(state => state.loading);

  if(loading) {
    return <h1 className={dayCarouselStyles.loading}>i'm loading!</h1>;
  }

  const moonPhaseElements = moonCalendar.map(date => (
    <div key={date.date} className={dayCarouselStyles.card}>
      <MoonCarouselItem {...date} />
    </div>
  ));
  
  return (
    <div className={dayCarouselStyles.container}>
      <ReactCardCarousel autoplay={true} autoplay_speed={7000} spread={'wide'}>
        {moonPhaseElements}
      </ReactCardCarousel>
    </div>
  );
};

export default MoonPhaseCarousel;
