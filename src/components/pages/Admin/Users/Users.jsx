import { Paper, Typography } from '@mui/material'
import React from 'react'
import AdminWrapper from '../../../../utils/AdminWrapper'

import useStyles from './styles';

const Users = () => {
    const classes = useStyles();

    return (
        <AdminWrapper>
            <Paper sx={{m: 5, p: 5 }}>
                <Typography>ADMIN USERS</Typography>
            </Paper>
        </AdminWrapper>
    )
}

export default Users