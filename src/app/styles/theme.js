import blue from "@material-ui/core/colors/lightBlue";
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
            light: "#ff7961",
            main: "#f44336",
            dark: "#ba000d",
            contrastText: "#000"
        }
    }
});

export default theme 