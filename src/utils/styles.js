import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
    navGrid: {
        width: 220,
        [theme.breakpoints.up('sm')]: {
            width: 300,
        },
    },
}));