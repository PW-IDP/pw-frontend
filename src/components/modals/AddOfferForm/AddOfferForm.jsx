import { Add } from '@mui/icons-material';
import { Box, Button, Paper, Grid, TextField, TextareaAutosize } from '@mui/material'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

import useStyles from './styles';

const formFields = [
    {name: "title", label: "Title"},
    {name: "address", label: "Address"},
    {name: "county", label: "County"},
    {name: "city", label: "City"},
    {name: "minPersons", label: "Min. Persons"},
    {name: "maxPersons", label: "Max. Persons"},
]

const AddOfferForm = ({ addOfferHandler }) => {
    const classes = useStyles();

    const { register, handleSubmit } = useForm();

    return (
        <Box className={classes.addBorder} bgcolor='content.main' sx={{width: 1, height: 1}}>
            <div className={classes.container}>
                <form onSubmit={handleSubmit((data) => addOfferHandler(data))}>
                    <Grid container spacing={3}>
                        {formFields.map((field) => (
                            <Grid item xs={12} sm={6} key={field.name}>
                                <TextField
                                    {...register(field.name, { required: true })}
                                    fullWidth
                                    label={field.label}
                                    required
                                />
                            </Grid>
                        ))}

                        <Grid item sx={{p: 1}} xs={12} key='description'>
                            <TextField
                                multiline
                                {...register('description', { required: true })}
                                rows={4}
                                placeholder="Description"
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item xs={12} key='submit'>
                            <Button sx={{width: 1, height: 50, mt: 10}} type="submit" variant="contained" color="primary">Add Sharing Offer</Button>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Box>
    )
}

export default AddOfferForm