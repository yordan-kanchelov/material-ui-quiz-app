import questionsData from "./data/questionsData";

export default (questions, questionAnswers) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const requiredCorrectPercentage = 70;

            let correctAnswers = 0;
            
            questions.forEach((question, index) => {
                const validAnswer = questionsData[question.questionIndex].correctAnswerIndex;
                const userAnswer = questionAnswers[index];

                if(validAnswer === userAnswer) {
                    correctAnswers++;
                }
            });


            console.log(questions, questionAnswers,  questions.length * (requiredCorrectPercentage / 100))

            let pass = correctAnswers >= questions.length * (requiredCorrectPercentage / 100);
            let result = {
                correctAnswers,
                pass
            };

            resolve(result);
        }, 1500);
    });
};
