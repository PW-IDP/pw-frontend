import { useAuth0 } from "@auth0/auth0-react";
import { ShoppingBag } from "@mui/icons-material";
import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { authSettings } from "../common/AuthSettings";
import NavMenu from "../components/NavMenu/NavMenu";
import MedicalHouse from "../assets/fa6-solid_house-medical-flag.svg"
import Home from "../assets/ant-design_home-filled.svg"
import Book from "../assets/ant-design_book-filled.svg"

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
            name: 'My Sharings',
            link: '/sharings',
            icon: MedicalHouse
        },
        {
            name: 'My Bookings',
            link: '/bookings',
            icon: Book
        }
    ]
  
    useEffect(() => {
        if (user && user[authSettings.rolesKey].length === 1) {
            navigate("/admin/statistics");
        }
    }, [user]);
  
    return (
        <div>
            <NavMenu options={userPages}/>
            <Grid container justifyContent='flex-start' spacing={4}>
                <Grid item key='navMenu' className={classes.navGrid}>
                </Grid>
                <Grid item key='content' xs>
                    {children}
                </Grid>
            </Grid>
        </div>
    );
  };
  
  export default UserWrapper;