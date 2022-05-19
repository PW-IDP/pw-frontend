import { Add } from '@mui/icons-material';
import { Box, Button, Paper, Grid, TextField, TextareaAutosize, Modal } from '@mui/material'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

import useStyles from './styles';

const formFields = [
    {name: "name", label: "Name"},
    {name: "address", label: "Address"},
    {name: "county", label: "County"},
    {name: "city", label: "City"},
    {name: "minCapacity", label: "Min. Capacity"},
    {name: "maxCapacity", label: "Max. Capacity"},
]

const AddOfferForm = ({ openModal, onClose, addOfferHandler }) => {
    const classes = useStyles();

    const { register, handleSubmit } = useForm();

    return (
        <Modal open={openModal} onClose={onClose} >
            <Box className={classes.modal} bgcolor='content.main' >
                <Box className={classes.container}>
                    <form onSubmit={handleSubmit((data) => addOfferHandler(data))}>
                        <Grid container spacing={3}>
                            {formFields.map((field) => (
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

                            <Grid item xs={12} key='description'>
                                <TextField
                                    multiline
                                    {...register('description', { required: true })}
                                    rows={4}
                                    placeholder="Description"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} key='submit'>
                                <Button sx={{width: 1, height: 50, mt: 10}} type="submit" variant="contained" color="primary">Add Sharing Offer</Button>
                            </Grid>
                        </Grid>
                    </form>
                </Box>
            </Box>
        </Modal>
        
    )
}

export default AddOfferForm