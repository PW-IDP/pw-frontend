import { Add } from '@mui/icons-material';
import { Box, Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import OfferBox from '../../../OfferBox/OfferBox';
import UserWrapper from '../../../../utils/UserWrapper'

import useStyles from './styles';

const mockStatistics = {

}

const Home = () => {
    const classes = useStyles();
    const [bookings, setBookings] = useState([])

    useEffect(() => {
        // setBookings(mockBookings)
    }, [])


    return (
        <UserWrapper>
            <Box className={classes.container} bgcolor="contentBackground.main">
                <Typography> asdasdasd</Typography>
            </Box>
        </UserWrapper>
    )
}

export default Home