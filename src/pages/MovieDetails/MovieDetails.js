import { useEffect, useState } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import { getMoviesById } from 'components/Fetch/Fetch';
import { Link, useLocation } from 'react-router-dom';
import { GoBack } from '../../components/GoBackButton/GoBackButton.jsx';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const [film, setFilm] = useState(null);
  useEffect(() => {
    getMoviesById(movieId)
      .then(results => setFilm(results))
      .catch(eror => console.log(eror));
  }, [movieId]);

  // const location = useLocation;
  // const goBack = location.state?.from ?? '/';

  return (
    <div
      style={{
        displa: 'flex',
        flexDirection: 'column',
        textAlign: 'start',
      }}
    >
      {''}
      <header
        style={{
          textAlign: 'start',
          display: 'flex',
          justifyContent: 'flex-start',
        }}
      >
        {film?.title}
        <GoBack />
        {/* <Link to={goBack}>Go Back</Link> */}
      </header>

      <img
        style={{ width: '200px' }}
        src={`https://image.tmdb.org/t/p/w500/${film?.poster_path}`}
        alt="#"
      />
      <Link
        to={`cast`}
        state={{ from: location?.state }}
        style={{ marginRight: '20px' }}
      >
        Cast
      </Link>
      <Link to={`reviews`} state={{ from: location?.state }}>
        Reviews
      </Link>
      <Outlet />
    </div>
  );
};
