import { Add } from '@mui/icons-material';
import { Box, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import OfferBox from '../../../OfferBox/OfferBox';

import useStyles from './styles';
import AdminWrapper from '../../../../utils/AdminWrapper';

const Statistics = () => {
    const classes = useStyles();

    const [mock, setMock] = useState("NaN")
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
        <AdminWrapper>
            <Box className={classes.container} bgcolor="contentBackground.main">
                <Grid container justifyContent='flex-start'>
                    <Grid item key='hostStatistics' xs={12} lg={6}>
                        <Typography sx={{mt: 6}} fontSize={48} align='center' lineHeight='58px'>General Statistics</Typography>
                        <Box sx={{mx: 12, mt: 8}}>
                            <Typography lineHeight='22px'>Total offers: {mock}</Typography>
                            <Typography sx={{mt: 4}} lineHeight='22px'>Accepted offers: {mock}</Typography>
                            <Typography sx={{mt: 4}} lineHeight='22px'>Free offers: {mock}</Typography>
                        </Box>
                        <Box sx={{mx: 12, mt: 15}}>
                            <Typography lineHeight='22px'>Total residences: {mock}</Typography>
                            <Typography sx={{mt: 4}} lineHeight='22px'>Hosts who shared their home: {mock}</Typography>
                            <Typography sx={{mt: 4}} lineHeight='22px'>Residences per host: {mock}</Typography>
                            <Typography sx={{mt: 4}} lineHeight='22px'>Average offers per host: {mock}</Typography>
                        </Box>
                        <Box sx={{mx: 12, mt: 15}}>
                            <Typography lineHeight='22px'>Total people helped: {mock}</Typography>
                            <Typography sx={{mt: 4}} lineHeight='22px'>Average people per house: {mock}</Typography>
                        </Box>
                    </Grid>
                    <Grid item key='guestStatistics' xs={12} lg={6}>
                        <Typography sx={{mt: 6}} fontSize={48} align='center' lineHeight='58px'>Top Sharing Hosts</Typography>
                        <Box bgcolor='content.main' className={classes.hostsTop}>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </AdminWrapper>
    )
}

export default Statistics