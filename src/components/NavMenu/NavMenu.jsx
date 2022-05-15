import { useAuth0 } from '@auth0/auth0-react';
import { Box, Button, Typography, Grid, Avatar, IconButton } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

import Logout from "../../assets/ic_outline-log-out.svg"
import useStyles from './styles';

const NavMenu = ({ options }) => {
    const classes = useStyles();
    const { user, logout } = useAuth0();

    return (
        <Box sx={{pt: 24}} bgcolor="primary.main" className={classes.navMenu}>
            <Box sx={{mb: 12, px: 3}}>
                <Avatar src={user.picture} alt={user.name} sx={{width: 50, height: 50}}></Avatar>
                <Typography align='left' sx={{width: 1}}>{user.name}</Typography>
                <Typography align='left' sx={{width: 1}}>{user.email}</Typography>
            </Box>

            {options.map(({name, icon, link}) => (
                <Box sx={{mb: 8}} key={`${name}_box`}>
                    <Button
                        sx={{px: 0}}
                        className={classes.navButton}
                        component={Link}
                        to={link}
                        variant="contained"
                        color="navButton"
                    >
                        <Grid container direction="row" alignItems="center">
                            <Grid item key={`${name}_icon`}>
                                <img className={classes.navIcon} src={icon} alt="SVG as an image" />
                            </Grid>
                            <Grid item key={`${name}_name`}>
                                <Typography align='left' sx={{width: 1}}>{name}</Typography>
                            </Grid>
                        </Grid>
                    </Button>
                </Box>
            ))}

            <Box sx={{mb: 8}}>
                <Button
                    sx={{px: 0}}
                    className={classes.navButton}
                    variant="contained"
                    color="navButton"
                    onClick={logout}
                >
                    <Grid container direction="row" alignItems="center">
                            <Grid item key="logout_icon">
                                <img className={classes.navIcon} src={Logout} alt="SVG as an image" />
                            </Grid>
                            <Grid item  key="logout_name">
                                <Typography align='left' sx={{width: 1}}>Log Out</Typography>
                            </Grid>
                        </Grid>
                </Button>
            </Box>
        </Box>
    )
}

export default NavMenu