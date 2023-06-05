import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Services from '../../components/Services/Services';
import MovieList from '../../components/MovieList/MovieList';
import SearchForm from '../../components/SearchForm/SearchForm';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  const handleSearch = async query => {
    if (query === '') {
      toast.error('Please enter a movie name');
    } else {
      try {
        setSearchParams({ query });
        const data = await Services.searchMovies(query);
        setMovies(data.results);
      } catch (error) {
        console.log('Error:', error);
      }
    }
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
