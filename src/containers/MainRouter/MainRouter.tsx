import { Routes, Route } from 'react-router-dom';
import MoviesListContainer from 'containers/MoviesListContainer/MoviesListContainer';
import MovieInfoContainer from 'containers/MovieInfoContainer/MovieInfoContainer';
import MyMovieList from 'containers/MoviesListContainer/MyMovieList';

import { RouteKey } from './routes';

const MainRouter = (): JSX.Element => (
  <Routes>
    <Route element={<MoviesListContainer />} path={RouteKey.Index} />
    <Route element={<MoviesListContainer />} path={RouteKey.Movies} />
    <Route element={<MovieInfoContainer />} path={RouteKey.Movie} />
    <Route element={<MyMovieList />} path={RouteKey.MyMovies} />
  </Routes>
);

export default MainRouter;
