import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/material';
import React from 'react';
import HomeScreen from './screen/Home/HomeScreen';
import AppStyles from './App.styles';

const App = () => (
  <ThemeProvider theme={AppStyles}>
    <Box className="bodyContainer">
      <CssBaseline enableColorScheme />
      <HomeScreen />
    </Box>
  </ThemeProvider>
);

export default App;
