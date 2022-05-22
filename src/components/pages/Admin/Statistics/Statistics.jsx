import { Add } from '@mui/icons-material';
import { Box, Grid, Typography } from '@mui/material'
import React, { useCallback, useEffect, useState } from 'react'
import { base, routes } from '../../../../utils/api/routes';
import OfferBox from '../../../OfferBox/OfferBox';
import { useAuth0 } from '@auth0/auth0-react';

import useStyles from './styles';
import AdminWrapper from '../../../../utils/AdminWrapper';
import { authSettings } from '../../../../common/AuthSettings';

const Statistics = () => {
    const classes = useStyles();

    const [sharingStatistics, setSharingStatistics] = useState([])
    const [residenceStatistics, setResidenceStatistics] = useState([])

    const [helpedPeople, setHelpedPeople] = useState("NaN")
    const [totalSharings, setTotalSharings] = useState("NaN")
    const [acceptedSharings, setAcceptedSharings] = useState("NaN")
    const [freeSharings, setFreeSharings] = useState("NaN")

    const [totalHosts, setTotalHosts] = useState("NaN")
    const [totalResidences, setTotalResidences] = useState("NaN")

    const [residencesPerHost, setResidencesPerHost] = useState("NaN")
    const [averageSharingsPerHost, setAverageSharingsPerHost] = useState("NaN")
    const [averagePeoplePerHouse, setAveragePeoplePerHouse] = useState("NaN")


    const { getAccessTokenSilently } = useAuth0();

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

        fetch(`${base}${routes.user.admin.statisticsOffers}`, config)
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

    const getResidenceStatistics = useCallback(async () => {
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

        fetch(`${base}${routes.user.admin.statisticsResidences}`, config)
        .then(function (response) {
            if (response.status === 200) {
                response.json().then(function (data) {
                    setResidenceStatistics(data)
                })
            }
        })
        .catch(function (error) {
            console.log("ERROR:", error);
        });
    })

    useEffect(() => {
        getSharingStatistics()
        getResidenceStatistics()
    }, [])

    useEffect(() => {
        if (sharingStatistics) {
            const { total_helped_people, total_offers, accepted_offers, free_offers } = sharingStatistics
            setHelpedPeople(total_helped_people)
            setTotalSharings(total_offers)
            setAcceptedSharings(accepted_offers)
            setFreeSharings(free_offers)
        }
        if (residenceStatistics) {
            const { total_hosts, total_residences } = residenceStatistics
            setTotalHosts(total_hosts)
            setTotalResidences(total_residences)
        }
        if (sharingStatistics && residenceStatistics) {
            const { total_helped_people, total_offers, accepted_offers, free_offers } = sharingStatistics
            setHelpedPeople(total_helped_people)
            setTotalSharings(total_offers)
            setAcceptedSharings(accepted_offers)
            setFreeSharings(free_offers)
            const { total_hosts, total_residences } = residenceStatistics
            setTotalHosts(total_hosts)
            setTotalResidences(total_residences)

            setResidencesPerHost((total_residences / total_hosts).toFixed(2))
            setAverageSharingsPerHost((total_offers / total_hosts).toFixed(2))
            setAveragePeoplePerHouse((total_helped_people / total_residences).toFixed(2))
        }
    }, [sharingStatistics, residenceStatistics])


    return (
        <AdminWrapper>
            <Box className={classes.container} bgcolor="contentBackground.main">
                <Typography sx={{mt: 7 }} fontSize={48} align='center' lineHeight='58px'>General Statistics</Typography>
                <Box sx={{mx: 16}}>
                    <Box sx={{mt: 8}}>
                        <Typography lineHeight='22px'>Total sharings: {totalSharings}</Typography>
                        <Typography sx={{mt: 4}} lineHeight='22px'>Accepted sharings: {acceptedSharings}</Typography>
                        <Typography sx={{mt: 4}} lineHeight='22px'>Free sharings: {freeSharings}</Typography>
                    </Box>
                    <Box sx={{mt: 15}}>
                        <Typography lineHeight='22px'>Total residences: {totalResidences}</Typography>
                        <Typography sx={{mt: 4}} lineHeight='22px'>Hosts who shared their home: {totalHosts}</Typography>
                        <Typography sx={{mt: 4}} lineHeight='22px'>Residences per host: {residencesPerHost}</Typography>
                        <Typography sx={{mt: 4}} lineHeight='22px'>Average sharings per host: {averageSharingsPerHost}</Typography>
                    </Box>
                    <Box sx={{mt: 15}}>
                        <Typography lineHeight='22px'>Total people helped: {helpedPeople}</Typography>
                        <Typography sx={{mt: 4}} lineHeight='22px'>Average people per house: {averagePeoplePerHouse}</Typography>
                    </Box>
                </Box>
            </Box>
        </AdminWrapper>
    )
}

export default Statistics