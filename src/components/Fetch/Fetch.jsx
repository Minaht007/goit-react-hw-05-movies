import axios from 'axios';

const ApiKey = '008ad61af513926e956f6d36edd6996c';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getTranding = async () => {
  const response = await axios.get(`trending/all/day?api_key=${ApiKey}`);
  return response.data;
};

export const getMoviesByWord = async name => {
  const response = await axios.get(
    `search/movie?api_key=${ApiKey}&language=en-US&query=${name}&page=1&include_adult=false`
  );
  return response.data;
};

export const getMoviesById = async id => {
  const response = await axios.get(
    `/movie/${id}?api_key=${ApiKey}&language=en-US`
  );
  return response.data;
};

export const getMoviesByCast = async id => {
  const response = await axios.get(
    `/movie/${id}/credits?api_key=${ApiKey}&language=en-US`
  );
  return response.data;
};
