import React, { useState, useEffect } from 'react';
import Services from '../../components/Services/Services';
import MovieList from '../../components/MovieList/MovieList';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchTrendingMovies() {
      try {
        const data = await Services.fetchTrendingMovies();
        setMovies(data.results.slice(0, 20));
      } catch (error) {
        console.log('Error:', error);
      }
    }

    fetchTrendingMovies();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default Home;
