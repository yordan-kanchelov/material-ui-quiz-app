import questionsData from "./data/questionsData";
import getRandomInt from "../../../../utils/random-int";

export default () => {
    return new Promise(resolve => {
        setTimeout(() => {
            const questionsLength = 10;
            const availableQuestionIndexes = new Array(questionsData.length).fill(0).map((val, index) => index);
            const questions = [];

            for (let i = 0; i < questionsLength; i++) {
                const questionIndex = availableQuestionIndexes.splice(
                    getRandomInt(0, availableQuestionIndexes.length - 1),
                    1
                );

                const question = {
                    question: questionsData[questionIndex].question,
                    answers: questionsData[questionIndex].answers,
                    questionIndex
                };

                questions.push(question);
            }

            resolve(
                questions
                // questionsData.map((question, questionIndex) => {
                //     return {
                //         questionIndex,
                //         question: question.question,
                //         answers: question.answers
                //     };
                // })
            );
        }, 1500);
    });
};
