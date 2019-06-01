import gray from "@material-ui/core/colors/grey";
import lightGreen from "@material-ui/core/colors/lightGreen";

import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
    palette: {
        primary: {
            light: lightGreen[200],
            main: lightGreen[400],
            dark: lightGreen[600],
            contrastText: "#fff"
        },
        secondary: {
            light: gray[200],
            main: gray[500],
            dark: gray[700],
            contrastText: "#fff"
        }
    }
});

export default theme;
