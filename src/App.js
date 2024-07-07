import React from 'react';
import Routes from './routes';
import ThemeSwitcher from './components/ThemeSwitcher';

const App = () => {
  return (
    <ThemeSwitcher>
      <Routes />
    </ThemeSwitcher>
  );
};

export default App;
