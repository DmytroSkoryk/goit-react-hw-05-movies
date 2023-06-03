import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=fd5362f1dc10a3ce9a04b5e02c85fcbb`
    )
      .then(res => res.json())
      .then(data => {
        setReviews(data.results);
      })
      .catch(error => {
        console.log('Error:', error);
      });
  }, [movieId]);

  if (reviews === null) {
    return null;
  }

  if (reviews.length === 0) {
    return <p>We don't have any reviews for this movie</p>;
  }

  return (
    <ul>
      {reviews.map(review => (
        <li key={review.id}>
          <p>{review.author}</p>
          <p>{review.content}</p>
        </li>
      ))}
    </ul>
  );
};

export default Reviews;
