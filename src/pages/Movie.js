import { useEffect, useState } from 'react';
import { SearchForm } from 'components/Searchbar/Searchbar';
import { getMoviesByWord } from 'components/Fetch/Fetch';
import { MovieList } from 'components/MovieList';
import { useNavigate } from 'react-router-dom';
// import { GoBack } from '../components/GoBackButton/GoBackButton.jsx';

export const Movie = () => {
  const [qwery, setQwery] = useState(' ');
  // const [qwery] = useSearchParams;
  const [films, setFilms] = useState([]);
  const handleSubmit = name => {
    setQwery(name);
  };
  useEffect(() => {
    getMoviesByWord(qwery)
      .then(({ results }) => setFilms(results))
      .catch(eror => console.log(eror));
  }, [qwery]);
  const navigate = useNavigate();
  const GoBack = () => navigate(-1);
  return (
    <div>
      <SearchForm onSubmit={handleSubmit} />
      <MovieList movies={films} />
      <button onClick={GoBack}> GO BACK</button>
    </div>
  );
};
