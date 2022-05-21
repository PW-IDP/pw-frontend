import { useAuth0 } from '@auth0/auth0-react';
import React, { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { base, routes } from '../../../utils/api/routes';

import useStyles from './styles';

const SaveProfile = () => {
    const classes = useStyles();
    const { user, getAccessTokenSilently } = useAuth0();
    const [message, setMessage] = useState("Waiting...")
    const navigate = useNavigate();

    const saveProfile = useCallback(async () => {
        const accessToken = await getAccessTokenSilently();
        const body = {
            email: user.email,
            name: user.name
        }
        const config = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + accessToken,
            },
            body: JSON.stringify(body),
        };
        fetch(`${base}${routes.user.save}`, config)
        .then(function (response) {
            if (response.status === 200 || response.status === 201) {
                navigate('/')
            }
        })
        .catch(function (error) {
            console.log("ERROR:", error);
            setMessage("Something wrong happened! Please refresh the page!")
        });
    })

    useEffect(() => {
        saveProfile();
    }, []);
    
    
    return <div>{message}</div>;
}

export default SaveProfile