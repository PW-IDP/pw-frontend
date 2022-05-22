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
    },
}));