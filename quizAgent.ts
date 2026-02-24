import OpenAI from 'openai';
import { Quiz } from './types';

export class QuizAgent {
    private client: OpenAI;

    constructor(apiKey: string) {
        this.client = new OpenAI({ apiKey });
    }

    async generateQuiz(topic: string, count: number = 3): Promise<Quiz | null> {
        const systemPrompt = `
            Jesteś ekspertem edukacyjnym. Generujesz quizy w formacie JSON.
            Każdy quiz musi zawierać tytuł, temat oraz listę pytań.
            Każde pytanie musi mieć 4 opcje, jedną poprawną odpowiedź i krótkie wyjaśnienie.
            ODPOWIADAJ WYŁĄCZNIE W FORMACIE JSON.
        `;

        try {
            const response = await this.client.chat.completions.create({
                model: "gpt-4o",
                messages: [
                    { role: "system", content: systemPrompt },
                    { role: "user", content: `Stwórz quiz na temat: ${topic}. Liczba pytań: ${count}.` }
                ],
                response_format: { type: "json_object" } // Wymuszamy JSON
            });

            const content = response.choices[0].message.content;
            return content ? JSON.parse(content) : null;
        } catch (error) {
            console.error("Błąd generowania quizu:", error);
            return null;
        }
    }
}
