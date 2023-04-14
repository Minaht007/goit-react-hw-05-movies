import { useState, useEffect, useLayoutEffect } from 'react';
import { MovieList } from 'components/MovieList.jsx';

import { getTranding } from '../components/Fetch/Fetch.jsx';

export const Home = () => {
  const [trandMovivies, setTrandingMovies] = useState([]);

  useEffect(() => {
    getTranding()
      .then(({ results }) => setTrandingMovies(results))
      .catch(eror => console.log(eror));
  }, []);
  return <MovieList movies={trandMovivies} />;
};

export default Home;
