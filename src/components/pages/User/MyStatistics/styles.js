import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
    container: {
        margin: 'auto',
        padding: theme.spacing(5, 1),
        height: 700,
        width: 200,
        [theme.breakpoints.up('sm')]: {
            width: 250
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
}));