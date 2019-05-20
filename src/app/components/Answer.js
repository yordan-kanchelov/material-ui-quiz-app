import React from "react";

import Radio from "@material-ui/core/Radio";
import Typography from "@material-ui/core/Typography";

import { withStyles, MuiThemeProvider } from "@material-ui/core/styles";

import styles from "../styles/style";
import theme from "../styles/theme";

class Answer extends React.Component {
    state = {
        selected: false
    };

    render() {
        const { classes } = this.props;

        return (
            <MuiThemeProvider theme={theme}>
                <div className={classes.answer}>
                    <Radio checked={this.state.selected} />
                    <Typography className={classes.answerTypography} component="pre">
                        {this.props.answer}
                    </Typography>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default withStyles(styles)(Answer);
