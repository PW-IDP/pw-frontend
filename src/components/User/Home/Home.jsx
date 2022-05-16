import { Box, Paper, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import UserWrapper from '../../../utils/UserWrapper'

import useStyles from './styles';

const mockOffers = [{
    'title': 'Offer title',
    'persons': [3, 5],
    'county': 'Constanta',
    'city': 'Mangalia',
    'address': 'St. Xyz, no. 123, Bl. Q2, Ap. 12',
    'description': 'The apartment is located in the center, being about 800 meters by the sea and surrounded by various hypermarkets where you can supply at an acceptable price.'
},{
    'title': 'Offer title',
    'persons': [3, 5],
    'county': 'Constanta',
    'city': 'Mangalia',
    'address': 'St. Xyz, no. 123, Bl. Q2, Ap. 12',
    'description': 'The apartment is located in the center, being about 800 meters by the sea and surrounded by various hypermarkets where you can supply at an acceptable price.'
},{
    'title': 'Offer title',
    'persons': [3, 5],
    'county': 'Constanta',
    'city': 'Mangalia',
    'address': 'St. Xyz, no. 123, Bl. Q2, Ap. 12',
    'description': 'The apartment is located in the center, being about 800 meters by the sea and surrounded by various hypermarkets where you can supply at an acceptable price.'
},{
    'title': 'Offer title',
    'persons': [3, 5],
    'county': 'Constanta',
    'city': 'Mangalia',
    'address': 'St. Xyz, no. 123, Bl. Q2, Ap. 12',
    'description': 'The apartment is located in the center, being about 800 meters by the sea and surrounded by various hypermarkets where you can supply at an acceptable price.'
},{
    'title': 'Offer title',
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

    return (
        <UserWrapper>
            <Box className={classes.container} bgcolor="primary.main">
                {offers.map(({ title, persons, county, city, address, description}, i) => (
                    <Paper className={classes.offer} key={`${i}_${title}`}>
                        <Typography sx={{mb: 4}}>{title}</Typography>
                        <Typography sx={{mb: 4}}>Persons to be hosted: {persons[0] == persons[1] ? persons[0] : `${persons[0]}-${persons[1]}`}</Typography>
                        <Typography sx={{mb: 4}}>County {county}, City {city}</Typography>
                        <Typography sx={{mb: 4}}>Address: {address}</Typography>
                        <Typography sx={{mt: 8}}>{description}</Typography>
                    </Paper>
                ))}
            </Box>
        </UserWrapper>
    )
}

export default Home