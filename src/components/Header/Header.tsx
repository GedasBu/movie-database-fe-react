import Hamburger from 'components/Hamburger/Hamburger';
import { MyMoviesLogo } from 'components/Icons';
import Sidebar from 'components/Sidebar/Sidebar';
import useMediaQuery from 'components/hooks/useMediaQuery';
import { useEffect, useState } from 'react';
import Navigation from 'components/Navigation/Navigation';

import styles from './Header.module.css';

const Header = (): JSX.Element => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (!isMobile && isActive) {
      setIsActive(false);
    }
  }, [isMobile]);

  const hamburgerHandler = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={styles.headerContainer}>
      <header className={styles.header}>
        <MyMoviesLogo className={styles.icon} />
        {isMobile ? <Hamburger isActive={isActive} onClick={hamburgerHandler} /> : <Navigation closeSidebar={hamburgerHandler} />}
      </header>
      {isActive && isMobile && (
        <Sidebar onBackDropClick={hamburgerHandler}>
          <Navigation closeSidebar={hamburgerHandler} positionColumn />
        </Sidebar>
      )}
    </div>
  );
};

export default Header;
