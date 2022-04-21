import { Movie } from 'api/movies/types';
import { RatingStar } from 'components/Icons';
import { NavLink, generatePath } from 'react-router-dom';
import { RouteKey } from 'containers/MainRouter/routes';
import FavoriteIcon from 'components/Favorite/Favorite';
import FavoriteIconRemove from 'components/Favorite/FavoriteRemove';
import { useMutation } from 'react-query';

import { addFavoriteMovie, removeFavoriteMovie } from '../../api/movies/movies';
import { useProfile } from '../../providers/ProfileProvider';
import styles from './MovieCard.module.css';

type FavoriteProps = Movie & { favorite: () => void };

const MovieCard = ({ posterPath, voteAverage, title, releaseDate, movieId, backdropPath, _id, favorite }: FavoriteProps): JSX.Element => {
  const movieLink = generatePath(RouteKey.Movie, { id: `${movieId}` });
  const { isLoggedIn } = useProfile();
  const { mutate: makeMovieFavorite } = useMutation(addFavoriteMovie, { onSuccess: favorite });
  const { mutate: delFavoriteMovie } = useMutation(removeFavoriteMovie, { onSuccess: favorite });

  const favoriteMovieData = {
    movieId,
    title,
    releaseDate,
    backdropPath,
    posterPath,
    voteAverage,
  };

  const addToFavortesHandler = () => {
    makeMovieFavorite(favoriteMovieData);
  };

  const removeFromFavoritesHandler = () => {
    delFavoriteMovie(_id);
  };

  const renderIcon = (isLoggedIn: boolean, _id: string | undefined) => {
    if (!isLoggedIn) return;

    if (_id) {
      return <FavoriteIconRemove onClick={removeFromFavoritesHandler} />;
    }
    if (_id === '') return <FavoriteIcon onClick={addToFavortesHandler} />;
  };

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
        <div className={styles.favorite}>
          <b className={styles.releaseDate}>{releaseDate} </b>
          {renderIcon(isLoggedIn, _id)}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
