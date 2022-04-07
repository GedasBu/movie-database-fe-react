import { MoviesResponse, Movie, MovieFilter } from './types';
import { get } from '../shared/methods';

export async function getMovies(page: number, filter: MovieFilter): Promise<MoviesResponse> {
  const { data } = await get<MoviesResponse>(`movies/?page=${page}&title=${filter.title}&genres=${filter.genres}&sort=${filter.sort}`);
  return data;
}

export async function getMovie(id: string): Promise<Movie> {
  const { data } = await get<Movie>(`movies/${id}`);
  return data;
}
