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
}, {
    'title': 'Offer title',
    'name': 'FirstName LastName',
    'email': 'email@mail.com',
    'minPersons': 3,
    'maxPersons': 5,
    'county': 'Constanta',
    'city': 'Mangalia',
    'address': 'St. Xyz, no. 123, Bl. Q2, Ap. 12',
    'description': 'The apartment is located in the center, being about 800 meters by the sea and surrounded by various hypermarkets where you can supply at a very acceptable price.'
}, {
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

const mockMyOffers = [{
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
{
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
{
    'title': 'Offer title',
    'name': 'FirstName LastName',
    'email': 'email@mail.com',
    'minPersons': 3,
    'maxPersons': 5,
    'county': 'Constanta',
    'city': 'Mangalia',
    'address': 'St. Xyz, no. 123, Bl. Q2, Ap. 12',
    'description': 'The apartment is located in the center, being about 800 meters by the sea and surrounded by various hypermarkets where you can supply at a very acceptable price.'
}
]


const Home = () => {
    const classes = useStyles();
    const [offers, setOffers] = useState([])
    const [myOffers, setMyOffers] = useState([])
    const [selectedOffer, setSelectedOffer] = useState(undefined)
    const [openAddOfferModal, setOpenAddOfferModal] = useState(false);
    const [openAcceptConfirmationModal, setOpenAcceptConfirmationModal] = useState(false);
    const [openDeleteConfirmationModal, setOpenDeleteConfirmationModal] = useState(false);
    const [subPage, setSubPage] = useState("Guest")

    useEffect(() => {
        setOffers(mockOffers)
        setMyOffers(mockMyOffers)
    }, [])

    const acceptOffer = (id) => {
        console.log(id)
        setOpenAcceptConfirmationModal(false)
        // reload
    }

    const acceptConfirmation = (id) => {
        setSelectedOffer(id)
        setOpenAcceptConfirmationModal(true)
    }

    const deleteOffer = (id) => {
        console.log(id)
        setOpenDeleteConfirmationModal(false)
        // reload
    }

    const deleteConfirmation = (id) => {
        setSelectedOffer(id)
        setOpenDeleteConfirmationModal(true)
    }

    const addOffer = (data) => {
        console.log(data)
    }

    return (
        <UserWrapper>
            <AddOfferModal openModal={openAddOfferModal} onClose={() => setOpenAddOfferModal(false)} addOfferHandler={addOffer}/>
            <ConfirmationModal
                openModal={openAcceptConfirmationModal}
                onClose={() => setOpenAcceptConfirmationModal(false)}
                actionText="Do you want to accept this offer?"
                affirmativeText="Yes"
                onAffirmative={() => acceptOffer(selectedOffer)}
                negativeText="No"
                onNegative={() => setOpenAcceptConfirmationModal(false)}
            />
            <ConfirmationModal
                openModal={openDeleteConfirmationModal}
                onClose={() => setOpenDeleteConfirmationModal(false)}
                actionText="Do you want to delete this offer?"
                affirmativeText="Yes"
                onAffirmative={() => deleteOffer(selectedOffer)}
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
                            buttonOnClick={() => {acceptConfirmation(title)}}
                            />
                    ))}
                </Box>) : 
                (<Box className={classes.container} bgcolor="contentBackground.main" sx={{p: 5}}>
                {myOffers.map(({ title, name, email, minPersons, maxPersons, county, city, address, description, startDate, endDate}, i) => (
                    <OfferBox key={`${i}_${title}`}
                        title={title}
                        name={name}
                        email={email}
                        persons={[minPersons, maxPersons]}
                        county={county}
                        city={city}
                        address={address}
                        description={description}

                        buttonText="Delete"
                        buttonColor="secondary"
                        buttonOnClick={() => {deleteConfirmation(title)}}
                        />
                ))}
                </Box>)}
            </Box>
            {subPage === "Host" && <Box className={classes.addButtonContainer}>
                <Button className={classes.addButton} variant="contained" sx={{borderRadius: 100}} onClick={() => setOpenAddOfferModal(true)}>
                    <Add fontSize="large" />
                </Button>
            </Box>}
        </UserWrapper>
    )
}

export default Home