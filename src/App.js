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
import AvailableSharings from './components/pages/Admin/AvailableSharings/AvailableSharings';
import MyResidences from './components/pages/User/MyResidences/MyResidences';
import MyBookings from './components/pages/User/MyBookings/MyBookings';
import MyStatistics from './components/pages/User/MyStatistics/MyStatistics';
import SaveProfile from './components/pages/SaveProfile/SaveProfile';

function App() {
    return (
        <AuthWrapper>
            <ThemeProvider theme={defaultTheme}>
                <BrowserRouter>
                    <Routes>
                        <Route exact path='/' element={<Home />} />
                        <Route exact path='/my-residences' element={<MyResidences />} />
                        <Route exact path='/my-bookings' element={<MyBookings />} />
                        <Route exact path='/my-statistics' element={<MyStatistics />} />

                        <Route exact path='/admin/statistics' element={<Statistics />} />
                        <Route exact path='/admin/available-sharings' element={<AvailableSharings />} />

                        <Route exact path='/save-profile' element={<SaveProfile />} />

                        <Route exact path='/test' element={<Test />} />
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </AuthWrapper>
    );
}

export default App;
