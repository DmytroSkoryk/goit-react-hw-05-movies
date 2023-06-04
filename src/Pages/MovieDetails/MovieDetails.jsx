import React, { useState, useEffect, useRef, Suspense } from 'react';
import { Link, useParams, Outlet, useLocation } from 'react-router-dom';
import ReleaseDate from '../../components/ReleaseDate/ReleaseDate';
import css from './MovieDetails.module.css';
import noPhoto from '../../components/Img/no_image.jpg';
import Services from '../../components/Services/Services';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLokationRef = useRef(location.state?.from ?? '/');
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const movieData = await Services.fetchMovieDetails(movieId);
        setMovie(movieData);
      } catch (error) {
        console.log('Error:', error);
      }
    };

    fetchMovie();
  }, [movieId]);

  return (
    <div className={css.movieSection}>
      <button type="button" className={css.backBtn}>
        <Link to={backLinkLokationRef.current} className={css.backBtnText}>
          Go back
        </Link>
      </button>
      {movie && (
        <>
          <div className={css.movieDetails}>
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                  : noPhoto
              }
              alt={movie.title || movie.name}
              className={css.movieImg}
            />
            <div className={css.movieInformation}>
              <h2>
                {movie.title || movie.name} (<ReleaseDate key={movieId} />)
              </h2>
              <p>
                User Score: {(parseFloat(movie.vote_average) * 10).toFixed(0)}%
              </p>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
              <h3>Genres</h3>
              <p>
                {movie.genres &&
                  movie.genres.map(genre => genre.name).join(', ')}
              </p>
            </div>
          </div>
          <div className={css.movieAdditional}>
            <h3>Additional information</h3>
            <ul>
              <li>
                <Link to="cast">Cast</Link>
              </li>
              <li>
                <Link to="rewievs">Rewievs</Link>
              </li>
            </ul>
          </div>

          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </>
      )}
    </div>
  );
};

export default MovieDetails;
