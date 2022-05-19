
import { createTheme } from '@mui/material/styles'

export const defaultTheme = createTheme({
    spacing: 4,
    palette: {
        primary: {
            main: "#2155CD",
        },
        secondary: {
            main: "#F44336",
        },

        background: {
            main: "#E8F9FD"
        },
        content: {
            main: "#E1FFFF"
        },
        contentBackground: {
            main: "#79DAE8"
        },
        section: {
            main: "#61BEE3"
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