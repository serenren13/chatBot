import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import OpenAI from "openai";
import cors from "cors";

dotenv.config(); // Load the .env file

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});
const app = express();
app.use(cors());
const port = 5001;

// use middleware to parse json request bodies 
app.use(bodyParser.json());

// Stores the full conversation history to maintain context btwn messages
const conversationHistory: { role: "user" | "assistant"; content: string }[] = [];

app.post('/chat', async (req, res) => {
    try{
        const { message } = req.body;
        conversationHistory.push({ role: "user", content: message });
        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: conversationHistory,
        });

        const assistantMessage = response.choices[0]?.message.content ?? "";
        conversationHistory.push({ role: "assistant", content: assistantMessage });
        res.json({ message: assistantMessage });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Something went wrong" });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})