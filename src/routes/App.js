import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import blue from '@mui/material/colors/blue';
import { Routes, Route } from 'react-router-dom'
import Header from '../pages/Header';
import Login from '../pages/Login';
import Home from '../pages/Home';
import PageNotFound from '../pages/PageNotFound';

function App() {
  const theme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: blue[900]
      },
      secondary: {
        main: '#b71c1c',
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display:'flex', flexDirection: 'column'}}>
        <Header/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </Box>
    </ThemeProvider>
  );
}

export default App;
