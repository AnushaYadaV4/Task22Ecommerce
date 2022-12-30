import React, { useState, useEffect, useCallback } from 'react';

let logoutTimer;

const LoginContext = React.createContext({
  token: '',
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

const calculateRemainingTime = (expirationTime) => {
  const currentTime = new Date().getTime();
  const adjExpirationTime = new Date(expirationTime).getTime();

  const remainingDuration = adjExpirationTime - currentTime;

  return remainingDuration;
};

const retrieveStoredToken = () => {
  const storedToken = localStorage.getItem('token');
  const storedExpirationDate = localStorage.getItem('expirationTime');

  const remainingTime = calculateRemainingTime(storedExpirationDate);

  if (remainingTime <= 3600) {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationTime');
    return null;
  }

  return {
    token: storedToken,
    duration: remainingTime,
  };
};

export const LoginContextProvider = (props) => {
  const tokenData = retrieveStoredToken();
  
  let initialToken;
  if (tokenData) {
    initialToken = tokenData.token;
  }

  const [token, setToken] = useState(initialToken);

  const userIsLoggedIn = !!token;

  const logoutHandler = useCallback(() => {
    setToken(null);
    localStorage.removeItem('token');
    localStorage.removeItem('expirationTime');

    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  }, []);

  const loginHandler = (token, expirationTime) => {
    setToken(token);
    localStorage.setItem('token', token);
    localStorage.setItem('expirationTime', expirationTime);

    const remainingTime = calculateRemainingTime(expirationTime);

    logoutTimer = setTimeout(logoutHandler, remainingTime);
  };

  useEffect(() => {
    if (tokenData) {
      console.log(tokenData.duration);
      logoutTimer = setTimeout(logoutHandler, tokenData.duration);
    }
  }, [tokenData, logoutHandler]);

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <LoginContext.Provider value={contextValue}>
      {props.children}
    </LoginContext.Provider>
  );
};

export default LoginContext;

/*import React, { useState } from "react";

const LoginContext = React.createContext({
  tokenId: "",
  email: "",
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

export const LoginContextProvider = (props) => {
  const storedToken = localStorage.getItem("idToken");
  const storedEmail = localStorage.getItem("email");
  const [token, setToken] = useState(storedToken);
  const [email, setEmail] = useState(storedEmail);

  const isLoggedIn = !!token;
  console.log(token);
  const login = (token, email) => {
    setToken(token);
    localStorage.setItem("idToken", token);
    localStorage.setItem("email", email);
    setEmail(email);
  };

  const logout = () => {
    localStorage.removeItem("idToken");
    setToken(null);
    setEmail(null);
    localStorage.removeItem("email");
  };

  const contextValue = {
    tokenId: token,
    isLoggedIn: isLoggedIn,
    email: email,
    login: login,
    logout: logout,
  };

  return (
    <LoginContext.Provider value={contextValue}>
      {props.children}
    </LoginContext.Provider>
  );
};

export default LoginContext;
*/
