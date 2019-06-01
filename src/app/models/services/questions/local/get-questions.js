import questionsData from "./data/questionsData";

export default () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(
                questionsData.map((question, questionIndex) => {
                    return {
                        questionIndex,
                        question: question.question,
                        answers: question.answers
                    };
                })
            );
        }, 1500);
    });
};
