import React from 'react';
import ReactCardCarousel from 'react-card-carousel';
import dayCarouselStyles from './DayCarousel.css';
import { useSelector } from 'react-redux';
import DayCarouselItem from '../DayCarouselItem/DayCarouselItem';

const DayCarousel = () => {
  const forecast = useSelector(state => state.weather);
  const loading = useSelector(state => state.loading);

  if(loading) {
    return <h1 className={dayCarouselStyles.loading}>i'm loading!</h1>;
  }

  const dateElements = forecast.map(date => (
    <div key={date.date} className={dayCarouselStyles.card}>
      <DayCarouselItem {...date} />
    </div>
  ));
  
  return (
    <div className={dayCarouselStyles.container}>
      <ReactCardCarousel autoplay={true} autoplay_speed={7000} spread={'wide'}>
        {dateElements}
      </ReactCardCarousel>
    </div>
  );
};

export default DayCarousel;
