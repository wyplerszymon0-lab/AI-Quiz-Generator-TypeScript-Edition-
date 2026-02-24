import { QuizAgent } from './quizAgent';

const API_KEY = 'YOUR_OPENAI_API_KEY_HERE';
const agent = new QuizAgent(API_KEY);

async function start() {
    console.log("🚀 Generating a quiz about TypeScript & Node.js...");
    
    const quiz = await agent.generateQuiz("TypeScript and Node.js Development", 3);

    if (quiz) {
        console.log(`\n=== ${quiz.title.toUpperCase()} ===`);
        console.log(`Topic: ${quiz.topic}\n`);

        quiz.questions.forEach((q, index) => {
            console.log(`${index + 1}. ${q.question}`);
            
            q.options.forEach((opt, i) => {
                const label = String.fromCharCode(65 + i); // 65 is 'A' in ASCII
                console.log(`   ${label}) ${opt}`);
            });
            
            console.log(`   ✅ Correct Answer: ${q.correctAnswer}`);
            
            if (q.explanation) {
                console.log(`   💡 Explanation: ${q.explanation}\n`);
            } else {
                console.log(""); // Just a newline
            }
        });
        
        console.log("--- End of Quiz ---");
    } else {
        console.log("❌ Error: Could not generate the quiz. Check your API key or connection.");
    }
}

start();
