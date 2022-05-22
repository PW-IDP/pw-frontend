import { Box, Grid, Typography } from '@mui/material'
import React, { useCallback, useEffect, useState } from 'react'
import { base, routes } from '../../../../utils/api/routes';
import UserWrapper from '../../../../utils/UserWrapper'
import { useAuth0 } from '@auth0/auth0-react';

import useStyles from './styles';
import stringToDate from '../../../../utils/common/utils';
import { authSettings } from '../../../../common/AuthSettings';

const mockStatistics = {

}

const Home = () => {
    const classes = useStyles();

    const [myTotalOffers, setMyTotalOffers] = useState("NaN")
    const [myAcceptedOffers, setMyAcceptedOffers] = useState("NaN")
    const [aaaaaaaaaaaaaaaaa, setMyFreeOffers] = useState("NaN")





    const [sharingStatistics, setSharingStatistics] = useState([])
    const [myBookings, setMyBookings] = useState([])
    const [myResidences, setMyResidences] = useState([])

    const [myTotalResidences, setMyTotalResidences] = useState("NaN")

    const [helpedPeople, setHelpedPeople] = useState("NaN")
    const [totalSharings, setTotalSharings] = useState("NaN")
    const [acceptedSharings, setAcceptedSharings] = useState("NaN")
    const [freeSharings, setFreeSharings] = useState("NaN")


    const [myTotalBookings, setMyTotalBookings] = useState("NaN")
    const [averageStayTime, setAaverageStayTime] = useState("NaN")
    const [totalDayStayed, setTotalDayStayed] = useState("NaN")

    const [averagePeoplePerHouse, setAveragePeoplePerHouse] = useState("NaN")

    const { getAccessTokenSilently } = useAuth0();

    const getResidences = useCallback(async () => {
        const accessToken = await getAccessTokenSilently({
            audience: authSettings.audience,
            scope: 'project:admin'
        });
        const config = {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + accessToken,
            },
        };
        fetch(`${base}${routes.residence.get}`, config)
        .then(function (response) {
            if (response.status === 200) {
                response.json().then(function ({ residences }) {
                    setMyResidences(residences);
                })
            }
        })
        .catch(function (error) {
            console.log("ERROR:", error);
        });
    })

    const getSharingStatistics = useCallback(async () => {
        const accessToken = await getAccessTokenSilently({
            audience: authSettings.audience,
            scope: 'project:admin'
        });
        const config = {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + accessToken,
            },
        };

        fetch(`${base}${routes.user.statisticsOffers}`, config)
        .then(function (response) {
            if (response.status === 200) {
                response.json().then(function (data) {
                    setSharingStatistics(data)
                })
            }
        })
        .catch(function (error) {
            console.log("ERROR:", error);
        });
    })

    const getBookings = useCallback(async () => {
        const accessToken = await getAccessTokenSilently();
        const config = {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + accessToken,
            },
        };
        fetch(`${base}${routes.sharing.bookings}`, config)
        .then(function (response) {
            if (response.status === 200) {
                response.json().then(function ({ bookings }) {
                    setMyBookings(bookings);
                })
            }
        })
        .catch(function (error) {
            console.log("ERROR:", error);
        });
    })

    useEffect(() => {
        getResidences()
        getSharingStatistics()

        getBookings()
    }, [])



    useEffect(() => {
        if (myResidences) {
            setMyTotalResidences(myResidences.length)
        }
        if (sharingStatistics) {
            const { total_helped_people, total_offers, accepted_offers, free_offers } = sharingStatistics
            setHelpedPeople(total_helped_people)
            setTotalSharings(total_offers)
            setAcceptedSharings(accepted_offers)
            setFreeSharings(free_offers)
        }
        if (myResidences && sharingStatistics) {
            const { total_helped_people } = sharingStatistics
            if (myResidences.length) {
                setAveragePeoplePerHouse((total_helped_people / myResidences.length).toFixed(2))
            } else {
                setAveragePeoplePerHouse(0)
            }
        }

        if (myBookings) {
            const totalDays = myBookings
                                    .map(({ start_datetime, end_datetime }) => !end_datetime ? 0 : (stringToDate(end_datetime) - stringToDate(start_datetime)))
                                    .map((miliseconds) => miliseconds / 1000 / 86400)
                                    .reduce((partialSum, x) => partialSum + x, 0)
            setMyTotalBookings(myBookings.length)
            setTotalDayStayed(totalDays.toFixed(2))
            setAaverageStayTime((totalDays / myBookings.length).toFixed(2))
        }

    }, [myResidences, sharingStatistics, myBookings])


    return (
        <UserWrapper>
            <Box className={classes.container} bgcolor="contentBackground.main">
                <Grid container justifyContent='flex-start'>
                    <Grid item key='hostStatistics' xs={12} lg={6}>
                        <Typography sx={{mt: 6}} fontSize={48} align='center' lineHeight='58px'>As a Host</Typography>
                        <Box sx={{mx: 12, mt: 8}}>
                            <Typography lineHeight='22px'>My sharings: {totalSharings}</Typography>
                            <Typography sx={{mt: 4}} lineHeight='22px'>My accepted sharings: {acceptedSharings}</Typography>
                            <Typography sx={{mt: 4}} lineHeight='22px'>My free sharings: {freeSharings}</Typography>
                        </Box>
                        <Box sx={{mx: 12, mt: 15}}>
                            <Typography lineHeight='22px'>People I have helped: {helpedPeople}</Typography>
                            <Typography sx={{mt: 4}} lineHeight='22px'>Residences I have: {myTotalResidences}</Typography>
                            <Typography sx={{mt: 4}} lineHeight='22px'>Average people per house: {averagePeoplePerHouse}</Typography>
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