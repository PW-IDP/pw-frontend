import { Paper, Typography } from '@mui/material'
import React from 'react'
import UserWrapper from '../../../utils/UserWrapper'

const Home = () => {
    return (
        <UserWrapper>
            <Paper sx={{m: 5, p: 5 }}>
                <Typography>USER HOME</Typography>
            </Paper>
        </UserWrapper>
    )
}

export default Home