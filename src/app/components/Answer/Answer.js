import React from "react";

import Radio from "@material-ui/core/Radio";
import Typography from "@material-ui/core/Typography";

import { withStyles, MuiThemeProvider } from "@material-ui/core/styles";

import styles from "./answer-style";
import theme from "../../styles/theme";

class Answer extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <MuiThemeProvider theme={theme}>
                <div className={classes.answer}>
                    <Radio
                        id={this.props.answerIndex.toString()}
                        checked={this.props.isSelected}
                        onClick={() => {
                            this.props.onAnswerSelect(this.props.answerIndex);
                        }}
                    />
                    <Typography
                        className={classes.answerTypography}
                        component="pre"
                        onClick={() => {
                            this.props.onAnswerSelect(this.props.answerIndex);
                        }}
                    >
                        {this.props.answer}
                    </Typography>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default withStyles(styles)(Answer);
