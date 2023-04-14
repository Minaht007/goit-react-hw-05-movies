import { useEffect, useState } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import { getMoviesById } from 'components/Fetch/Fetch';
import { Link } from 'react-router-dom';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [film, setFilm] = useState(null);
  useEffect(() => {
    getMoviesById(movieId)
      .then(results => setFilm(results))
      .catch(eror => console.log(eror));
  }, [movieId]);

  return (
    <div>
      {' '}
      <img src={`https://image.tmdb.org/t/p/w500/${film?.poster_path}`} />
      {film?.title}
      <Link to={`/movies/${movieId}/cast`}>Cast</Link>
      <Outlet />
    </div>
  );
};
