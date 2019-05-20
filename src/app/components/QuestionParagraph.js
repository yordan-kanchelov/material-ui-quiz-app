import React from "react";

import { withStyles, MuiThemeProvider } from "@material-ui/core/styles";

import styles from "../styles/style";
import theme from "../styles/theme";

class QuestionParagraph extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <MuiThemeProvider theme={theme}>
                <pre className={classes.questionParagraph}>{this.props.question}</pre>
            </MuiThemeProvider>
        );
    }
}

export default withStyles(styles)(QuestionParagraph);
