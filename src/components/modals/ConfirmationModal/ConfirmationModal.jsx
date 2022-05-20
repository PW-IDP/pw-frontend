import { Add } from '@mui/icons-material';
import { Box, Button, Modal, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

import useStyles from './styles';

const ConfirmationModal = ({ openModal, onClose, actionText, affirmativeText, onAffirmative, negativeText, onNegative }) => {
    const classes = useStyles();

    return (
        <Modal open={openModal} onClose={onClose} >
            <Box className={classes.modal} bgcolor='content.main' >
                <Typography sx={{mt: 4}} align='center' lineHeight='22px'>{actionText}</Typography>
                <Box sx={{mx: 4, mt: 15, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', height: 70, px: 10}}  borderRadius={1} bgcolor="section.main">
                    <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                        <Button sx={{width:80, height: 40}} color='secondary' variant='contained' onClick={onNegative}>{negativeText}</Button>
                    </Box>
                    <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                        <Button sx={{width:80, height: 40}} color='primary' variant='contained' onClick={onAffirmative}>{affirmativeText}</Button>
                    </Box>
                </Box>
            </Box>
        </Modal>
        
    )
}

export default ConfirmationModal