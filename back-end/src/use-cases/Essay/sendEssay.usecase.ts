import axios from 'axios';
import { z } from 'zod';
import { prompt } from './prompt';

export class SendEssayUseCase {
    async execute({ userId, essay }: { userId: string; essay: string }) {
        // z.string().uuid().parse(userId);

        const res = await axios.post(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${process.env.GEMINI_API_KEY}`,
            {
                contents: [
                    {
                        parts: [
                            {
                                text: `${prompt} ${essay}`,
                            },
                        ],
                    },
                ],
            },
        );

        const { data } = res;

        return data.candidates[0].content.parts[0].text;
    }
}
