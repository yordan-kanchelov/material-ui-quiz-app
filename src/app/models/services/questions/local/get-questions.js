import questionsData from "./questionsData";

export default {
    getQuestions: () => {
        return questionsData.map(question => {
            return {
                question: question.question,
                answer: question.answer
            };
        });
    }
};
