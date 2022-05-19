import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
    addBorder: {
        border: '2px solid black',
    },
    container: {
        width: 600,
        margin: 'auto',
        padding: theme.spacing(10, 0)
    },
    modal: {
        border: '2px solid black',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 800,
        height: 600,
    },
}));