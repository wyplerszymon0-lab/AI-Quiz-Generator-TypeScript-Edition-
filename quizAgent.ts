import OpenAI from 'openai';
import { Quiz } from './types';

export class QuizAgent {
    private client: OpenAI;

    constructor(apiKey: string) {
        this.client = new OpenAI({ apiKey });
    }

    async generateQuiz(topic: string, count: number = 3): Promise<Quiz | null> {
        const systemPrompt = `
            You are an educational expert. Your task is to generate high-quality quizzes in JSON format.
            Each quiz must include a title, a topic, and a list of questions.
            Each question must have 4 multiple-choice options, one correct answer, and a brief educational explanation.
            LANGUAGE: Always respond in English.
            FORMAT: Respond ONLY with a valid JSON object.
        `;

        try {
            const response = await this.client.chat.completions.create({
                model: "gpt-4o",
                messages: [
                    { role: "system", content: systemPrompt },
                    { role: "user", content: `Generate a quiz about: ${topic}. Number of questions: ${count}.` }
                ],
                response_format: { type: "json_object" } 
            });

            const content = response.choices[0].message.content;
            return content ? JSON.parse(content) : null;
        } catch (error) {
            console.error("Quiz Generation Error:", error);
            return null;
        }
    }
}
