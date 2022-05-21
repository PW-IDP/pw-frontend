import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
    container: {
        margin: 'auto',
        overflowY: 'auto',
        height: `calc(100vh - ${40}px)`,
        width: 250,
        [theme.breakpoints.up('sm')]: {
            padding: theme.spacing(5),
            width: 300,
        },
        [theme.breakpoints.up('md')]: {
            width: 500,
        },
        [theme.breakpoints.up('lg')]: {
            width: 650,
        },
        [theme.breakpoints.up('xl')]: {
            width: 750,
        }
    },
    popUpAlert: {
        position: 'fixed',
        top: 24,
        right: 24,
        width: 200,
        zIndex: 1000,
        [theme.breakpoints.up('md')]: {
            width: 400,
        },
        "& .MuiAlert-icon": {
          fontSize: 32
        }
    },
    navButton: {
        width: 80,
        height: 40,
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