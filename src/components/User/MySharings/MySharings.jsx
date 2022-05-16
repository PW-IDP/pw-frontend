import { Paper, Typography } from '@mui/material'
import React from 'react'
import UserWrapper from '../../../utils/UserWrapper'

const MySharings = () => {
    return (
        <UserWrapper>
            <Paper sx={{m: 5, p: 5 }}>
                <Typography>USER SHARINGS</Typography>
            </Paper>
        </UserWrapper>
    )
}

export default MySharings