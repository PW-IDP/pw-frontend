import { Box, Button, Paper, Typography } from '@mui/material'
import React from 'react'

import useStyles from './styles';


const OfferBox = ({ title, name, email, persons, county, city, address, description, infoLines, buttonText, buttonOnClick }) => {
    const classes = useStyles();

    return (
        <Paper className={classes.offer}>
            <Typography sx={{mb: 4}}>{title}</Typography>
            <Typography sx={{mb: 4}}>{`${name} (${email})`}</Typography>
            <Typography sx={{mb: 4}}>Persons to be hosted: {persons[0] == persons[1] ? persons[0] : `${persons[0]}-${persons[1]}`}</Typography>
            <Typography sx={{mb: 4}}>County {county}, City {city}</Typography>
            <Typography sx={{mb: 4}}>Address: {address}</Typography>
            <Typography sx={{mt: 8}}>{description}</Typography>
            <Box sx={{mt: 8, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', py: 4, pl: 10, pr: 20}} bgcolor="blue">
                <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                    {infoLines && infoLines.map((line, i) => (
                        <Typography key={`${i}_Typography`}>{line}</Typography>
                    ))}
                </Box>
                <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                    {buttonText && <Button sx={{width:80, height: 40}} variant='contained' onClick={buttonOnClick}>Accept</Button>}
                </Box>
            </Box>
        </Paper>
    )
}

export default OfferBox