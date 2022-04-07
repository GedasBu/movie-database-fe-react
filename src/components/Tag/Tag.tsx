import { ReactNode } from 'react';

import styles from './Tag.module.css';

type TagProps = {
  children: ReactNode;
};

const Tag = ({ children }: TagProps): JSX.Element => {
  return <div className={styles.tag}>{children}</div>;
};

export default Tag;
