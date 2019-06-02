import React from "react";

import addCssTransition from "../../utils/css-transition";
import { withStyles, MuiThemeProvider } from "@material-ui/core/styles";

import questionStyle from "./question-style";
import theme from "../../styles/theme";

class QuestionParagraph extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <MuiThemeProvider theme={theme}>
                {addCssTransition(
                    <div>
                        <div className={classes.questionNumber}>
                            {`Question ${this.props.questionIndex}/${this.props.questionsLength}:`}{" "}
                        </div>
                        <pre className={classes.questionParagraph}>{this.props.question}</pre>
                    </div>
                )}
            </MuiThemeProvider>
        );
    }
}

export default withStyles(questionStyle)(QuestionParagraph);
