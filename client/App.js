import { ThemeProvider } from '@mui/system';
import React from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter, Link } from 'react-router-dom';
import NavBar from './components/NavBar';
import MainRouter from './MainRouter';
import theme from './theme';

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <NavBar />
        <MainRouter />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default hot(module)(App);
