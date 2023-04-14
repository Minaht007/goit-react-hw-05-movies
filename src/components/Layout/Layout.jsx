import { Outlet, Link } from 'react-router-dom';

export const LayOut = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movie</Link>
      </nav>
      <Outlet />
    </>
  );
};
