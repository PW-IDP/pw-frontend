import { Box, Alert, Typography, Button } from '@mui/material'
import React, { useCallback, useEffect, useState } from 'react'
import OfferBox from '../../../OfferBox/OfferBox';
import { useAuth0 } from '@auth0/auth0-react';

import useStyles from './styles';
import ConfirmationModal from '../../../modals/ConfirmationModal/ConfirmationModal';
import AdminWrapper from '../../../../utils/AdminWrapper';
import { base, routes } from '../../../../utils/api/routes';
import { authSettings } from '../../../../common/AuthSettings';

const mockOffers = [{
    'title': 'Offer title',
    'name': 'FirstName LastName',
    'email': 'email@mail.com',
    'min_capacity': 3,
    'maxPersons': 5,
    'county': 'Constanta',
    'city': 'Mangalia',
    'address': 'St. Xyz, no. 123, Bl. Q2, Ap. 12',
    'description': 'The apartment is located in the center, being about 800 meters by the sea and surrounded by various hypermarkets where you can supply at a very acceptable price.'
}, {
    'title': 'Offer title',
    'name': 'FirstName LastName',
    'email': 'email@mail.com',
    'min_capacity': 3,
    'maxPersons': 5,
    'county': 'Constanta',
    'city': 'Mangalia',
    'address': 'St. Xyz, no. 123, Bl. Q2, Ap. 12',
    'description': 'The apartment is located in the center, being about 800 meters by the sea and surrounded by various hypermarkets where you can supply at a very acceptable price.'
}, {
    'title': 'Offer title',
    'name': 'FirstName LastName',
    'email': 'email@mail.com',
    'min_capacity': 3,
    'maxPersons': 5,
    'county': 'Constanta',
    'city': 'Mangalia',
    'address': 'St. Xyz, no. 123, Bl. Q2, Ap. 12',
    'description': 'The apartment is located in the center, being about 800 meters by the sea and surrounded by various hypermarkets where you can supply at a very acceptable price.'
},{
    'title': 'Offer title',
    'name': 'FirstName LastName',
    'email': 'email@mail.com',
    'min_capacity': 3,
    'maxPersons': 5,
    'county': 'Constanta',
    'city': 'Mangalia',
    'address': 'St. Xyz, no. 123, Bl. Q2, Ap. 12',
    'description': 'The apartment is located in the center, being about 800 meters by the sea and surrounded by various hypermarkets where you can supply at a very acceptable price.'
},{
    'title': 'Offer title',
    'name': 'FirstName LastName',
    'email': 'email@mail.com',
    'min_capacity': 3,
    'maxPersons': 5,
    'county': 'Constanta',
    'city': 'Mangalia',
    'address': 'St. Xyz, no. 123, Bl. Q2, Ap. 12',
    'description': 'The apartment is located in the center, being about 800 meters by the sea and surrounded by various hypermarkets where you can supply at a very acceptable price.'
},
]


const AvailableSharings = () => {
    const classes = useStyles();
    const [availableSharings, setAvailableSharings] = useState([])
    const [selectedSharings, setSelectedSharings] = useState(undefined)
    const [openDeleteConfirmationModal, setOpenDeleteConfirmationModal] = useState(false);
    const [alert, setAlert] = useState(undefined)

    const { getAccessTokenSilently } = useAuth0();

    const deleteSharing = useCallback(async (data) => {
        console.log(data)
        const accessToken = await getAccessTokenSilently({
            audience: authSettings.audience,
            scope: 'project:admin'
        });
        const config = {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + accessToken,
            },
            body: JSON.stringify(data)
        };
        fetch(`${base}${routes.user.admin.sharingDelete}`, config)
        .then(function (response) {
            if (response.status === 200) {
                setAlert({
                    severity: 'success',
                    message: "Sharing Deleted!"
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
            setOpenDeleteConfirmationModal(false)
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
    useEffect(() => {
        getAvailableSharings(mockOffers)
    }, [])

    const deleteConfirmation = (id) => {
        setSelectedSharings(id)
        setOpenDeleteConfirmationModal(true)
    }


    return (
        <AdminWrapper>
            {alert && <Alert className={classes.popUpAlert} severity={alert.severity}><Typography>{alert.message}</Typography></Alert>}
            <ConfirmationModal
                openModal={openDeleteConfirmationModal}
                onClose={() => setOpenDeleteConfirmationModal(false)}
                actionText="Do you want to delete this offer?"
                affirmativeText="Yes"
                onAffirmative={() => deleteSharing(selectedSharings)}
                negativeText="No"
                onNegative={() => setOpenDeleteConfirmationModal(false)}
            />

            <Box className={classes.container} bgcolor="contentBackground.main" sx={{p: 5}}>
                {availableSharings.map(({ sharing_id, title, name, email, min_capacity, maxPersons, county, city, address, description}, i) => (
                    <OfferBox key={`${i}_${title}`}
                        title={title}
                        name={name}
                        email={email}
                        persons={[min_capacity, maxPersons]}
                        county={county}
                        city={city}
                        address={address}
                        description={description}

                        buttonText="Delete"
                        buttonColor="secondary"
                        buttonOnClick={() => {deleteConfirmation({sharing_id})}}
                        />
                ))}
            </Box>
        </AdminWrapper>
    )
}

export default AvailableSharings