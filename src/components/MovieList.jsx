import { Link, useLocation } from 'react-router-dom';
import Style from '../components/Style/Style.module.css';

export const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul className={Style.movie}>
      {movies.map(({ id, poster_path }) => (
        <li className={Style.movielist_list} key={id}>
          {' '}
          <Link to={`/movies/${id}`} state={{ from: location }}>
            <img
              style={{ width: '400px' }}
              src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
              alt="#"
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};
