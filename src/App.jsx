import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

import { UserContext } from './utils/UserContextProvider';
import LoginForm from './components/LoginForm';
import Home from './pages/Home';

const App = () => {
  const { username } = useContext(UserContext);

  return (
    <AppWrapper>
      <Routes>
        <Route path="/" element={username ? <Home /> : <LoginForm />} />
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
