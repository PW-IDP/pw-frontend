import { Add } from '@mui/icons-material';
import { Box, Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import OfferBox from '../../../OfferBox/OfferBox';
import UserWrapper from '../../../../utils/UserWrapper'
import AddOfferForm from '../../../modals/AddOfferForm/AddOfferModal';

import useStyles from './styles';

const mockOffers = [{
    'title': 'Offer title',
    'name': 'FirstName LastName',
    'email': 'email@mail.com',
    'minPersons': 3,
    'maxPersons': 5,
    'county': 'Constanta',
    'city': 'Mangalia',
    'address': 'St. Xyz, no. 123, Bl. Q2, Ap. 12',
    'description': 'The apartment is located in the center, being about 800 meters by the sea and surrounded by various hypermarkets where you can supply at an acceptable price.'
},{
    'title': 'Offer title',
    'name': 'FirstName LastName',
    'email': 'email@mail.com',
    'minPersons': 3,
    'maxPersons': 5,
    'county': 'Constanta',
    'city': 'Mangalia',
    'address': 'St. Xyz, no. 123, Bl. Q2, Ap. 12',
    'description': 'The apartment is located in the center, being about 800 meters by the sea and surrounded by various hypermarkets where you can supply at an acceptable price.'
},{
    'title': 'Offer title',
    'name': 'FirstName LastName',
    'email': 'email@mail.com',
    'minPersons': 3,
    'maxPersons': 5,
    'county': 'Constanta',
    'city': 'Mangalia',
    'address': 'St. Xyz, no. 123, Bl. Q2, Ap. 12',
    'description': 'The apartment is located in the center, being about 800 meters by the sea and surrounded by various hypermarkets where you can supply at an acceptable price.'
},{
    'title': 'Offer title',
    'name': 'FirstName LastName',
    'email': 'email@mail.com',
    'minPersons': 3,
    'maxPersons': 5,
    'county': 'Constanta',
    'city': 'Mangalia',
    'address': 'St. Xyz, no. 123, Bl. Q2, Ap. 12',
    'description': 'The apartment is located in the center, being about 800 meters by the sea and surrounded by various hypermarkets where you can supply at an acceptable price.'
},{
    'title': 'Offer title',
    'name': 'FirstName LastName',
    'email': 'email@mail.com',
    'minPersons': 3,
    'maxPersons': 5,
    'county': 'Constanta',
    'city': 'Mangalia',
    'address': 'St. Xyz, no. 123, Bl. Q2, Ap. 12',
    'description': 'The apartment is located in the center, being about 800 meters by the sea and surrounded by various hypermarkets where you can supply at an acceptable price.'
},
]


const Home = () => {
    const classes = useStyles();
    const [openModal, setOpenModal] = useState(false);
    const [offers, setOffers] = useState([])

    useEffect(() => {
        setOffers(mockOffers)
    }, [])

    const acceptOffer = (id, email) => {
        console.log(id, email)
    }

    const addOffer = (data) => {
        console.log(data)
    }

    return (
        <UserWrapper>
            <AddOfferForm openModal={openModal} onClose={() => setOpenModal(false)} addOfferHandler={addOffer}/>
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
                        buttonOnClick={() => {acceptOffer(title, email)}}
                        />
                ))}
            </Box>
            <div className={classes.addButtonContainer}>
                <Button className={classes.addButton} variant="contained" sx={{borderRadius: 100}} onClick={() => setOpenModal(true)}>
                    <Add fontSize="large" />
                </Button>
            </div>
        </UserWrapper>
    )
}

export default Home