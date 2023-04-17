import { useEffect, useState } from 'react';
import { SearchMovie } from 'components/Searchbar/Searchbar';
import { getMoviesByWord } from 'components/Fetch/Fetch';
import { MovieList } from 'components/MovieList';

export const Movie = () => {
  const [qwery, setQwery] = useState(' ');
  const [films, setFilms] = useState([]);
  const handleSubmit = name => {
    setQwery(name);
  };
  useEffect(() => {
    getMoviesByWord(qwery)
      .then(({ results }) => setFilms(results))
      .catch(eror => console.log(eror));
  }, [qwery]);
  return (
    <div>
      <SearchMovie onSubmit={handleSubmit} />
      <MovieList movies={films} />
    </div>
  );
};
