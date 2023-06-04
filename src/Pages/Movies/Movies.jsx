import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from './Movies.module.css';
import Services from '../../components/Services/Services';
import MovieList from '../../components/MovieList/MovieList';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const query = searchParams.get('query');

  const handleSearch = async () => {
    if (searchQuery.trim().toLowerCase() === '') {
      toast.error('Please enter a movie name');
    } else {
      try {
        setSearchParams({ query: searchQuery.trim().toLowerCase() });
        setSearchQuery('');

        const data = await Services.searchMovies(
          searchQuery.trim().toLowerCase()
        );
        setMovies(data.results);
      } catch (error) {
        console.log('Error:', error);
      }
    }
  };

  const handleInputChange = event => {
    setSearchQuery(event.target.value);
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    handleSearch();
  };

  useEffect(() => {
    const fetchData = async () => {
      if (query) {
        try {
          const data = await Services.searchMovies(query);
          setMovies(data.results);
        } catch (error) {
          console.log('Error:', error);
        }
      } else {
        setMovies([]);
      }
    };

    fetchData();
  }, [query]);

  return (
    <form className={css.searchForm} onSubmit={handleFormSubmit}>
      <input
        type="text"
        placeholder="Enter movie name..."
        value={searchQuery}
        onChange={handleInputChange}
      />
      <button type="submit">Search</button>

      <MovieList movies={movies} />
    </form>
  );
};

Movies.propTypes = {
  query: PropTypes.string,
};

export default Movies;
