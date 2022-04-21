import { useQuery } from 'react-query';
import { useState } from 'react';
import { createSearchParams, useSearchParams } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import Pagination from 'components/Pagination/Pagination';

import FilterForm from './FilterForm';
import MovieCard from './MovieCard';
import { getMovies, getFavoriteMovies } from '../../api/movies/movies';
import { getGenres } from '../../api/genres/genres';
import { getSortOptions } from '../..//api/sortOptions/sortOptions';
import styles from './MoviesListContainer.module.css';
import { MovieListFilterValues } from './FilterForm';

const MovieListContainer = (): JSX.Element => {
  const [searchParams, setSearchParams] = useSearchParams();
  const reqPageNumber = searchParams.get('page');
  const [currentPage, setCurrentPage] = useState(parseInt(reqPageNumber ? reqPageNumber : '1'));
  const movieFilter = { title: searchParams.get('title') || '', genres: searchParams.getAll('genres') || [], sort: searchParams.get('sort') || '' };

  const { data, isLoading } = useQuery(['movies', reqPageNumber, movieFilter], () => getMovies(parseInt(reqPageNumber ? reqPageNumber : ''), movieFilter));
  const { data: favortiteMovies, refetch } = useQuery(['personal-movies'], () => getFavoriteMovies(1));
  const { data: genres, isLoading: loadingGenres } = useQuery(['genres'], getGenres);
  const { data: sortOptions, isLoading: loadingSortOptions } = useQuery(['sortOptions'], getSortOptions);

  const sOptions = sortOptions?.map((sortOption) => ({ value: sortOption.code, label: sortOption.name })) || [];
  const gOptions = genres?.map((genre) => ({ value: `${genre.id}`, label: genre.name })) || [];

  const movieList = data?.movies;
  const favoriteMovieList = favortiteMovies?.docs;

  movieList?.map((movie) => {
    movie._id = '';
    favoriteMovieList?.map((favoriteMovie) => {
      if (favoriteMovie.movieId == movie.movieId) {
        movie._id = favoriteMovie._id;
      }
    });
  });

  const filterParams = (params: MovieListFilterValues, page: string) => {
    const updatedParams = Object.assign(
      Object.entries(params).reduce((acc, [k, v]) => (v ? { ...acc, [k]: v } : acc), {}),
      { page: page },
    );
    return updatedParams;
  };

  if (isLoading || loadingGenres || loadingSortOptions) {
    return <Loader />;
  }

  const pageHandler = (page: number) => {
    setCurrentPage(page);
    setSearchParams(filterParams(movieFilter, page.toString()));
  };

  const filterHandler = (values: MovieListFilterValues) => {
    setSearchParams(createSearchParams({ ...values, page: '1' }));
    setCurrentPage(1);
  };

  const resetFilterHandler = () => {
    setSearchParams({ page: '1' });
    setCurrentPage(1);
  };

  const favortesHandler = () => {
    refetch();
  };

  return (
    <>
      <div>
        <FilterForm
          genreOptions={gOptions}
          initialValues={movieFilter}
          sortOptions={sOptions}
          onFilterReset={resetFilterHandler}
          onFilterSubmit={filterHandler}
        />
      </div>
      <div className={styles.main}>
        {data?.movies.map((movie) => (
          <MovieCard key={movie.movieId} {...movie} favorite={favortesHandler} />
        ))}
      </div>
      <div>
        <Pagination currentPage={currentPage} siblingCount={1} totalPages={data?.totalPages || 0} onPageChange={pageHandler} />
      </div>
    </>
  );
};

export default MovieListContainer;
