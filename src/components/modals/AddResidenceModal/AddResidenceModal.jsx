import { Add } from '@mui/icons-material';
import { Box, Button, Paper, Grid, TextField, TextareaAutosize, Modal } from '@mui/material'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

import useStyles from './styles';

const formTextFields = [
    {name: "name", label: "Name"},
    {name: "address", label: "Address"},
    {name: "county", label: "County"},
    {name: "city", label: "City"},
]

const formNumFields = [
    {name: "min_capacity", label: "Min. Capacity"},
    {name: "max_capacity", label: "Max. Capacity"},
]

const AddResidenceModal = ({ openModal, onClose, addResidenceHandler }) => {
    const classes = useStyles();

    const { register, handleSubmit } = useForm();

    return (
        <Modal open={openModal} onClose={onClose} >
            <Box className={classes.modal} bgcolor='content.main' >
                <Box className={classes.container}>
                    <form onSubmit={handleSubmit((data) => addResidenceHandler(data))}>
                        <Grid container spacing={3}>
                            {formTextFields.map((field) => (
                                <Grid item xs={12} sm={6} key={field.name}>
                                    <TextField
                                        {...register(field.name, { required: true })}
                                        fullWidth
                                        label={field.label}
                                        required
                                        inputProps={{ style: { backgroundColor: "#FFFFFF" } }}
                                    />
                                </Grid>
                            ))}
                            {formNumFields.map((field) => (
                                <Grid item xs={12} sm={6} key={field.name}>
                                    <TextField
                                        {...register(field.name, { required: true })}
                                        fullWidth
                                        label={field.label}
                                        required
                                        type='number'
                                        inputProps={{min: 0, style: { backgroundColor: "#FFFFFF" } }}
                                    />
                                </Grid>
                            ))}
                            <Button sx={{width: 1, height: 50, mt: 50}} type="submit" variant="contained" color="primary">Add Sharing Offer</Button>
                        </Grid>
                    </form>
                </Box>
            </Box>
        </Modal>
        
    )
}

export default AddResidenceModal