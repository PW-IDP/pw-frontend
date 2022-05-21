import { Add } from '@mui/icons-material';
import { Box, Button, Modal, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

import useStyles from './styles';

const AcceptSharingModal = ({ openModal, onClose, actionText, affirmativeText, acceptSharingHandler, negativeText, onNegative }) => {
    const classes = useStyles();

    const { register, handleSubmit } = useForm();
    return (
        <Modal open={openModal} onClose={onClose} >
            <Box className={classes.modal} bgcolor='content.main' >
                <form onSubmit={handleSubmit((data) => acceptSharingHandler(data))}>
                    <Typography sx={{mt: 4}} align='center' lineHeight='22px'>{actionText}</Typography>
                    <Box sx={{mt: 8, px: 10}}>
                        <TextField
                            {...register("capacity", { required: true })}
                            fullWidth
                            label="Persons"
                            type="number"
                            required
                            inputProps={{ style: { backgroundColor: "#FFFFFF" } }}
                        />
                    </Box>

                    <Box sx={{mx: 4, mt: 20, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', height: 70, px: 10}}  borderRadius={1} bgcolor="section.main">
                        <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                            <Button sx={{width:80, height: 40}} color='secondary' variant='contained' onClick={onNegative}>{negativeText}</Button>
                        </Box>
                        <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                            <Button sx={{width:80, height: 40}} color='primary' variant='contained' type='sumbit'>{affirmativeText}</Button>
                        </Box>
                    </Box>
                </form>
            </Box>
        </Modal>
        
    )
}

export default AcceptSharingModal