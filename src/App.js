import './App.css';
import { useAuth0 } from '@auth0/auth0-react';
import { useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles'
import { defaultTheme } from './theme/Default'
import { Route, BrowserRouter, Routes } from 'react-router-dom';

import Test from './components/TestComponent/Test';
import AuthWrapper from './utils/AuthWrapper';
import Home from './components/User/Home/Home';
import Statistics from './components/Admin/Statistics/Statistics';

function App() {
  return (
        <AuthWrapper>
            <ThemeProvider theme={defaultTheme}>
                <BrowserRouter>
                    <Routes>
                        <Route exact path='/' element={<Home />} />
                        <Route exact path='/admin/statistics' element={<Statistics />} />
                        <Route exact path='/test' element={<Test />} />
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </AuthWrapper>
  );
}

export default App;
