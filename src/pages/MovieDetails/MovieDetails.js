import { useEffect, useState } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import { getMoviesById } from 'components/Fetch/Fetch';
import { Link, useNavigate } from 'react-router-dom';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [film, setFilm] = useState(null);
  useEffect(() => {
    getMoviesById(movieId)
      .then(results => setFilm(results))
      .catch(eror => console.log(eror));
  }, [movieId]);

  // const location = useLocation;
  // const goBack = location.state?.from ?? '/';
  const navigate = useNavigate();
  const GoBack = () => navigate(-1);
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
        <button onClick={() => GoBack()}>GoGo</button>
        {/* <Link to={goBack}>Go Back</Link> */}
      </header>

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
