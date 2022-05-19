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
}));