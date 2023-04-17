import { useEffect, useState } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import { getMoviesById } from 'components/Fetch/Fetch';
import { Link, useLocation } from 'react-router-dom';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [film, setFilm] = useState(null);
  useEffect(() => {
    getMoviesById(movieId)
      .then(results => setFilm(results))
      .catch(eror => console.log(eror));
  }, [movieId]);

  const location = useLocation;
  const goBack = location.state?.from ?? '/';

  return (
    <div
      style={{
        displa: 'flex',
        flexDirection: 'column',
        textAlign: 'start',
      }}
    >
      {''}
      {film?.title}

      <Link to={goBack}>Go Back</Link>

      <img
        style={{ width: '200px' }}
        src={`https://image.tmdb.org/t/p/w500/${film?.poster_path}`}
        alt="#"
      />
      <Link to={`/movies/${movieId}/cast`} style={{ marginRight: '20px' }}>
        Cast
      </Link>
      <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
      <Outlet />
    </div>
  );
};
