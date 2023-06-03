import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ReleaseDate = () => {
  const { movieId } = useParams();
  const [releaseDate, setReleaseDate] = useState('');

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/release_dates?api_key=fd5362f1dc10a3ce9a04b5e02c85fcbb`
    )
      .then(res => res.json())
      .then(data => {
        const releaseDates = data.results.find(
          item => item.iso_3166_1 === 'US'
        );
        if (releaseDates) {
          setReleaseDate(releaseDates.release_dates[0].release_date);
        }
      })
      .catch(error => {
        console.log('Error:', error);
      });
  }, [movieId]);

  return <span>{releaseDate && releaseDate.substring(0, 4)}</span>;
};

export default ReleaseDate;
