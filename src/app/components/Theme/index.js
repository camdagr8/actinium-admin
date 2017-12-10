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
        primary: Color.blueGrey,
        secondary: Color.red,
    },
});

export default Theme;
