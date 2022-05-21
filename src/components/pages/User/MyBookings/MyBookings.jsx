import { useAuth0 } from '@auth0/auth0-react';
import { Box, Button, Alert, Typography } from '@mui/material'
import React, { useCallback, useEffect, useState } from 'react'
import OfferBox from '../../../OfferBox/OfferBox';
import UserWrapper from '../../../../utils/UserWrapper'
import { base, routes } from '../../../../utils/api/routes';

import useStyles from './styles';
import ConfirmationModal from '../../../modals/ConfirmationModal/ConfirmationModal';

const Home = () => {
    const classes = useStyles();
    const [bookings, setBookings] = useState([])
    const [selectedSharing, setSelectedSharing] = useState(undefined)
    const [openConfirmationModal, setOpenLeaveConfirmationModal] = useState(false);
    const { getAccessTokenSilently } = useAuth0();
    const [alert, setAlert] = useState(undefined)

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
                    const x = bookings.sort((a, b) => (b.end_datetime === undefined) - (a.end_datetime === undefined))
                    setBookings(bookings);
                })
            }
        })
        .catch(function (error) {
            console.log("ERROR:", error);
        });
    })
    
    const leaveResidence = useCallback(async (data) => {
        const accessToken = await getAccessTokenSilently();
        const config = {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + accessToken,
            },
            body: JSON.stringify(data)
        };
        fetch(`${base}${routes.sharing.leave}`, config)
        .then(function (response) {
            if (response.status === 200) {
                setAlert({
                    severity: 'success',
                    message: "You left the residence!"
                })
                setTimeout(() => {
                    setAlert(undefined)
                }, 3000);
                getBookings()
            } else {
                response.json().then(function ({ message }) {
                    setAlert({
                        severity: 'error',
                        message: message
                    })
                    setTimeout(() => {
                        setAlert(undefined)
                    }, 3000);
                })
            }
        })
        .catch(function (error) {
            console.log("ERROR:", error);
        })
        .finally(function () {
            setOpenLeaveConfirmationModal(false)
        });
    })

    useEffect(() => {
        getBookings()
    }, [])

    const leaveConfirmation = (data) => {
        setSelectedSharing(data)
        setOpenLeaveConfirmationModal(true)
    }

    return (
        <UserWrapper>
            {alert && <Alert className={classes.popUpAlert} severity={alert.severity}><Typography>{alert.message}</Typography></Alert>}
            <ConfirmationModal
                openModal={openConfirmationModal}
                onClose={() => setOpenLeaveConfirmationModal(false)}
                actionText="Do you want to leave this residence?"
                affirmativeText="Yes"
                onAffirmative={() => leaveResidence(selectedSharing)}
                negativeText="No"
                onNegative={() => setOpenLeaveConfirmationModal(false)}
            />
            <Box className={classes.container} bgcolor="contentBackground.main" sx={{p: 5}}>
                {bookings.map(({ sharing_id, title, name, email, minPersons, maxPersons, county, city, address, description, start_datetime, end_datetime}, i) => (
                    end_datetime ?
                    <OfferBox key={`${i}_${title}`}
                        title={title}
                        name={name}
                        email={email}
                        persons={[minPersons, maxPersons]}
                        county={county}
                        city={city}
                        address={address}
                        description={description}
                        infoLines={["Occupied by Me", `From ${start_datetime.slice(0, 10)} Until ${end_datetime.slice(0, 10)}`]}
                        />
                    :
                    <OfferBox key={`${i}_${title}`}
                        title={title}
                        name={name}
                        email={email}
                        persons={[minPersons, maxPersons]}
                        county={county}
                        city={city}
                        address={address}
                        description={description}
                        infoLines={["Occupied by Me", `On ${start_datetime.slice(0, 10)}`]}

                        buttonText="Leave"
                        buttonColor="secondary"
                        buttonOnClick={() => {leaveConfirmation({ sharing_id })}}
                        />
                ))}
            </Box>
        </UserWrapper>
    )
}

export default Home