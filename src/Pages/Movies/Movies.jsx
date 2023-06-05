import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import 'react-toastify/dist/ReactToastify.css';
import Services from '../../Services/Services';
import MovieList from '../../components/MovieList/MovieList';
import SearchForm from '../../components/SearchForm/SearchForm';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  const handleSearch = query => {
    setSearchParams({ query });
  };

  useEffect(() => {
    if (!query) return;
    const fetchData = async () => {
      try {
        const data = await Services.searchMovies(query);
        setMovies(data.results);
      } catch (error) {
        console.log('Error:', error);
      }
    };
    fetchData();
  }, [query]);

  return (
    <div>
      <SearchForm onSubmit={handleSearch} />
      <MovieList movies={movies} />
    </div>
  );
};

Movies.propTypes = {
  query: PropTypes.string,
};

export default Movies;
