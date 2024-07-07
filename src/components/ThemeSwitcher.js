import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import lightTheme from '../themes/lightTheme';
import darkTheme from '../themes/darkTheme';
import { Button } from '@mui/material';

const ThemeSwitcher = ({ children }) => {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <Button onClick={toggleTheme}>Toggle Theme</Button>
      {children}
    </ThemeProvider>
  );
};

export default ThemeSwitcher;
