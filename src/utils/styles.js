import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
    navMenu: {
        position: 'absolute',
        width: 200,
        [theme.breakpoints.up('md')]: {
            width: 300,
        },
    },
    navGrid: {
        width: 200,
        [theme.breakpoints.up('md')]: {
            width: 300,
        },
    },
}));