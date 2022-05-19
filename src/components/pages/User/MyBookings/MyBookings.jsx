import { Add } from '@mui/icons-material';
import { Box, Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import OfferBox from '../../../OfferBox/OfferBox';
import UserWrapper from '../../../../utils/UserWrapper'

import useStyles from './styles';

const mockBookings = [{
    'title': 'Offer title',
    'name': 'FirstName LastName',
    'email': 'email@mail.com',
    'minPersons': 3,
    'maxPersons': 5,
    'county': 'Constanta',
    'city': 'Mangalia',
    'address': 'St. Xyz, no. 123, Bl. Q2, Ap. 12',
    'description': 'The apartment is located in the center, being about 800 meters by the sea and surrounded by various hypermarkets where you can supply at an acceptable price.',
    'startDate': "12-05-2022"
},{
    'title': 'Offer title',
    'name': 'FirstName LastName',
    'email': 'email@mail.com',
    'minPersons': 3,
    'maxPersons': 5,
    'county': 'Constanta',
    'city': 'Mangalia',
    'address': 'St. Xyz, no. 123, Bl. Q2, Ap. 12',
    'description': 'The apartment is located in the center, being about 800 meters by the sea and surrounded by various hypermarkets where you can supply at an acceptable price.',
    'startDate': '01-05-2022',
    'endDate': '12-05-2022'
},{
    'title': 'Offer title',
    'name': 'FirstName LastName',
    'email': 'email@mail.com',
    'minPersons': 3,
    'maxPersons': 5,
    'county': 'Constanta',
    'city': 'Mangalia',
    'address': 'St. Xyz, no. 123, Bl. Q2, Ap. 12',
    'description': 'The apartment is located in the center, being about 800 meters by the sea and surrounded by various hypermarkets where you can supply at an acceptable price.',
    'startDate': '01-05-2022',
    'endDate': '12-05-2022'
},{
    'title': 'Offer title',
    'name': 'FirstName LastName',
    'email': 'email@mail.com',
    'minPersons': 3,
    'maxPersons': 5,
    'county': 'Constanta',
    'city': 'Mangalia',
    'address': 'St. Xyz, no. 123, Bl. Q2, Ap. 12',
    'description': 'The apartment is located in the center, being about 800 meters by the sea and surrounded by various hypermarkets where you can supply at an acceptable price.',
    'startDate': '01-05-2022',
    'endDate': '12-05-2022'
},
]


const Home = () => {
    const classes = useStyles();
    const [bookings, setBookings] = useState([])

    useEffect(() => {
        setBookings(mockBookings)
    }, [])

    const leaveResidence = (id, email) => {
        console.log(id, email)
    }

    return (
        <UserWrapper>
            <Box className={classes.container} bgcolor="contentBackground.main" sx={{p: 5}}>
                {bookings.map(({ title, name, email, minPersons, maxPersons, county, city, address, description, startDate, endDate}, i) => (
                    endDate ?
                    <OfferBox key={`${i}_${title}`}
                        title={title}
                        name={name}
                        email={email}
                        persons={[minPersons, maxPersons]}
                        county={county}
                        city={city}
                        address={address}
                        description={description}
                        infoLines={["Occupied by Me", `From ${startDate} Until ${endDate}`]}
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
                        infoLines={["Occupied by Me", `On ${startDate}`]}

                        buttonText="Leave"
                        buttonColor="secondary"
                        buttonOnClick={() => {leaveResidence(title, email)}}
                        />
                ))}
            </Box>
        </UserWrapper>
    )
}

export default Home