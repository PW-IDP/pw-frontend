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
    logoIcon: {
        width: 100,
        height: 100,
        marginLeft: theme.spacing(3),
        marginTop: theme.spacing(3),
    },

    navMenu: {
        position: 'fixed',
        top:0,
        left:0,
        height: '100%',
        width: 220,
        [theme.breakpoints.up('sm')]: {
            width: 300,
        }
    },
}));