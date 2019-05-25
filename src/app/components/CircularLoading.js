import React from "react";
import { makeStyles, MuiThemeProvider } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

import theme from "../styles/theme";

const useStyles = makeStyles(theme => ({
    progress: {
        margin: theme.spacing(2)
    },
    progressContainer: {
        position: "absolute",
        top: "60%",
        left: "50%",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
    }
}));

function CircularLoading() {
    const classes = useStyles();

    return (
        <MuiThemeProvider theme={theme}>
            <div className={classes.progressContainer}>
                <CircularProgress color={"secondary"} size={200} className={classes.progress} />
            </div>
        </MuiThemeProvider>
    );
}

export default CircularLoading;
