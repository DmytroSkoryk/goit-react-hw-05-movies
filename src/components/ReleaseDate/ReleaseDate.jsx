import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Services from '../../Services/Services';

const ReleaseDate = () => {
  const { movieId } = useParams();
  const [releaseDate, setReleaseDate] = useState('');

  useEffect(() => {
    const fetchReleaseDate = async () => {
      try {
        const data = await Services.fetchRelease(movieId);
        const releaseDates = data.results.find(
          item => item.iso_3166_1 === 'US'
        );
        if (releaseDates) {
          setReleaseDate(releaseDates.release_dates[0].release_date);
        }
      } catch (error) {
        console.log('Error:', error);
      }
    };

    fetchReleaseDate();
  }, [movieId]);

  return <span>{releaseDate && releaseDate.substring(0, 4)}</span>;
};

export default ReleaseDate;
