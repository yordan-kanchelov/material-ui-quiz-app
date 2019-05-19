import React from "react";

import Radio from '@material-ui/core/Radio';
import Typography from "@material-ui/core/Typography";

import { withStyles, MuiThemeProvider } from "@material-ui/core/styles";
import styles from "../styles/style";

class Answer extends React.Component {
    state = {
        selected: false
    };

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.answer}>
                <Radio checked={this.state.selected}></Radio>
                <Typography className={classes.answerTypography} component="p">
                    {this.props.answer}
                </Typography>
            </div>
        );
    }
}

export default withStyles(styles)(Answer);
