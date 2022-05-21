import { Box, Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import OfferBox from '../../../OfferBox/OfferBox';

import useStyles from './styles';
import ConfirmationModal from '../../../modals/ConfirmationModal/ConfirmationModal';
import AdminWrapper from '../../../../utils/AdminWrapper';

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
    const [sharings, setSharings] = useState([])
    const [selectedSharings, setSelectedSharings] = useState(undefined)
    const [openDeleteConfirmationModal, setOpenDeleteConfirmationModal] = useState(false);

    useEffect(() => {
        setSharings(mockOffers)
    }, [])


    const deleteOffer = (id) => {
        console.log(id)
        setOpenDeleteConfirmationModal(false)
        // reload
    }

    const deleteConfirmation = (id) => {
        setSelectedSharings(id)
        setOpenDeleteConfirmationModal(true)
    }


    return (
        <AdminWrapper>
            <ConfirmationModal
                openModal={openDeleteConfirmationModal}
                onClose={() => setOpenDeleteConfirmationModal(false)}
                actionText="Do you want to delete this offer?"
                affirmativeText="Yes"
                onAffirmative={() => deleteOffer(selectedSharings)}
                negativeText="No"
                onNegative={() => setOpenDeleteConfirmationModal(false)}
            />

            <Box className={classes.container} bgcolor="contentBackground.main" sx={{p: 5}}>
                {sharings.map(({ title, name, email, min_capacity, maxPersons, county, city, address, description}, i) => (
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
                        buttonOnClick={() => {deleteConfirmation({title})}}
                        />
                ))}
            </Box>
        </AdminWrapper>
    )
}

export default AvailableSharings