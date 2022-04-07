import { useQuery } from 'react-query';
import { getMovie } from 'api/movies/movies';
import { useParams } from 'react-router-dom';
import Tag from 'components/Tag/Tag';

import styles from './MovieInfoContainer.module.css';

const MovieInfoContainer = (): JSX.Element => {
  const { id } = useParams();

  const { data } = useQuery('movie', () => getMovie(id?.toString() || ''));

  const formatToUsd = (number?: number): string | 0 | undefined =>
    number ? Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(number) : '$0';

  return (
    <div className={styles.movieInfoContainer_background_image} style={{ backgroundImage: `url(${data?.backdropPath})` }}>
      <div className={styles.movieInfoContainer_backdrop}>
        <div className={styles.movieInfoContainer}>
          <div className={styles.moviePoster}>
            <img alt={data?.title} src={data?.posterPath}></img>
          </div>

          <div className={styles.movieInfo}>
            <h2>
              {data?.title}
              <span className={styles.movieInfo_header_date}>({data?.releaseDate})</span>
            </h2>
            <h3 className={styles.tagLine}>{data?.tagline}</h3>

            <div className={styles.tagList}>
              {data?.genres.map((genre) => (
                <Tag key={genre.id}>
                  <span>{genre.name}</span>{' '}
                </Tag>
              ))}
            </div>

            <dl className={styles.movieInfo_details}>
              <span>
                <dt>Duration: </dt>
                <dd>
                  <b> {data?.runtime} min </b>
                </dd>
              </span>
              <span>
                <dt>Vote average:</dt>
                <dd>
                  <b> {data?.voteAverage}</b>
                </dd>
              </span>
              <span>
                <dt> Vote count:</dt>
                <dd>
                  <b> {data?.voteCount}</b>
                </dd>
              </span>
              <span>
                <dt>Budget:</dt>
                <dd>
                  <b> {formatToUsd(data?.budget)}</b>
                </dd>
              </span>
              <span>
                <dt>Revenue: </dt>
                <dd>
                  <b> {formatToUsd(data?.revenue)}</b>
                </dd>
              </span>
            </dl>

            <div className={styles.movieInfo_overview}>
              <h3>Overview</h3>
              <span>{data?.overview}</span>
            </div>

            <div className={styles.movieInfo_production}>
              <h3>Production companies</h3>
              <span>{data?.productionCompanies.map((company) => company.name).join(', ')}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieInfoContainer;
