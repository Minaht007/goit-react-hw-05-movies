import { useNavigate, useLocation } from 'react-router-dom';

// const location = useLocation;
// export const goBack = location.state?.from ?? '/';
export const GoBack = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const handlGoBack = () => {
    navigate(location?.state?.from ?? '/');
  };
  return <button onClick={handlGoBack}>Go Back</button>;
};
