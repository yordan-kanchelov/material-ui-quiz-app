import React from "react";

import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Answer from "./components/Answer";
import QuestionParagraph from "./components/QuestionParagraph.js"
import { withStyles, MuiThemeProvider } from "@material-ui/core/styles";

import logo from "../assets/logo.svg";
import theme from "./styles/theme";
import styles from "./styles/style";
import getQuestions from "./models/factories/get-questions-service"
class App extends React.Component {
    state = {
        questions: getQuestions(),
        clientAnswerIndexes: [],
        currentQuestionIndex: 0
    };

    componentDidUpdate(prevProps, prevState) {
        this._updateButtonsPos()
    }

    componentDidMount() {
        window.onorientationchange = () => this._updateButtonsPos();
        window.onresize =() => this._updateButtonsPos();


        this._updateButtonsPos()       
        
        setTimeout(() => {
            this._updateButtonsPos()        
        },0)
    }

    onNextClick = e => {
        const currentState = this.state;
        this.setState({
            currentQuestionIndex: ++currentState.currentQuestionIndex
        });
    };

    onPrevClick = e => {
        const currentState = this.state;
        this.setState({
            currentQuestionIndex: --currentState.currentQuestionIndex
        });
    };

    onSubmitClick = e => {
        console.log("submit");
    };

    _updateButtonsPos =() => {
        let buttons = Array.from(document.getElementById("buttonsContainer").children);
        let mainContainer = document.querySelector("#root > div > div");

        buttons.forEach(button => {
            button.style.bottom = "0px";
        });

        const bottomPossition = mainContainer.clientHeight - mainContainer.scrollHeight + 20;

        buttons.forEach(button => {
            button.style.bottom = bottomPossition + "px";
        });
    }
    _getCurrentQuestion = () => this.state.questions[this.state.currentQuestionIndex].question;
    _getCurrentAnswers = () => this.state.questions[this.state.currentQuestionIndex].answer;
    _shouldShowSubmit = () => this.state.currentQuestionIndex === this.state.questions.length - 1;
    _shouldShowNext = () => this.state.currentQuestionIndex !== this.state.questions.length - 1;
    _shouldShowPrev = () => this.state.currentQuestionIndex !== 0;

    render() {
        const { classes } = this.props;

        return (
            <div className="App">
                <MuiThemeProvider theme={theme}>
                    <Paper className={classes.paper} elevation={2}>
                        <img src={logo} className={classes.logo} alt="logo" />
                        <hr width={"100%"} />

                        <QuestionParagraph question={this._getCurrentQuestion()} />

                        <div className={classes.answerContainer}>
                            {this._getCurrentAnswers().map((currentAnswer, index) => {
                                return <Answer answer={currentAnswer} key={index} />;
                            })}
                        </div>

                        <div id="buttonsContainer">
                            {this._shouldShowSubmit() ? (
                                <Button
                                    variant="contained"
                                    className={classes.btnSubmit}
                                    onClick={this.onSubmitClick}
                                    color="primary"
                                >
                                    Submit
                                </Button>
                            ) : null}

                            {this._shouldShowNext() ? (
                                <Button
                                    variant="contained"
                                    className={classes.btnNext}
                                    onClick={this.onNextClick}
                                    color="primary"
                                >
                                    Next
                                </Button>
                            ) : null}

                            {this._shouldShowPrev() ? (
                                <Button
                                    variant="contained"
                                    className={classes.btnPrev}
                                    onClick={this.onPrevClick}
                                    color="primary"
                                >
                                    Prev
                                </Button>
                            ) : null}
                        </div>
                    </Paper>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default withStyles(styles)(App);

