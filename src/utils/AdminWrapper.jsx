import { useAuth0 } from "@auth0/auth0-react";
import { ShoppingBag } from "@mui/icons-material";
import { Grid, Box } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { authSettings } from "../common/AuthSettings";
import NavMenu from "../components/NavMenu/NavMenu";
import Group from "../assets/clarity_users-solid.svg"
import Chart from "../assets/uil_chart-growth.svg"

import useStyles from './styles';

const AdminWrapper = ({ children }) => {
    const classes = useStyles();

    const { user } = useAuth0();
    const navigate = useNavigate();

    const adminPages = [
        {
            name: 'Sharing Statistics',
            link: '/admin/statistics',
            icon: Chart
        },
        {
            name: 'Users',
            link: '/admin/users',
            icon: Group
        }
    ]
  
    useEffect(() => {
        if (user && user[authSettings.rolesKey].length === 0) {
            navigate("/");
        }
    }, [user]);
  
    return (
        <Box bgcolor="background.main">
            <NavMenu options={adminPages}/>
            <Grid container justifyContent='flex-start' spacing={4}>
                <Grid item key='navMenu' className={classes.navGrid}>
                </Grid>
                <Grid item key='content' xs>
                    {children}
                </Grid>
            </Grid>
        </Box>
    );
  };
  
  export default AdminWrapper;