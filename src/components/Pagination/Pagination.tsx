import { usePagination, DOTS } from '../hooks/usePagination';
import styles from './Pagination.module.css';

interface Pagination {
  onPageChange: (x: number) => void;
  totalPages: number;
  siblingCount: number;
  currentPage: number;
}

const Pagination = ({ onPageChange, totalPages, siblingCount, currentPage }: Pagination): JSX.Element | null => {
  const paginationRange = usePagination({
    currentPage,
    totalPages,
    siblingCount,
  });

  if (currentPage === 0 || (paginationRange && paginationRange.length < 2)) {
    return null;
  }

  const onNext = () => {
    currentPage < totalPages ? onPageChange(currentPage + 1) : totalPages;
  };

  const onPrevious = () => {
    currentPage === 1 ? 1 : onPageChange(currentPage - 1);
  };

  return (
    <ul className={styles.pagination_container}>
      <li className={styles.pagination_item} onClick={onPrevious}>
        <div className={[styles.arrow, styles.left].join(' ')} />
      </li>

      {paginationRange?.map((pageNumber, id) => {
        if (typeof pageNumber === 'string' && pageNumber === DOTS) {
          return (
            <li className={styles.dots} key={id}>
              &#8230;
            </li>
          );
        }

        return (
          <li
            className={currentPage === pageNumber ? [styles.isActive, styles.pagination_item].join(' ') : styles.pagination_item}
            key={id}
            onClick={() => typeof pageNumber === 'number' && onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}

      <li className={styles.pagination_item} onClick={onNext}>
        <div className={[styles.arrow, styles.right].join(' ')} />
      </li>
    </ul>
  );
};

export default Pagination;
