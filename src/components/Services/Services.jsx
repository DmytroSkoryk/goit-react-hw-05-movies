import PropTypes from 'prop-types';

const BASE_URL = 'https://api.themoviedb.org/3/movie';
const API_KEY = 'fd5362f1dc10a3ce9a04b5e02c85fcbb';

async function fetchMovieDetails(movieId) {
  try {
    const response = await fetch(`${BASE_URL}/${movieId}?api_key=${API_KEY}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Error:', error);
    throw error;
  }
}

async function fetchCastDetails(movieId) {
  try {
    const response = await fetch(
      `${BASE_URL}/${movieId}/credits?api_key=${API_KEY}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Error:', error);
    throw error;
  }
}

async function fetchRelease(movieId) {
  try {
    const response = await fetch(
      `${BASE_URL}/${movieId}/release_dates?api_key=${API_KEY}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Error:', error);
    throw error;
  }
}

async function fetchReviews(movieId) {
  try {
    const response = await fetch(
      `${BASE_URL}/${movieId}/reviews?api_key=${API_KEY}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Error:', error);
    throw error;
  }
}

async function fetchTrendingMovies() {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Error:', error);
    throw error;
  }
}

async function searchMovies(query) {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${API_KEY}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Error:', error);
    throw error;
  }
}

const Services = {
  fetchMovieDetails,
  fetchCastDetails,
  fetchRelease,
  fetchReviews,
  fetchTrendingMovies,
  searchMovies,
};

Services.fetchMovieDetails.propTypes = {
  movieId: PropTypes.string.isRequired,
};

Services.fetchCastDetails.propTypes = {
  movieId: PropTypes.string.isRequired,
};

Services.fetchRelease.propTypes = {
  movieId: PropTypes.string.isRequired,
};

Services.fetchReviews.propTypes = {
  movieId: PropTypes.string.isRequired,
};

Services.searchMovies.propTypes = {
  query: PropTypes.string.isRequired,
};

export default Services;
