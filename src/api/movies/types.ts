export type MoviesResponse = {
  page: number;
  totalPages: number;
  movies: Movie[];
};

export type Movie = {
  _id?: string;
  movieId: number;
  backdropPath: string;
  posterPath: string;
  releaseDate: string;
  title: string;
  voteAverage: number;
  tagline: string;
  runtime: string;
  voteCount: number;
  budget: number;
  revenue: number;
  overview: string;
  productionCompanies: ProductionCompany[];
  genres: Genre[];
};

type ProductionCompany = {
  id: number;
  logoPath: string;
  name: string;
  originCountry: string;
};

export type Genre = {
  id: number;
  name: string;
};

export type MovieFilter = {
  title?: string;
  genres?: string[];
  sort?: string;
};

export type FavoriteMovie = Pick<Movie, '_id' | 'movieId' | 'backdropPath' | 'posterPath' | 'posterPath' | 'releaseDate' | 'title'>;

export type MyMoviesResponse = {
  page: number;
  docs: Movie[];
};

export type RemoveFavoriteMovieResponse = {
  success: boolean;
};
