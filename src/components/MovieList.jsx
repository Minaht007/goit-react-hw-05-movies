import { Link } from 'react-router-dom';
export const MovieList = ({ movies }) => {
  return (
    <ul>
      {movies.map(({ id, poster_path }) => (
        <li key={id}>
          {' '}
          <Link to={`/movies/${id}`}>
            <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} />
          </Link>
        </li>
      ))}
    </ul>
  );
};
