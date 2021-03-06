import { useAuth0 } from "@auth0/auth0-react";
import { Grid, Box } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { authSettings } from "../common/AuthSettings";
import NavMenu from "./NavMenu/NavMenu";
import Group from "../assets/clarity_users-solid.svg"
import Chart from "../assets/uil_chart-growth.svg"
import Book from "../assets/ant-design_book-filled.svg"

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
            name: 'Available Sharings',
            link: '/admin/available-sharings',
            icon: Book
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
            <Grid container justifyContent='flex-start'>
                <Grid item key='navMenu' className={classes.navGrid}>
                </Grid>
                <Grid item key='content' xs>
                    <Box className={classes.fullHeight}>
                        {children}
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
  };
  
  export default AdminWrapper;