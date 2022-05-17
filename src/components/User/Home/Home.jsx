import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import OfferBox from '../../../utils/OfferBox/OfferBox';
import UserWrapper from '../../../utils/UserWrapper'

import useStyles from './styles';

const mockOffers = [{
    'title': 'Offer title',
    'name': 'FirstName LastName',
    'email': 'email@mail.com',
    'persons': [3, 5],
    'county': 'Constanta',
    'city': 'Mangalia',
    'address': 'St. Xyz, no. 123, Bl. Q2, Ap. 12',
    'description': 'The apartment is located in the center, being about 800 meters by the sea and surrounded by various hypermarkets where you can supply at an acceptable price.'
},{
    'title': 'Offer title',
    'name': 'FirstName LastName',
    'email': 'email@mail.com',
    'persons': [3, 5],
    'county': 'Constanta',
    'city': 'Mangalia',
    'address': 'St. Xyz, no. 123, Bl. Q2, Ap. 12',
    'description': 'The apartment is located in the center, being about 800 meters by the sea and surrounded by various hypermarkets where you can supply at an acceptable price.'
},{
    'title': 'Offer title',
    'name': 'FirstName LastName',
    'email': 'email@mail.com',
    'persons': [3, 5],
    'county': 'Constanta',
    'city': 'Mangalia',
    'address': 'St. Xyz, no. 123, Bl. Q2, Ap. 12',
    'description': 'The apartment is located in the center, being about 800 meters by the sea and surrounded by various hypermarkets where you can supply at an acceptable price.'
},{
    'title': 'Offer title',
    'name': 'FirstName LastName',
    'email': 'email@mail.com',
    'persons': [3, 5],
    'county': 'Constanta',
    'city': 'Mangalia',
    'address': 'St. Xyz, no. 123, Bl. Q2, Ap. 12',
    'description': 'The apartment is located in the center, being about 800 meters by the sea and surrounded by various hypermarkets where you can supply at an acceptable price.'
},{
    'title': 'Offer title',
    'name': 'FirstName LastName',
    'email': 'email@mail.com',
    'persons': [3, 5],
    'county': 'Constanta',
    'city': 'Mangalia',
    'address': 'St. Xyz, no. 123, Bl. Q2, Ap. 12',
    'description': 'The apartment is located in the center, being about 800 meters by the sea and surrounded by various hypermarkets where you can supply at an acceptable price.'
},
]


const Home = () => {
    const classes = useStyles();
    const [offers, setOffers] = useState([])

    useEffect(() => {
        setOffers(mockOffers)
    }, [])

    const acceptOffer = (id, email) => {
        console.log(id, email)
    }

    return (
        <UserWrapper>
            <Box className={classes.container} bgcolor="primary.main">
                {offers.map(({ title, name, email, persons, county, city, address, description}, i) => (
                    <OfferBox key={`${i}_${title}`}
                        title={title}
                        name={name}
                        email={email}
                        persons={persons}
                        county={county}
                        city={city}
                        address={address}
                        description={description}
                        buttonText="Accept"
                        buttonOnClick={() => {acceptOffer(title, email)}}
                        />
                ))}
            </Box>
        </UserWrapper>
    )
}

export default Home