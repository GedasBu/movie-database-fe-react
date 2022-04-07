import { Movie } from 'api/movies/types';
import { RatingStar } from 'components/Icons';
import { NavLink, generatePath } from 'react-router-dom';
import { RouteKey } from 'containers/MainRouter/routes';

import styles from './MovieCard.module.css';

const MovieCard = ({ posterPath, voteAverage, title, releaseDate, movieId }: Movie): JSX.Element => {
  const movieLink = generatePath(RouteKey.Movie, { id: `${movieId}` });

  return (
    <div className={styles.movieCard}>
      <NavLink to={movieLink}>
        <img alt={`${title}-movie-poster`} loading="lazy" src={posterPath}></img>
      </NavLink>

      <div className={styles.movieInfo}>
        <div>
          <RatingStar className={styles.ratingIcon} />
          <b>{voteAverage}</b>
        </div>
        <h3>{title}</h3>
        <b className={styles.releaseDate}>{releaseDate} </b>
      </div>
    </div>
  );
};

export default MovieCard;
