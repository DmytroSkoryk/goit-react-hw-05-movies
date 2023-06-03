import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=fd5362f1dc10a3ce9a04b5e02c85fcbb`
    )
      .then(res => res.json())
      .then(data => {
        setCast(data.cast);
      })
      .catch(error => {
        console.log('Error:', error);
      });
  }, [movieId]);

  if (!cast) {
    return null;
  }

  return (
    <ul>
      {cast.map(actor => (
        <li key={actor.id}>
          <img
            src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`}
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
