import { Add } from '@mui/icons-material';
import { Box, Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import OfferBox from '../../../OfferBox/OfferBox';
import UserWrapper from '../../../../utils/UserWrapper'
import AddOfferModal from '../../../modals/AddOfferModal/AddOfferModal';

import useStyles from './styles';
import ConfirmationModal from '../../../modals/ConfirmationModal/ConfirmationModal';

const mockOffers = [{
    'title': 'Offer title',
    'name': 'FirstName LastName',
    'email': 'email@mail.com',
    'minPersons': 3,
    'maxPersons': 5,
    'county': 'Constanta',
    'city': 'Mangalia',
    'address': 'St. Xyz, no. 123, Bl. Q2, Ap. 12',
    'description': 'The apartment is located in the center, being about 800 meters by the sea and surrounded by various hypermarkets where you can supply at a very acceptable price.'
},{
    'title': 'Offer title',
    'name': 'FirstName LastName',
    'email': 'email@mail.com',
    'minPersons': 3,
    'maxPersons': 5,
    'county': 'Constanta',
    'city': 'Mangalia',
    'address': 'St. Xyz, no. 123, Bl. Q2, Ap. 12',
    'description': 'The apartment is located in the center, being about 800 meters by the sea and surrounded by various hypermarkets where you can supply at a very acceptable price.'
},{
    'title': 'Offer title',
    'name': 'FirstName LastName',
    'email': 'email@mail.com',
    'minPersons': 3,
    'maxPersons': 5,
    'county': 'Constanta',
    'city': 'Mangalia',
    'address': 'St. Xyz, no. 123, Bl. Q2, Ap. 12',
    'description': 'The apartment is located in the center, being about 800 meters by the sea and surrounded by various hypermarkets where you can supply at a very acceptable price.'
},{
    'title': 'Offer title',
    'name': 'FirstName LastName',
    'email': 'email@mail.com',
    'minPersons': 3,
    'maxPersons': 5,
    'county': 'Constanta',
    'city': 'Mangalia',
    'address': 'St. Xyz, no. 123, Bl. Q2, Ap. 12',
    'description': 'The apartment is located in the center, being about 800 meters by the sea and surrounded by various hypermarkets where you can supply at a very acceptable price.'
},{
    'title': 'Offer title',
    'name': 'FirstName LastName',
    'email': 'email@mail.com',
    'minPersons': 3,
    'maxPersons': 5,
    'county': 'Constanta',
    'city': 'Mangalia',
    'address': 'St. Xyz, no. 123, Bl. Q2, Ap. 12',
    'description': 'The apartment is located in the center, being about 800 meters by the sea and surrounded by various hypermarkets where you can supply at a very acceptable price.'
},
]


const Home = () => {
    const classes = useStyles();
    const [offers, setOffers] = useState([])
    const [selectedOffer, setSelectedOffer] = useState(undefined)
    const [openAddOfferModal, setOpenAddOfferModal] = useState(false);
    const [openConfirmationModal, setOpenConfirmationModal] = useState(false);

    useEffect(() => {
        setOffers(mockOffers)
    }, [])

    const acceptOffer = (id) => {
        console.log(id)
        setOpenConfirmationModal(false)
        // reload
    }

    const offerConfirmation = (id) => {
        setSelectedOffer(id)
        setOpenConfirmationModal(true)
    }

    const addOffer = (data) => {
        console.log(data)
    }

    return (
        <UserWrapper>
            <AddOfferModal openModal={openAddOfferModal} onClose={() => setOpenAddOfferModal(false)} addOfferHandler={addOffer}/>
            <ConfirmationModal
                openModal={openConfirmationModal}
                onClose={() => setOpenConfirmationModal(false)}
                actionText="Do you want to accept this offer?"
                affirmativeText="Yes"
                onAffirmative={() => acceptOffer(selectedOffer)}
                negativeText="No"
                onNegative={() => setOpenConfirmationModal(false)}
            />
            <Box className={classes.container} bgcolor="contentBackground.main" sx={{p: 5}}>
                {offers.map(({ title, name, email, minPersons, maxPersons, county, city, address, description}, i) => (
                    <OfferBox key={`${i}_${title}`}
                        title={title}
                        name={name}
                        email={email}
                        persons={[minPersons, maxPersons]}
                        county={county}
                        city={city}
                        address={address}
                        description={description}

                        buttonText="Accept"
                        buttonColor="primary"
                        buttonOnClick={() => {offerConfirmation(title)}}
                        />
                ))}
            </Box>
            <div className={classes.addButtonContainer}>
                <Button className={classes.addButton} variant="contained" sx={{borderRadius: 100}} onClick={() => setOpenAddOfferModal(true)}>
                    <Add fontSize="large" />
                </Button>
            </div>
        </UserWrapper>
    )
}

export default Home