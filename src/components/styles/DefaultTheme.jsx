import { createMuiTheme } from '@material-ui/core/styles';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';

const breakpoints = createBreakpoints({});

const DefaultTheme = createMuiTheme({
  overrides: {
      MuiTablePagination: {
        actions: {
          marginLeft: "6px"
        },
        input: {
          marginRight: "8px"
        }
      },
      MuiToolbar: {
         gutters: {
           paddingLeft: "6px",
           paddingRight: "6px"
         }
      },
      MuiStepper: {
        root: {
          [breakpoints.down('sm')]: {
            marginTop: '2px',
            padding: '5px'
          }, 
          [breakpoints.up('sm')]: { 
            marginTop: '10px',
            padding: '25px'
          }
          
        }
      },
      '@global': {
        '.MuiAppBar-root': {
          background: '#118df0',
        }
      }
   },
   typography: {
    fontFamily: 'Montserrat, Open Sans, Helvetica, Arial, sans-serif',
    button: {
      textTransform: "none"
    }
   },
   palette: {
    primary: { 500: "#187df0"},
  }
});

export default DefaultTheme;
