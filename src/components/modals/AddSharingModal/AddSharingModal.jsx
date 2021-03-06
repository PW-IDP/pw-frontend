import { Box, Button, Grid, TextField, Modal, MenuItem } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';

import useStyles from './styles';
import { useAuth0 } from '@auth0/auth0-react';

const AddSharingModal = ({ openModal, onClose, residences, sharings, addSharingHandler }) => {
    const classes = useStyles();
    const [selectedResidence, setSelectedResidence] = useState('')

    const { register, handleSubmit } = useForm();

    useEffect(() => {
    }, [])

    const usedResidenceIds = sharings.map(({ residence_id }) => residence_id)
    const availableResidences = residences
                                    .filter(({ guest }) => guest === undefined)
                                    .filter(({ residence_id }) => !usedResidenceIds.includes(residence_id))

    return (
        <Modal open={openModal} onClose={onClose} >
            <Box className={classes.modal} bgcolor='content.main' >
                <Box className={classes.container}>
                    <form onSubmit={handleSubmit((data) => addSharingHandler(data))}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6} key="title">
                                <TextField
                                    {...register("title", { required: true })}
                                    fullWidth
                                    label="Title"
                                    required
                                    inputProps={{ style: { backgroundColor: "#FFFFFF" } }}
                                />
                            </Grid>

                            <Grid item xs={12} sm={6} key='residence'>
                                <Box backgroundColor='#FFFFFF'>
                                    <TextField
                                        {...register("residence_id", { required: true })}
                                        disabled={availableResidences.length === 0}
                                        value={selectedResidence}
                                        onChange={(e) => {setSelectedResidence(e.target.value)}}
                                        select
                                        label="Residence"
                                        fullWidth
                                        inputProps={{ style: { backgroundColor: "#FFFFFF" } }}
                                    >
                                        {availableResidences.map(({residence_id, name}) => (
                                        <MenuItem key={residence_id} value={residence_id}>
                                            {name}
                                        </MenuItem>))}
                                    </TextField>
                                </Box>
                            </Grid>

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

export default AddSharingModal