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