import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
    navButton: {
        width: '100%',
        height: 70,
    },
    navIcon: {
        width: 30,
        height: 30,
        marginLeft: theme.spacing(2.5),
        marginRight: theme.spacing(2.5),
    },

    navMenu: {
        position: 'fixed',
        top:0,
        left:0,
        height: '100%',
        width: 200,
        [theme.breakpoints.up('md')]: {
            width: 300,
        }
    },
}));