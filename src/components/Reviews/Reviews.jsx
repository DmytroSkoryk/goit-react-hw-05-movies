import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Services from '../../Services/Services';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const reviewsData = await Services.fetchReviews(movieId);
        setReviews(reviewsData.results);
      } catch (error) {
        console.log('Error:', error);
      }
    };
    fetchReviews();
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
