import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from './Movies.module.css';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const query = searchParams.get('query');
  const location = useLocation();

  const handleSearch = () => {
    if (searchQuery.trim().toLowerCase() === '') {
      toast.error('Please enter a movie name');
    } else {
      setSearchParams({ query: searchQuery.trim().toLowerCase() });
      setSearchQuery('');
    }
  };

  const handleInputChange = event => {
    setSearchQuery(event.target.value);
  };

  const handleKeyPress = event => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  useEffect(() => {
    if (query) {
      fetch(
        `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=fd5362f1dc10a3ce9a04b5e02c85fcbb`
      )
        .then(res => res.json())
        .then(data => {
          setMovies(data.results);
        })
        .catch(error => {
          console.log('Error:', error);
        });
    } else {
      setMovies([]);
    }
  }, [query]);

  return (
    <div className={css.searchForm}>
      <input
        type="text"
        placeholder="Enter movie name..."
        value={searchQuery}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
      />
      <button onClick={handleSearch}>Search</button>

      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>

      <ToastContainer />
    </div>
  );
};

Movies.propTypes = {
  query: PropTypes.string,
};

export default Movies;
