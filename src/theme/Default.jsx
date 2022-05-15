
import { createTheme } from '@mui/material/styles'
import {blue, red, grey} from '@mui/material/colors';

export const defaultTheme = createTheme({
    spacing: 4,
    palette: {
        primary: {
            main: blue[500],
        },
        navButton: {
            main: grey[400],
        },
        secondary: {
            main: red[500],
        },
    },
    typography: {
      button: {
        textTransform: 'none'
      },
      fontSize: 18,
      fontFamily: 'Inter'
    },
});