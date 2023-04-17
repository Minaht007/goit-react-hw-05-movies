import { useState } from 'react';
import Style from '../Style/Style.module.css';

export const SearchMovie = ({ onSubmit }) => {
  // const [searchParams] = useSearchParams();
  const [qwery, setQwery] = useState(' ');
  const formSubmit = e => {
    e.preventDefault();

    onSubmit(qwery);
    setQwery(' ');
  };

  return (
    <form onSubmit={formSubmit} className={Style.search}>
      <input
        type="text"
        value={qwery}
        onChange={e => setQwery(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};
