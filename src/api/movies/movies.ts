import { MoviesResponse, Movie, MovieFilter, FavoriteMovie, MyMoviesResponse, RemoveFavoriteMovieResponse } from './types';
import { get, post, getSecurityHeaders, del } from '../shared/methods';

export async function getMovies(page: number, filter: MovieFilter): Promise<MoviesResponse> {
  const { data } = await get<MoviesResponse>(`movies/?page=${page}&title=${filter.title}&genres=${filter.genres}&sort=${filter.sort}`);
  return data;
}

export async function getMovie(id: string): Promise<Movie> {
  const { data } = await get<Movie>(`movies/${id}`);
  return data;
}

export async function addFavoriteMovie(favoriteMovie: FavoriteMovie): Promise<void> {
  await post<FavoriteMovie, void>('personal-movies', favoriteMovie, getSecurityHeaders());
}

export async function getFavoriteMovies(page: number): Promise<MyMoviesResponse> {
  const { data } = await get<MyMoviesResponse>(`personal-movies/?page=${page}`, getSecurityHeaders());
  return data;
}

export async function removeFavoriteMovie(id: string | undefined): Promise<RemoveFavoriteMovieResponse> {
  const { data } = await del<RemoveFavoriteMovieResponse>(`personal-movies/${id}`, getSecurityHeaders());
  return data;
}
