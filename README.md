#  AI Quiz Generator (TypeScript Edition)

A modular AI agent built with **TypeScript** that automatically generates structured quizzes in JSON format using OpenAI's GPT-4o model.

##  Features
- **Strict JSON Output**: Uses OpenAI's `response_format: { "type": "json_object" }` to ensure reliable data parsing.
- **Type Safety**: Fully typed with TypeScript interfaces (`Quiz`, `Question`) for robust development.
- **Customizable**: Easily adjust the topic, difficulty, and number of questions.

##  Project Structure
- `quizAgent.ts`: Core logic for OpenAI API communication.
- `types.ts`: Interface definitions for the quiz data structure.
- `main.ts`: Entry point to run the generator.

##  Quick Start

### 1. Install Dependencies
Ensure you have Node.js installed, then run:
```bash
npm install openai typescript ts-node @types/node
