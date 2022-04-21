import { useQuery } from 'react-query';
import Loader from 'components/Loader/Loader';

import MovieCard from './MovieCard';
import { getFavoriteMovies } from '../../api/movies/movies';
import styles from './MoviesListContainer.module.css';

const MyMovieList = (): JSX.Element => {
  const { data, isLoading, refetch } = useQuery(['personal-movies'], () => getFavoriteMovies(1));

  if (isLoading) {
    return <Loader />;
  }

  const favortesHandler = () => {
    refetch();
  };

  return (
    <div className={styles.main}>
      {data?.docs.map((movie) => (
        <MovieCard key={movie.movieId} {...movie} favorite={favortesHandler} />
      ))}
    </div>
  );
};

export default MyMovieList;
