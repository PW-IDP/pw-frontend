import { Add } from '@mui/icons-material';
import { Box, Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import OfferBox from '../../../OfferBox/OfferBox';
import UserWrapper from '../../../../utils/UserWrapper'

import useStyles from './styles';
import ConfirmationModal from '../../../modals/ConfirmationModal/ConfirmationModal';

const mockBookings = [{
    'title': 'Offer title',
    'name': 'FirstName LastName',
    'email': 'email@mail.com',
    'minPersons': 3,
    'maxPersons': 5,
    'county': 'Constanta',
    'city': 'Mangalia',
    'address': 'St. Xyz, no. 123, Bl. Q2, Ap. 12',
    'description': 'The apartment is located in the center, being about 800 meters by the sea and surrounded by various hypermarkets where you can supply at a very acceptable price.',
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
    'description': 'The apartment is located in the center, being about 800 meters by the sea and surrounded by various hypermarkets where you can supply at a very acceptable price.',
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
    'description': 'The apartment is located in the center, being about 800 meters by the sea and surrounded by various hypermarkets where you can supply at a very acceptable price.',
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
    'description': 'The apartment is located in the center, being about 800 meters by the sea and surrounded by various hypermarkets where you can supply at a very acceptable price.',
    'startDate': '01-05-2022',
    'endDate': '12-05-2022'
},
]


const Home = () => {
    const classes = useStyles();
    const [bookings, setBookings] = useState([])
    const [selectedOffer, setSelectedOffer] = useState(undefined)
    const [openConfirmationModal, setOpenConfirmationModal] = useState(false);

    useEffect(() => {
        // Should be sorted by startDate first
        setBookings(mockBookings)
    }, [])

    const leaveResidence = (id) => {
        console.log(id)
        setOpenConfirmationModal(false)
        // reload
    }
    const leaveConfirmation = (id) => {
        setSelectedOffer(id)
        setOpenConfirmationModal(true)
    }

    return (
        <UserWrapper>
            <ConfirmationModal
                openModal={openConfirmationModal}
                onClose={() => setOpenConfirmationModal(false)}
                actionText="Do you want to leave this residence?"
                affirmativeText="Yes"
                onAffirmative={() => leaveResidence(selectedOffer)}
                negativeText="No"
                onNegative={() => setOpenConfirmationModal(false)}
            />
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
                        buttonOnClick={() => {leaveConfirmation(title)}}
                        />
                ))}
            </Box>
        </UserWrapper>
    )
}

export default Home