import React from "react";

import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Answer from "./components/Answer/Answer";
import QuestionParagraph from "./components/Question/Question.js";
import { withStyles, MuiThemeProvider } from "@material-ui/core/styles";

import logo from "../assets/logo.svg";
import theme from "./styles/theme";
import styles from "./styles/style";
import questionsFactoryService from "./models/factories/get-questions-service";
import CircularLoading from "./components/CircularLoading";

import { CSSTransitionGroup } from "react-transition-group";

class App extends React.Component {
    lastTimeButtonClicked = new Date().getTime();

    state = {
        questions: null,
        clientAnswerIndexes: [],
        currentQuestionIndex: 0
    };

    componentDidUpdate(prevProps, prevState) {
        document.getElementById("mainContainer").scrollTop = 0;

        this.updateButtonsPos();

        setTimeout(() => {
            this.updateButtonsPos();
        }, 500);
    }

    componentDidMount() {
        window.onorientationchange = () => this.updateButtonsPos();
        window.onresize = () => this.updateButtonsPos();

        questionsFactoryService(false).then(value => {
            this.setState({ questions: value }, () => {
                this.updateButtonsPos();
            });
        });

        this.updateButtonsPos();

        setTimeout(() => {
            this.updateButtonsPos();
        }, 0);
    }

    onNextClick = e => {
        const currentState = this.state;

        if(currentState.currentQuestionIndex === currentState.questions.length - 1 || this.areButtonsAnimating()) {
            return;
        }

        this.lastTimeButtonClicked = new Date().getTime();
        this.setState({
            currentQuestionIndex: ++currentState.currentQuestionIndex
        });
    };

    onPrevClick = e => {
        const currentState = this.state;

        if (currentState.currentQuestionIndex === 0 || this.areButtonsAnimating()) {
            return;
        }

        this.lastTimeButtonClicked = new Date().getTime();
        this.setState({
            currentQuestionIndex: --currentState.currentQuestionIndex
        });
    };

    onSubmitClick = e => {
        console.log("submit");
    };

    updateButtonsPos = () => {
        if (!this.questionsLoaded()) {
            return false;
        }

        let buttons = Array.from(document.getElementById("buttonsContainer").children);
        let mainContainer = document.getElementById("mainContainer");

        buttons.forEach(button => {
            button.style.bottom = "0px";
        });

        const bottomPosition = mainContainer.clientHeight - mainContainer.scrollHeight + 20;

        buttons.forEach(button => {
            button.style.bottom = bottomPosition + "px";
        });
    };
    questionsLoaded = () => (this.state.questions !== null ? true : false);
    getCurrentQuestion = () => this.state.questions[this.state.currentQuestionIndex].question;
    getCurrentAnswers = () => this.state.questions[this.state.currentQuestionIndex].answer;
    shouldShowSubmit = () => this.state.currentQuestionIndex === this.state.questions.length - 1;
    shouldShowNext = () => this.state.currentQuestionIndex !== this.state.questions.length - 1;
    shouldShowPrev = () => this.state.currentQuestionIndex !== 0;
    
    areButtonsAnimating = () => {
        const transitionTime = 600;
        const currentTime = new Date().getTime() 
        
        return currentTime - transitionTime <= this.lastTimeButtonClicked; 
    }

    addCssTransition = elem => {
        return (
            <CSSTransitionGroup
                transitionName="mainApp"
                transitionAppear={true}
                transitionEnterTimeout={500}
                transitionAppearTimeout={500}
                transitionLeave={false}
                transitionLeaveTimeout={500}
            >
                {elem}
            </CSSTransitionGroup>
        );
    };

    render() {
        const { classes } = this.props;

        return (
            <MuiThemeProvider theme={theme}>
                {this.addCssTransition(
                    <Paper id="mainContainer" className={classes.paper} elevation={2}>
                        <img key={"logo"} src={logo} className={classes.logo} alt="logo" />
                        <hr key={"horizontalLine"} width={"100%"} />
                        {this.questionsLoaded() ? (
                            <div>
                                {this.addCssTransition(
                                    <div key={this.getCurrentQuestion()}>
                                        <QuestionParagraph
                                            key={this.getCurrentQuestion()}
                                            question={this.getCurrentQuestion()}
                                        />

                                        <div className={classes.answerContainer}>
                                            {this.getCurrentAnswers().map((currentAnswer, index) => (
                                                <Answer
                                                    key={this.getCurrentQuestion() + index}
                                                    answer={currentAnswer}
                                                />
                                            ))}
                                        </div>

                                        <div id="buttonsContainer">
                                            {this.shouldShowSubmit() ? (
                                                <Button
                                                    variant="contained"
                                                    className={classes.btnSubmit}
                                                    onClick={this.onSubmitClick}
                                                    color="primary"
                                                >
                                                    Submit
                                                </Button>
                                            ) : null}

                                            {this.shouldShowNext() ? (
                                                <Button
                                                    variant="contained"
                                                    className={classes.btnNext}
                                                    onClick={this.onNextClick}
                                                    color="primary"
                                                >
                                                    Next
                                                </Button>
                                            ) : null}

                                            {this.shouldShowPrev() ? (
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
                                    </div>
                                )}
                            </div>
                        ) : (
                            <CircularLoading key={"loadingCircle"} />
                        )}
                    </Paper>
                )}
            </MuiThemeProvider>
        );
    }
}

export default withStyles(styles)(App);
