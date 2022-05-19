import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
    container: {
        margin: 'auto',
        padding: theme.spacing(5, 1),
        width: 250,
        [theme.breakpoints.up('sm')]: {
            padding: theme.spacing(5),
            width: 320,
        },
        [theme.breakpoints.up('md')]: {
            width: 540,
        },
        [theme.breakpoints.up('lg')]: {
            width: 750,
        }
    },
    modal: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 800,
        height: 600,
    },
    addButtonContainer: {
        position: 'fixed',
        bottom: 100,
        right: 100,
    },
    addButton: {
        width: 100,
        height: 100,
    }
}));