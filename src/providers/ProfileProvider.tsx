import React, { useEffect, useContext } from 'react';
import { useState, FC } from 'react';

import { TOKEN_KEY } from '../api/shared/constants';

interface AuthContext {
  token: string | null;
  isLoggedIn: boolean;
  logIn: (token: string) => void;
  logOut: () => void;
}

const AuthContext = React.createContext<AuthContext>({
  token: '',
  isLoggedIn: false,
  logIn: () => {
    return;
  },
  logOut: () => {
    return;
  },
});

export const AuthContextProvider: FC = ({ children }): JSX.Element => {
  const [token, setToken] = useState<string | null>(null);
  const userIsLogedIn = !!token;

  useEffect(() => {
    if (userIsLogedIn) {
      return;
    }
    const token = localStorage.getItem(TOKEN_KEY);
    if (token) {
      logInHandler(token);
    }
  }, []);

  const logInHandler = (token: string) => {
    setToken(token);
    localStorage.setItem(TOKEN_KEY, token);
  };

  const logOutHandler = () => {
    setToken(null);
    localStorage.removeItem(TOKEN_KEY);
  };

  const contextValue = {
    token: token,
    isLoggedIn: userIsLogedIn,
    logIn: logInHandler,
    logOut: logOutHandler,
  };

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

export const useProfile = (): AuthContext => useContext(AuthContext);

export default AuthContextProvider;
