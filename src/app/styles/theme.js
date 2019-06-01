import blue from "@material-ui/core/colors/lightBlue";
import lightGreen from "@material-ui/core/colors/lightGreen";

import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
    palette: {
        primary: {
            light: blue[200],
            main: blue[500],
            dark: blue[700],
            contrastText: "#fff"
        },
        secondary: {
            light: lightGreen[200],
            main: lightGreen[400],
            dark: lightGreen[700],
            contrastText: "#fff"
        }
    }
});

export default theme;
