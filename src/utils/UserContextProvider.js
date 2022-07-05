import React, { useState, createContext } from 'react';

const UserContext = createContext({ username: '' });

const UserContextProvider = ({ children }) => {
  const [username, setUsername] = useState('');

  const signin = (username) => {
    localStorage.setItem('username', username);
    setUsername(username);
  };
  const signout = () => {
    localStorage.removeItem('username');
    setUsername(username);
  };
  const value = { username, signin, signout };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export { UserContext, UserContextProvider };
