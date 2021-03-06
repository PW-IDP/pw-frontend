import { useAuth0 } from "@auth0/auth0-react";
import { ShoppingBag } from "@mui/icons-material";
import { Grid, Box } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { authSettings } from "../common/AuthSettings";
import NavMenu from "./NavMenu/NavMenu";
import MedicalHouse from "../assets/fa6-solid_house-medical-flag.svg"
import Home from "../assets/ant-design_home-filled.svg"
import Book from "../assets/ant-design_book-filled.svg"
import Chart from "../assets/uil_chart-growth.svg"

import useStyles from './styles';

const UserWrapper = ({ children }) => {
    const classes = useStyles();

    const { user } = useAuth0();
    const navigate = useNavigate();

    const userPages = [
        {
            name: 'Home',
            link: '/',
            icon: Home
        },
        {
            name: 'My Residences',
            link: '/my-residences',
            icon: MedicalHouse
        },
        {
            name: 'My Bookings',
            link: '/my-bookings',
            icon: Book
        },
        {
            name: 'My Statistics',
            link: '/my-statistics',
            icon: Chart
        }
    ]
  
    useEffect(() => {
        if (user && user[authSettings.rolesKey].length === 1) {
            navigate("/admin/statistics");
        }
    }, [user]);
  
    return (
        <Box bgcolor="background.main">
            <NavMenu options={userPages}/>
            <Grid container justifyContent='flex-start'>
                <Grid item key='navMenu' className={classes.navGrid} />
                <Grid item key='content' xs>
                    <Box className={classes.fullHeight}>
                        {children}
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
  };
  
  export default UserWrapper;