import { Add } from '@mui/icons-material';
import { Box, Button, Alert, Typography } from '@mui/material'
import React, { useCallback, useEffect, useState } from 'react'
import { base, routes } from '../../../../utils/api/routes';
import OfferBox from '../../../OfferBox/OfferBox';
import UserWrapper from '../../../../utils/UserWrapper'
import AddSharingModal from '../../../modals/AddSharingModal/AddSharingModal';

import useStyles from './styles';
import ConfirmationModal from '../../../modals/ConfirmationModal/ConfirmationModal';
import { useAuth0 } from '@auth0/auth0-react';
import AcceptSharingModal from '../../../modals/AcceptSharingModal/AcceptSharingModal';

const Home = () => {
    const classes = useStyles();
    const [myResidences, setMyResidences] = useState([])
    const [availableSharings, setAvailableSharings] = useState([])
    const [mySharings, setMySharings] = useState([])
    const [selectedSharing, setSelectedSharing] = useState(undefined)
    const [openAddSharingModal, setOpenAddSharingModal] = useState(false);
    const [openAcceptConfirmationModal, setOpenAcceptConfirmationModal] = useState(false);
    const [openDeleteConfirmationModal, setOpenDeleteConfirmationModal] = useState(false);
    const [alert, setAlert] = useState(undefined)
    const [subPage, setSubPage] = useState("Guest")
 
    const { getAccessTokenSilently } = useAuth0();

    const getResidences = useCallback(async () => {
        const accessToken = await getAccessTokenSilently();
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

    const getMySharings = useCallback(async () => {
        const accessToken = await getAccessTokenSilently();
        const config = {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + accessToken,
            },
        };
        fetch(`${base}${routes.sharing.offers}`, config)
        .then(function (response) {
            if (response.status === 200) {
                response.json().then(function ({ offers }) {
                    setMySharings(offers);
                })
            }
        })
        .catch(function (error) {
            console.log("ERROR:", error);
        });
    })

    const getAvailableSharings = useCallback(async () => {
        const accessToken = await getAccessTokenSilently();
        const config = {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + accessToken,
            },
        };
        fetch(`${base}${routes.sharing.getAvailableOffers}`, config)
        .then(function (response) {
            if (response.status === 200) {
                response.json().then(function ({ avaialable_offers }) {
                    setAvailableSharings(avaialable_offers);
                })
            }
        })
        .catch(function (error) {
            console.log("ERROR:", error);
        });
    })

    const addSharing = useCallback(async (data) => {
        const accessToken = await getAccessTokenSilently();
        const config = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + accessToken,
            },
            body: JSON.stringify(data)
        };
        fetch(`${base}${routes.sharing.add}`, config)
        .then(function (response) {
            if (response.status === 201) {
                setAlert({
                    severity: 'success',
                    message: "Sharing Added Successfully!"
                })
                setTimeout(() => {
                    setAlert(undefined)
                }, 3000);
                getResidences()
                getMySharings()
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
            setOpenAddSharingModal(false)
        });
    })

    const deleteSharing = useCallback(async (data) => {
        const accessToken = await getAccessTokenSilently();
        const config = {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + accessToken,
            },
            body: JSON.stringify(data)
        };
        fetch(`${base}${routes.sharing.delete}`, config)
        .then(function (response) {
            if (response.status === 200) {
                setAlert({
                    severity: 'success',
                    message: "Sharing Deleted!"
                })
                setTimeout(() => {
                    setAlert(undefined)
                }, 3000);
                getMySharings()
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
            setOpenDeleteConfirmationModal(false)
        });
    })

    const acceptSharing = useCallback(async (data) => {
        data = {...selectedSharing , ...data}
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
        fetch(`${base}${routes.sharing.accept}`, config)
        .then(function (response) {
            if (response.status === 200) {
                setAlert({
                    severity: 'success',
                    message: "Sharing Accepted!"
                })
                setTimeout(() => {
                    setAlert(undefined)
                }, 3000);
                getAvailableSharings()
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
            setOpenAcceptConfirmationModal(false)
        });
    })

    const acceptConfirmation = (data) => {
        setSelectedSharing(data)
        setOpenAcceptConfirmationModal(true)
    }

    const deleteConfirmation = (data) => {
        setSelectedSharing(data)
        setOpenDeleteConfirmationModal(true)
    }

    useEffect(() => {
        getMySharings()
        getAvailableSharings()
        getResidences()
    }, [])

    return (
        <UserWrapper>
            {alert && <Alert className={classes.popUpAlert} severity={alert.severity}><Typography>{alert.message}</Typography></Alert>}
            <AddSharingModal
                openModal={openAddSharingModal}
                onClose={() => setOpenAddSharingModal(false)}
                residences={myResidences}
                sharings={mySharings}
                addSharingHandler={addSharing}
            />
            <AcceptSharingModal
                openModal={openAcceptConfirmationModal}
                onClose={() => setOpenAcceptConfirmationModal(false)}
                actionText="How many people would you like to stay?"
                affirmativeText="Accept"
                acceptSharingHandler={acceptSharing}
                negativeText="Decline"
                onNegative={() => setOpenAcceptConfirmationModal(false)}
            />
            <ConfirmationModal
                openModal={openDeleteConfirmationModal}
                onClose={() => setOpenDeleteConfirmationModal(false)}
                actionText="Do you want to delete this sharing?"
                affirmativeText="Yes"
                onAffirmative={() => deleteSharing(selectedSharing)}
                negativeText="No"
                onNegative={() => setOpenDeleteConfirmationModal(false)}
            />

            <Box >
                <Button
                    disabled={subPage === "Guest"}
                    className={classes.navButton}
                    variant="contained"
                    color="primary"
                    sx={{float: 'left', m: 3}}
                    onClick={() => {setSubPage("Guest")}}
                >
                    Guest
                </Button>
                <Button
                    disabled={subPage === "Host"}
                    className={classes.navButton}
                    variant="contained"
                    color="primary"
                    sx={{float: 'right', m: 3}}
                    onClick={() => {setSubPage("Host")}}
                >
                    Host
                </Button>

                {subPage === "Guest" ?
                (<Box className={classes.container} bgcolor="contentBackground.main" sx={{p: 5}}>
                    {availableSharings.map(({ sharing_id, title, name, email, min_capacity, max_capacity, county, city, address, description}, i) => (
                        <OfferBox key={`${i}_${title}`}
                            title={title}
                            name={name}
                            email={email}
                            persons={[min_capacity, max_capacity]}
                            county={county}
                            city={city}
                            address={address}
                            description={description}

                            buttonText="Accept"
                            buttonColor="primary"
                            buttonOnClick={() => {acceptConfirmation({ sharing_id })}}
                            />
                    ))}
                </Box>) : 
                (<Box className={classes.container} bgcolor="contentBackground.main" sx={{p: 5}}>
                {mySharings.map(({ sharing_id, title, name, email, min_capacity, max_capacity, county, city, address, description}, i) => (
                    <OfferBox key={`${i}_${title}`}
                        title={title}
                        name={name}
                        email={email}
                        persons={[min_capacity, max_capacity]}
                        county={county}
                        city={city}
                        address={address}
                        description={description}

                        buttonText="Delete"
                        buttonColor="secondary"
                        buttonOnClick={() => {deleteConfirmation({ sharing_id })}}
                        />
                ))}
                </Box>)}
            </Box>
            {subPage === "Host" && <Box className={classes.addButtonContainer}>
                <Button className={classes.addButton} variant="contained" sx={{borderRadius: 100}} onClick={() => setOpenAddSharingModal(true)}>
                    <Add fontSize="large" />
                </Button>
            </Box>}
        </UserWrapper>
    )
}

export default Home