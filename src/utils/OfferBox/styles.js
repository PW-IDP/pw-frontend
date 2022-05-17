import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
    offer: {
        padding: theme.spacing(5, 1),
        [theme.breakpoints.up('sm')]: {
            padding: theme.spacing(5, 8),
        },

        marginBottom: theme.spacing(5),
        "&:last-child" : {
            marginBottom: 0,
        }
    }
}));