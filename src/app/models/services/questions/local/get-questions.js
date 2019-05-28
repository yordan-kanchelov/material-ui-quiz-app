import questionsData from "./data/questionsData";

export default () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(
                questionsData.map(question => {
                    return {
                        question: question.question,
                        answer: question.answer
                    };
                })
            );
        }, 1500);
    });
};
