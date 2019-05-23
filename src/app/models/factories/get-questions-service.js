import LocalQuestions from "../services/questions/local/get-questions"

const getQuestionsFactory = (server = null) => {
    if(server) {
        // TODO: 
        // implement
    } else {
        console.log("nana")
        return LocalQuestions.getQuestions();
    }
}

export default getQuestionsFactory;

