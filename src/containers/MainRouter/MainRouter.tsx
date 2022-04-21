import { Routes, Route } from 'react-router-dom';
import MoviesListContainer from 'containers/MoviesListContainer/MoviesListContainer';
import MovieInfoContainer from 'containers/MovieInfoContainer/MovieInfoContainer';
import MyMovieListContainer from 'containers/MoviesListContainer/MyMovieListContainer';

import { RouteKey } from './routes';

const MainRouter = (): JSX.Element => (
  <Routes>
    <Route element={<MoviesListContainer />} path={RouteKey.Index} />
    <Route element={<MoviesListContainer />} path={RouteKey.Movies} />
    <Route element={<MovieInfoContainer />} path={RouteKey.Movie} />
    <Route element={<MyMovieListContainer />} path={RouteKey.MyMovies} />
  </Routes>
);

export default MainRouter;
