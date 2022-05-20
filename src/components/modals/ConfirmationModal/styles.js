import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
    modal: {
        border: '2px solid black',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        height: 200,
    },
}));