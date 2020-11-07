import { createMuiTheme } from '@material-ui/core/styles';
//change default style 
import  blue  from '@material-ui/core/colors/blue';
import green from '@material-ui/core/colors/green'

const theme = createMuiTheme({
    palette : {
        primary: blue,
        secondary: green
    },
    status: {
        danger: 'orange'
    }
})

export default theme ;