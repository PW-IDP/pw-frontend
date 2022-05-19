import { Box, Button, Paper, Typography } from '@mui/material'
import React from 'react'

import useStyles from './styles';


const OfferBox = ({ title, name, email, persons, county, city, address, description, infoLines, buttonText, buttonColor, buttonOnClick }) => {
    const classes = useStyles();

    return (
        <Box className={classes.offer} borderRadius={1} bgcolor="content.main">
            <Typography sx={{mb: 4}}>{title}</Typography>
            <Typography sx={{mb: 4}}>{`${name} (${email})`}</Typography>
            <Typography sx={{mb: 4}}>Persons to be hosted: {persons[0] == persons[1] ? persons[0] : `${persons[0]}-${persons[1]}`}</Typography>
            <Typography sx={{mb: 4}}>County {county}, City {city}</Typography>
            <Typography sx={{mb: 4}}>Address: {address}</Typography>
            <Typography sx={{mt: 8}}>{description}</Typography>
            <Box sx={{mt: 8, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', pl: 10, pr: 20, height: 70}}  borderRadius={1} bgcolor="section.main">
                <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                    {infoLines && infoLines.map((line, i) => (
                        <Typography key={`${i}_Typography`}>{line}</Typography>
                    ))}
                </Box>
                <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                    {buttonText && <Button sx={{width:80, height: 40}} color={buttonColor} variant='contained' onClick={buttonOnClick}>{buttonText}</Button>}
                </Box>
            </Box>
        </Box>
    )
}

export default OfferBox