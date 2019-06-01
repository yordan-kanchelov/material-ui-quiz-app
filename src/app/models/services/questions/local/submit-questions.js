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

            const questionsLength = questions.length
            const pass = correctAnswers >= questionsLength * (requiredCorrectPercentage / 100);
            const result = {
                questionsLength,
                correctAnswers,
                pass
            };

            resolve(result);
        }, 0);
    });
};
