import { FavoriteAdd } from '../Icons';
import styles from './Favorite.module.css';

type FavoriteProps = {
  onClick?: () => void;
};

const FavoriteIcon = ({ onClick }: FavoriteProps): JSX.Element => {
  return <FavoriteAdd className={styles.favoriteIcon} onClick={onClick} />;
};

export default FavoriteIcon;
