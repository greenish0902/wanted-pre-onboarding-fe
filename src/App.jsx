import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

import LoginForm from './components/LoginForm';
import Home from './pages/Home';

const App = () => {
  const [user, setUser] = useState('');

  useEffect(() => {
    localStorage.getItem('username') !== '' && setUser(localStorage.getItem('username'));
  }, []);

  return (
    <AppWrapper>
      <Routes>
        <Route path={user ? '/login' : '/'} element={<LoginForm />} />
        <Route path={user ? '/' : '/home'} element={<Home />} />
      </Routes>
    </AppWrapper>
  );
};

export default App;

const AppWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: var(--color-light-gray);
`;
