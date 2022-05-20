import { Add } from '@mui/icons-material';
import { Box, Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import UserWrapper from '../../../../utils/UserWrapper'
import AddResidenceModal from '../../../modals/AddResidenceModal/AddResidenceModal';
import ConfirmationModal from '../../../modals/ConfirmationModal/ConfirmationModal';
import OfferBox from '../../../OfferBox/OfferBox';

import useStyles from './styles';

const mockMyResidences = [{
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
    'description': 'The apartment is located in the center, being about 800 meters by the sea and surrounded by various hypermarkets where you can supply at a very acceptable price.',
    'guest' : {
        'name': 'AAA BBB',
        'email': 'aaa@mail.com',
        'startDate': "12-05-2020"
    }
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
    'description': 'The apartment is located in the center, being about 800 meters by the sea and surrounded by various hypermarkets where you can supply at a very acceptable price.',
    'guest' : {
        'name': 'CCC DDD',
        'email': 'eee@mail.com',
        'startDate': "16-05-2020"
    }
}]

const MyResidences = () => {
    const classes = useStyles();
    const [residences, setResidences] = useState([])
    const [selectedResidence, setSelectedResidence] = useState(undefined)
    const [openDeleteConfirmationModal, setOpenDeleteConfirmationModal] = useState(false);
    const [openAddResidenceModal, setOpenAddResidenceModal] = useState(false);

    useEffect(() => {
        setResidences(mockMyResidences)
    }, [])

    const addResidence = (id) => {
        console.log(id)
        // reload
    }

    const leaveResidence = (id) => {
        console.log(id)
        setOpenDeleteConfirmationModal(false)
        // reload
    }
    const deleteConfirmation = (id) => {
        setSelectedResidence(id)
        setOpenDeleteConfirmationModal(true)
    }


    return (
        <UserWrapper>
            <AddResidenceModal openModal={openAddResidenceModal} onClose={() => setOpenAddResidenceModal(false)} addResidenceHandler={addResidence}/>
            <ConfirmationModal
                openModal={openDeleteConfirmationModal}
                onClose={() => setOpenDeleteConfirmationModal(false)}
                actionText="Do you want to delete this residence?"
                affirmativeText="Yes"
                onAffirmative={() => leaveResidence(selectedResidence)}
                negativeText="No"
                onNegative={() => setOpenDeleteConfirmationModal(false)}
            />
            <Box className={classes.container} bgcolor="contentBackground.main" sx={{p: 5}}>
                {residences.map(({ title, name, email, minPersons, maxPersons, county, city, address, description, guest}, i) => (
                    guest ?
                    <OfferBox key={`${i}_${title}`}
                        title={title}
                        name={name}
                        email={email}
                        persons={[minPersons, maxPersons]}
                        county={county}
                        city={city}
                        address={address}
                        description={description}
                        infoLines={[`Occupied by Me ${guest.name} (${guest.email})`, `On ${guest.startDate}`]}
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
                        infoLines={["Free"]}

                        buttonText="Delete"
                        buttonColor="secondary"
                        buttonOnClick={() => {deleteConfirmation(title)}}
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