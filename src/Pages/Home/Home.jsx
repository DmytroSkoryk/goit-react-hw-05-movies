import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import css from './Home.module.css';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  let count = 0;
  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/trending/movie/day?api_key=fd5362f1dc10a3ce9a04b5e02c85fcbb'
    )
      .then(res => res.json())
      .then(data => {
        setMovies(data.results.slice(0, 20));
      })
      .catch(error => {
        console.log('Error:', error);
      });
  }, []);
  return (
    <div>
      <h1>Trending today</h1>
      {movies.map(movie => (
        <div key={movie.id}>
          {(count += 1)}.{' '}
          <Link
            to={`/movies/${movie.id}`}
            state={{ from: location }}
            className={css.homeLink}
          >
            {movie.title || movie.name}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
