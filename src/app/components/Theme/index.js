/**
 * -----------------------------------------------------------------------------
 * Imports
 * -----------------------------------------------------------------------------
 */
import { createMuiTheme } from 'material-ui/styles';
import * as Color from 'material-ui/colors';


/**
 * -----------------------------------------------------------------------------
 * The app theme
 * -----------------------------------------------------------------------------
 */
const Theme = createMuiTheme({
    palette: {
        primary: {...Color.blueGrey},
        secondary: {...Color.red},
    },
});

Theme.palette.primary[500] = Color.lightBlue[700];

export default Theme;
