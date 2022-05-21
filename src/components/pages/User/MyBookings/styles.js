import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
    container: {
        margin: 'auto',
        overflowY: 'auto',
        height: `calc(100vh - ${40}px)`,
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
}));