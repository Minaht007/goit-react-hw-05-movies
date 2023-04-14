import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getMoviesByCast } from './Fetch/Fetch';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  console.log(movieId);
  useEffect(() => {
    getMoviesByCast(movieId)
      .then(results => setCast(results.cast))
      .catch(eror => console.log(eror));
  }, [movieId]);
  return (
    <div>
      <ul>
        {cast.map(name => (
          <li key={name.id}>{name.name}</li>
        ))}
      </ul>
    </div>
  );
};
