import LocalSubmit from "../services/questions/local/submit-questions";

const getSubmit = (server = null, questionData, questionAnswers) => {
    if (server) {
        // TODO:
        // implement
    } else {
        return LocalSubmit(questionData, questionAnswers);
    }
};

export default getSubmit;
