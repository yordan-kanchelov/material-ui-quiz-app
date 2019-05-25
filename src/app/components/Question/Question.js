import React from "react";

import { withStyles, MuiThemeProvider } from "@material-ui/core/styles";

import questionStyle from "./question-style";
import theme from "../../styles/theme";
import { CSSTransitionGroup } from "react-transition-group";

class QuestionParagraph extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <MuiThemeProvider theme={theme}>
                <CSSTransitionGroup
                    transitionName="mainApp"
                    transitionAppear={true}
                    transitionEnterTimeout={500}
                    transitionAppearTimeout={500}
                    transitionLeave={true}
                    transitionLeaveTimeout={300}
                >
                    <pre className={classes.questionParagraph}>{this.props.question}</pre>
                </CSSTransitionGroup>
            </MuiThemeProvider>
        );
    }
}

export default withStyles(questionStyle)(QuestionParagraph);
