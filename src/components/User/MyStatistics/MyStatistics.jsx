import { Paper, Typography } from '@mui/material'
import React from 'react'
import UserWrapper from '../../../utils/UserWrapper'

import useStyles from './styles';

const MyStatistics = () => {
    const classes = useStyles();

    return (
        <UserWrapper>
            <Paper sx={{p: 5 }}>
                <Typography>USER STATISTICS</Typography>
            </Paper>
        </UserWrapper>
    )
}

export default MyStatistics