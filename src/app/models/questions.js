const questions = () => [
    {
        question: `
1. Given the following,

1.	class X { void do1() { } }
2.	class Y extends X { void do2() { } }
3.
4.	class Chrome {
5.		public static void main(String [] args) {
6.			X x1 = new X();
7.			X x2 = new Y();
8.			Y y1 = new Y();
9.			// insert code here
10.	} }

Which, inserted at line 9, will compile? (Choose all that apply.)
    `,
        answer: ["x2.do2();", "(Y)x2.do2();", "((Y)x2).do2();", "None of the above statements will compile."],
        correctAnswerIndex: 2
    },
    { question: "Primitive datatypes are allocated on stack.", answer: ["True", "False"], correctAnswerIndex: 0 },
    {
        question: "Can we create an instance of Enum outside of Enum itself?",
        answer: ["Yes", "No"],
        correctAnswerIndex: 1
    },
    {
        question: "What type of variable can be defined in an interface?",
        answer: ["public static", "private final", "public final", "static final"],
        correctAnswerIndex: 0
    },
    { question: "Question 4", answer: ["Ipsim", "lotus", "Idk", "Wrong"], correctAnswerIndex: 0 }
];

export default questions;
