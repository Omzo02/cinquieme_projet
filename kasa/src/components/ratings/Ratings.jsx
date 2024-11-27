import React from 'react';
import './Ratings.scss';
import greyStar from '../../assets/images/grey_star.png';
import redStar from '../../assets/images/red_star.png';

const Ratings = ({ rating }) => {
  const stars = Array(5)
    .fill(false)
    .map((_, index) => index < rating);

  return (
    <div className="ratings">
      {stars.map((star, index) => (
        <img
          key={index}
          src={star ? redStar : greyStar} // Utilisation des importations
          alt="star"
          className="rating-star"
        />
      ))}
    </div>
  );
};

export default Ratings;
