import { Route, Routes, Link } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Movie } from '../pages/Movie';
import { LayOut } from './Layout/Layout';
import { Cast } from './Cast';
import { MovieDetails } from 'pages/MovieDetails/MovieDetails';
import { Reviews } from './Reviews';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'baseline',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movie />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
