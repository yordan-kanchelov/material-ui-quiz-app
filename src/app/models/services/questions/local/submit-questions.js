import questionsData from "./data/questionsData";

export default (questions, questionAnswers) => {
    return new Promise(resolve => {
        setTimeout(() => {
            let correctAnswers = 0;

            questions.forEach((question, index) => {
                const validAnswer = questionsData[question.questionIndex].correctAnswerIndex;
                const userAnswer = questionAnswers[index];

                if (validAnswer === userAnswer) {
                    correctAnswers++;
                }
            });

            const requiredCorrectPercentage = 70;
            const questionsLength = questions.length;
            const pass = correctAnswers >= questionsLength * (requiredCorrectPercentage / 100);
            const result = {
                questionsLength,
                correctAnswers,
                pass
            };

            resolve(result);
        }, 1000);
    });
};
