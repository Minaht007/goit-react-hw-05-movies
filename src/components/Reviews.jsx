import { useEffect, useState } from 'react';
import { getMoviesByReviews } from './Fetch/Fetch';
import { useParams } from 'react-router-dom';

export const Reviews = () => {
  const [review, setReview] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMoviesByReviews(movieId)
      .then(({ results }) => setReview(results))
      .catch(eror => console.log(eror));
  }, [movieId]);

  return (
    <div>
      <ul>
        {review.map(text => (
          <li key={text.id}>{text.mame}</li>
        ))}
      </ul>
    </div>
  );
};
