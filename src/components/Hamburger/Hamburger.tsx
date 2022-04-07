import styles from './Hamburger.module.css';
import { parseMultipleClassNames } from '../../utils/styleUtils';

interface HamburgerProps {
  isActive: boolean;
  onClick: () => void;
}

const Hamburger = ({ isActive, onClick }: HamburgerProps): JSX.Element => {
  return (
    <div className={isActive ? parseMultipleClassNames([styles.hamburger, styles.active]) : styles.hamburger} onClick={onClick}>
      <span className={styles.bar}></span>
      <span className={styles.bar}></span>
      <span className={styles.bar}></span>
    </div>
  );
};

export default Hamburger;
