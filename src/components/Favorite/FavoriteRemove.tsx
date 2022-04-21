import { FavoriteRemove } from '../Icons';
import styles from './Favorite.module.css';

type FavoriteProps = {
  onClick?: () => void;
};

const FavoriteIconRemove = ({ onClick }: FavoriteProps): JSX.Element => {
  return <FavoriteRemove className={styles.favoriteIcon} onClick={onClick} />;
};

export default FavoriteIconRemove;
