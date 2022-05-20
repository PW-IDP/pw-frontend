import { Add } from '@mui/icons-material';
import { Box, Button, Grid, TextField, Modal, MenuItem } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';

import useStyles from './styles';

const mockMyResidences = [{
    'id': 23,
    'name': 'Residence1',
    'title': 'Offer title1',
    'email': 'email@mail.com',
    'minPersons': 3,
    'maxPersons': 5,
    'county': 'Constanta',
    'city': 'Mangalia',
    'address': 'St. Xyz, no. 123, Bl. Q2, Ap. 12',
    'description': 'The apartment is located in the center, being about 800 meters by the sea and surrounded by various hypermarkets where you can supply at a very acceptable price.'
},
{
    'id': 212,
    'name': 'Residence2',
    'email': 'email@mail.com',
    'minPersons': 3,
    'maxPersons': 5,
    'county': 'Constanta',
    'city': 'Mangalia',
    'address': 'St. Xyz, no. 123, Bl. Q2, Ap. 12',
    'description': 'The apartment is located in the center, being about 800 meters by the sea and surrounded by various hypermarkets where you can supply at a very acceptable price.',
},
{
    'id': 123,
    'name': 'Residence3',
    'email': 'email@mail.com',
    'minPersons': 3,
    'maxPersons': 5,
    'county': 'Constanta',
    'city': 'Mangalia',
    'address': 'St. Xyz, no. 123, Bl. Q2, Ap. 12',
    'description': 'The apartment is located in the center, being about 800 meters by the sea and surrounded by various hypermarkets where you can supply at a very acceptable price.',
    'guest' : {
        'name': 'CCC DDD',
        'email': 'eee@mail.com',
        'startDate': "16-05-2020"
    }
}]

const AddOfferModal = ({ openModal, onClose, addOfferHandler }) => {
    const classes = useStyles();
    const [residences, setResidences] = useState([])
    const [selectedResidence, setSelectedResidence] = useState('')

    const { register, handleSubmit } = useForm();

    useEffect(() => {
        const myResidences = mockMyResidences
        const emptyResidences = myResidences.filter(({ guest }) => guest === undefined)

        setResidences(emptyResidences)
    }, [])

    return (
        <Modal open={openModal} onClose={onClose} >
            <Box className={classes.modal} bgcolor='content.main' >
                <Box className={classes.container}>
                    <form onSubmit={handleSubmit((data) => addOfferHandler(data))}>
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

                            <Grid item xs={12} sm={6} key='residenceId'>
                                <Box backgroundColor='#FFFFFF'>
                                    <TextField
                                        {...register("residenceId", { required: true })}
                                        disabled={residences.length === 0}
                                        value={selectedResidence}
                                        onChange={(e) => {setSelectedResidence(e.target.value)}}
                                        select
                                        label="Residence"
                                        fullWidth
                                        inputProps={{ style: { backgroundColor: "#FFFFFF" } }}
                                    >
                                        {residences.map(({id, name}) => (
                                        <MenuItem key={id} value={id}>
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

export default AddOfferModal