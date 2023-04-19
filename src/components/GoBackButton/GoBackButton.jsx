import { useNavigate } from 'react-router-dom';

// const location = useLocation;
// export const goBack = location.state?.from ?? '/';
const navigate = useNavigate;
export const GoBack = () => navigate(-1);
