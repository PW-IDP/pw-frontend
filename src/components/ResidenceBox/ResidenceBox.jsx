import { Box, Button, Paper, Typography } from '@mui/material'
import React from 'react'

import useStyles from './styles';


const ResidenceBox = ({ name, persons, county, city, address, infoLines, buttonText, buttonColor, buttonOnClick }) => {
    const classes = useStyles();

    return (
        <Box className={classes.offer} borderRadius={1} bgcolor="content.main">
            <Box sx={{ml: 1}}>
                <Typography sx={{mb: 4}} lineHeight='22px'>{name}</Typography>
                <Typography sx={{mb: 4}} lineHeight='22px'>Persons to be hosted: {persons[0] == persons[1] ? persons[0] : `${persons[0]}-${persons[1]}`}</Typography>
                <Typography sx={{mb: 4}} lineHeight='22px'>County {county}, City {city}</Typography>
                <Typography sx={{mb: 4}} lineHeight='22px'>Address: {address}</Typography>
            </Box>
            <Box sx={{mt: 8, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', pl: 10, pr: 20, height: 70}}  borderRadius={1} bgcolor="section.main">
                <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                    {infoLines && infoLines.map((line, i) => (
                        <Typography lineHeight='22px' key={`${i}_Typography`}>{line}</Typography>
                    ))}
                </Box>
                <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                    {buttonText && <Button sx={{width:80, height: 40}} color={buttonColor} variant='contained' onClick={buttonOnClick}>{buttonText}</Button>}
                </Box>
            </Box>
        </Box>
    )
}

export default ResidenceBox