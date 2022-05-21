import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
    container: {
        margin: 'auto',
        marginTop: theme.spacing(20),
        width: 200,
        height: 700,
        overflowY: 'auto',
        [theme.breakpoints.up('sm')]: {
            width: 300
        },
        [theme.breakpoints.up('md')]: {
            width: 500
        },
        [theme.breakpoints.up('lg')]: {
            width: 800,
        },
        [theme.breakpoints.up('xl')]: {
            width: 1000,
        }
    },
    hostsTop: {
        margin: 'auto',
        width: 200,
        [theme.breakpoints.up('lg')]: {
            width: 300,
        },
        [theme.breakpoints.up('xl')]: {
            width: 400,
        },
        height: 500,

    }
}));