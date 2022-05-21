import { useAuth0 } from '@auth0/auth0-react';
import { Add } from '@mui/icons-material';
import { Alert, Box, Button, Typography } from '@mui/material'
import React, { useCallback, useEffect, useState } from 'react'
import { base, routes } from '../../../../utils/api/routes';
import UserWrapper from '../../../../utils/UserWrapper'
import AddResidenceModal from '../../../modals/AddResidenceModal/AddResidenceModal';
import ConfirmationModal from '../../../modals/ConfirmationModal/ConfirmationModal';
import ResidenceBox from '../../../ResidenceBox/ResidenceBox';

import useStyles from './styles';

const MyResidences = () => {
    const classes = useStyles();
    const [myResidences, setMyResidences] = useState([])
    const [selectedResidence, setSelectedResidence] = useState(undefined)
    const [openDeleteConfirmationModal, setOpenDeleteConfirmationModal] = useState(false);
    const [openAddResidenceModal, setOpenAddResidenceModal] = useState(false);
    const { getAccessTokenSilently } = useAuth0();
    const [alert, setAlert] = useState(undefined)

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

    const addResidence = useCallback(async (data) => {
        console.log(data)
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
        fetch(`${base}${routes.residence.add}`, config)
        .then(function (response) {
            if (response.status === 201) {
                setAlert({
                    severity: 'success',
                    message: "Residence Added!"
                })
                setTimeout(() => {
                    setAlert(undefined)
                }, 3000);
                getResidences()
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
            setOpenAddResidenceModal(false)
        });
    })

    const deleteResidence = useCallback(async (data) => {
        console.log(data)
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
        fetch(`${base}${routes.residence.delete}`, config)
        .then(function (response) {
            if (response.status === 200) {
                setAlert({
                    severity: 'success',
                    message: "Residence Deleted!"
                })
                setTimeout(() => {
                    setAlert(undefined)
                }, 3000);
                getResidences()
            }
        })
        .catch(function (error) {
            console.log("ERROR:", error);
            setAlert({
                severity: 'error',
                message: error
            })
            setTimeout(() => {
                setAlert(undefined)
            }, 3000);
        })
        .finally(function () {
            setOpenDeleteConfirmationModal(false)
        });
    })

    const deleteConfirmation = (id) => {
        setSelectedResidence(id)
        setOpenDeleteConfirmationModal(true)
    }

    useEffect(() => {
        getResidences()
    }, [])

    return (
        <UserWrapper>
            {alert && <Alert className={classes.popUpAlert} severity={alert.severity}><Typography>{alert.message}</Typography></Alert>}
            <AddResidenceModal openModal={openAddResidenceModal} onClose={() => setOpenAddResidenceModal(false)} addResidenceHandler={addResidence}/>
            <ConfirmationModal
                openModal={openDeleteConfirmationModal}
                onClose={() => setOpenDeleteConfirmationModal(false)}
                actionText="Do you want to delete this residence?"
                affirmativeText="Yes"
                onAffirmative={() => deleteResidence(selectedResidence)}
                negativeText="No"
                onNegative={() => setOpenDeleteConfirmationModal(false)}
            />
            <Box className={classes.container} bgcolor="contentBackground.main" sx={{p: 5}}>
                {myResidences.map(({ residence_id, name, min_capacity, max_capacity, county, city, address, description, guest}, i) => (
                    guest ?
                    <ResidenceBox
                        key={`${i}_${name}`}
                        name={name}
                        persons={[min_capacity, max_capacity]}
                        county={county}
                        city={city}
                        address={address}
                        description={description}
                        infoLines={[`Occupied by ${guest.name} (${guest.email})`, `On ${guest.start_datetime.slice(0, 10)}`]}
                    />
                    :
                    <ResidenceBox
                        key={`${i}_${name}`}
                        name={name}
                        persons={[min_capacity, max_capacity]}
                        county={county}
                        city={city}
                        address={address}
                        description={description}
                        infoLines={["Free"]}

                        buttonText="Delete"
                        buttonColor="secondary"
                        buttonOnClick={() => {deleteConfirmation({residence_id})}}
                    />
                ))}
            </Box>
            <Box className={classes.addButtonContainer}>
                <Button className={classes.addButton} variant="contained" sx={{borderRadius: 100}} onClick={() => setOpenAddResidenceModal(true)}>
                    <Add fontSize="large" />
                </Button>
            </Box>
        </UserWrapper>
    )
}

export default MyResidences