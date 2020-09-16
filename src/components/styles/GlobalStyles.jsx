import { makeStyles } from '@material-ui/core/styles';

const GlobalStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      width: '100%',
      fontFamily: 'Montserrat, Open Sans, Helvetica, Arial, sans-serif',
    },
    button: {
      marginTop: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    actionsContainer: {
      marginBottom: theme.spacing(2),
    },
    resetContainer: {
      padding: theme.spacing(3),
    },
    gridMargins: {
      margin: theme.spacing(1)
    },
    sectionMargin: {
      [theme.breakpoints.down('sm')]: {
        paddingTop: theme.spacing(3),
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2)
      },
      [theme.breakpoints.up('md')]: {
        paddingTop: theme.spacing(4),
        paddingLeft: theme.spacing(6),
        paddingRight: theme.spacing(6)
      },
      
    },
    backButton: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
    logoSizing: {
      height: 50,
      width: 90,
    },
    title: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(3),
    },
    formElement: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
    },
    
}));

export default GlobalStyles;