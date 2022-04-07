import { RouteKey } from 'containers/MainRouter/routes';
import { NavLink, useNavigate } from 'react-router-dom';
import { parseMultipleClassNames } from 'utils/styleUtils';
import { useState } from 'react';

import { useProfile } from '../../providers/ProfileProvider';
import SignUp from '../SignUp/SignUp';
import styles from './Navigation.module.css';

interface NavLink {
  positionColumn?: boolean;
}
const Navigation = ({ positionColumn }: NavLink): JSX.Element => {
  const [showModal, setShowModal] = useState(false);
  const { isLoggedIn, logOut } = useProfile();
  const navigate = useNavigate();

  const submitHandler = () => {
    setShowModal(false);
    navigate('/my-movies');
  };

  const onClickHandler = () => {
    setShowModal(!showModal);
  };

  const logOutHandler = () => {
    logOut();
  };

  return (
    <div className={styles.headerNav}>
      <nav>
        <ul className={positionColumn ? parseMultipleClassNames([styles.navList, styles.sidebar]) : styles.navList}>
          <li>
            <NavLink className={styles.navListItem} to={RouteKey.Movies}>
              Movies
            </NavLink>
            {isLoggedIn && (
              <NavLink className={styles.navListItem} to={RouteKey.MyMovies}>
                My Movies
              </NavLink>
            )}
          </li>
          <li>
            {!isLoggedIn ? (
              <button className={styles.navButton} onClick={onClickHandler}>
                Sign in/up
              </button>
            ) : (
              <button className={styles.navButton} onClick={logOutHandler}>
                Log Out
              </button>
            )}

            {showModal ? <SignUp showModal={showModal} onFormCancel={onClickHandler} onFormSubmit={submitHandler} /> : null}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
