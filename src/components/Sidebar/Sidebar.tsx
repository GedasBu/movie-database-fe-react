import { MouseEvent, PropsWithChildren } from 'react';

import styles from './Sidebar.module.css';

type SidebarProps = PropsWithChildren<{
  onBackDropClick: () => void;
}>;

const Sidebar = ({ children, onBackDropClick }: SidebarProps): JSX.Element => {
  const onSidebarClickHandler = (e: MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div className={styles.sidebar_backdrop} onClick={onBackDropClick}>
      <div className={styles.sidebar} onClick={onSidebarClickHandler}>
        {children }
      </div>
    </div>
  );
};

export default Sidebar;
