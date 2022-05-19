import { Paper, Typography } from '@mui/material'
import React from 'react'
import AdminWrapper from '../../../../utils/AdminWrapper'

import useStyles from './styles';

const Statistics = () => {
    const classes = useStyles();

    return (
        <AdminWrapper>
            <Paper sx={{m: 5, p: 5 }}>
                <Typography>ADMIN STATISTICS</Typography>

            </Paper>
        </AdminWrapper>
    )
}

export default Statistics