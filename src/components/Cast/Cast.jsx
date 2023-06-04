import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import noPhoto from '../Img/no_image.jpg';
import Services from '../Services/Services';
const Cast = () => {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const castData = await Services.fetchCastDetails(movieId);
        setCast(castData.cast);
      } catch (error) {
        console.log('Error:', error);
      }
    };

    fetchCast();
  }, [movieId]);

  if (!cast) {
    return null;
  }

  return (
    <ul>
      {cast.map(actor => (
        <li key={actor.id}>
          <img
            src={
              actor.profile_path
                ? `https://image.tmdb.org/t/p/w200/${actor.profile_path}`
                : noPhoto
            }
            alt={actor.name}
            width="100"
            height="140"
          />
          <p>{actor.name}</p>
          <p>{actor.character}</p>
        </li>
      ))}
    </ul>
  );
};

export default Cast;
