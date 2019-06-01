import LocalQuestions from "../services/questions/local/get-questions"

const getQuestions = (server = null) => {
    if(server) {
        // TODO: 
        // implement
    } else {
        return LocalQuestions();
    }
}

export default getQuestions;

