import { Add } from '@mui/icons-material';
import { Box, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import OfferBox from '../../../OfferBox/OfferBox';
import UserWrapper from '../../../../utils/UserWrapper'

import useStyles from './styles';

const mockStatistics = {

}

const Home = () => {
    const classes = useStyles();

    const [myTotalOffers, setMyTotalOffers] = useState("NaN")
    const [myAcceptedOffers, setMyAcceptedOffers] = useState("NaN")
    const [myFreeOffers, setMyFreeOffers] = useState("NaN")
    const [helpedPeople, setHelpedPeople] = useState("NaN")
    const [averagePeoplePerHouse, setAveragePeoplePerHouse] = useState("NaN")
    const [totalDaysHosted, setTotalDaysHosted] = useState("NaN")

    const [myTotalBookings, setMyTotalBookings] = useState("NaN")
    const [averageStayTime, setAaverageStayTime] = useState("NaN")
    const [totalDayStayed, setTotalDayStayed] = useState("NaN")

    useEffect(() => {

    }, [])


    return (
        <UserWrapper>
            <Box className={classes.container} bgcolor="contentBackground.main">
                <Grid container justifyContent='flex-start'>
                    <Grid item key='hostStatistics' xs={12} lg={6}>
                        <Typography sx={{mt: 6}} fontSize={48} align='center' lineHeight='58px'>As a Host</Typography>
                        <Box sx={{mx: 12, mt: 8}}>
                            <Typography lineHeight='22px'>My offers: {myTotalOffers}</Typography>
                            <Typography sx={{mt: 4}} lineHeight='22px'>My accepted offers: {myAcceptedOffers}</Typography>
                            <Typography sx={{mt: 4}} lineHeight='22px'>My free offers: {myFreeOffers}</Typography>
                        </Box>
                        <Box sx={{mx: 12, mt: 15}}>
                            <Typography lineHeight='22px'>People I have helped: {helpedPeople}</Typography>
                            <Typography sx={{mt: 4}} lineHeight='22px'>Average people per house: {averagePeoplePerHouse}</Typography>
                            <Typography sx={{mt: 4}} lineHeight='22px'>Total days I have hosted: {totalDaysHosted} Days</Typography>
                        </Box>
                    </Grid>
                    <Grid item key='guestStatistics' xs={12} lg={6}>
                        <Typography sx={{mt: 6}} fontSize={48} align='center' lineHeight='58px'>As a Guest</Typography>
                        <Box sx={{mx: 12, mt: 8}}>
                            <Typography lineHeight='22px'>My bookings: {myTotalBookings}</Typography>
                            <Typography sx={{mt: 4}} lineHeight='22px'>Average time I have stayed: {averageStayTime} Days</Typography>
                            <Typography sx={{mt: 4}} lineHeight='22px'>Total days I have stayed: {totalDayStayed} Days</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </UserWrapper>
    )
}

export default Home