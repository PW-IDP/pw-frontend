import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
    navGrid: {
        width: 220,
        [theme.breakpoints.up('sm')]: {
            width: 300,
        },
    },
    fullHeight: {
        height: '100vh',
        overflowY: 'hidden'
    }
}));