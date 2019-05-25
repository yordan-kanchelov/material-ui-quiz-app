import LocalQuestions from "../services/questions/local/get-questions"

const getQuestionsFactory = (server = null) => {
    if(server) {
        // TODO: 
        // implement
    } else {
        return LocalQuestions();
    }
}

export default getQuestionsFactory;

