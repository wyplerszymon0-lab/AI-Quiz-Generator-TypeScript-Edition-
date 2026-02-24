import { QuizAgent } from './quizAgent';

const agent = new QuizAgent('TWÓJ_KLUCZ_API');

async function start() {
    console.log("🚀 Generuję quiz o programowaniu w TypeScript...");
    const quiz = await agent.generateQuiz("TypeScript i Node.js", 3);

    if (quiz) {
        console.log(`\n=== ${quiz.title} ===\n`);
        quiz.questions.forEach((q, index) => {
            console.log(`${index + 1}. ${q.question}`);
            q.options.forEach(opt => console.log(`   - ${opt}`));
            console.log(`   ✅ Poprawna: ${q.correctAnswer}\n`);
        });
    }
}

start();
