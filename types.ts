export interface Question {
    question: string;
    options: string[];
    correctAnswer: string;
    explanation: string;
}

export interface Quiz {
    title: string;
    topic: string;
    questions: Question[];
}
