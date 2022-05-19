import './App.css';
import { useAuth0 } from '@auth0/auth0-react';
import { useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles'
import { defaultTheme } from './theme/Default'
import { Route, BrowserRouter, Routes } from 'react-router-dom';

import Test from './components/TestComponent/Test';
import AuthWrapper from './utils/AuthWrapper';
import Home from './components/pages/User/Home/Home';
import Statistics from './components/pages/Admin/Statistics/Statistics';
import Users from './components/pages/Admin/Users/Users';
import MySharings from './components/pages/User/MySharings/MySharings';
import MyBookings from './components/pages/User/MyBookings/MyBookings';
import MyStatistics from './components/pages/User/MyStatistics/MyStatistics';

function App() {
    return (
        <AuthWrapper>
            <ThemeProvider theme={defaultTheme}>
                <BrowserRouter>
                    <Routes>
                        <Route exact path='/' element={<Home />} />
                        <Route exact path='/my-sharings' element={<MySharings />} />
                        <Route exact path='/my-bookings' element={<MyBookings />} />
                        <Route exact path='/my-statistics' element={<MyStatistics />} />

                        <Route exact path='/admin/statistics' element={<Statistics />} />
                        <Route exact path='/admin/users' element={<Users />} />

                        <Route exact path='/test' element={<Test />} />
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </AuthWrapper>
    );
}

export default App;
