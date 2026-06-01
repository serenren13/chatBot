# ChatBot

A full-stack ChatGPT clone built with React, TypeScript, and Express.js.

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [How to Use](#how-to-use)
- [Major Components](#major-components)
- [Credits](#credits)

## Description

A conversational AI web app that uses OpenAI's GPT-3.5-turbo model to hold multi-turn conversations. The backend maintains conversation history so the AI has context across messages, mimicking the experience of ChatGPT.

## Installation

**Prerequisites:** Node.js, an OpenAI API key

**Backend**
```bash
cd backend
npm install
```

Create a `.env` file in the `backend` folder:
```
OPENAI_API_KEY=your_key_here
```

**Frontend**
```bash
cd frontend
npm install
```

## How to Use

Start the backend (port 5001):
```bash
cd backend
npm start
```

Start the frontend (port 5173):
```bash
cd frontend
npm run dev
```

Then open `http://localhost:5173` and start chatting.

## Major Components

| Component | Description | Status |
|-----------|-------------|--------|
| Express backend | Handles requests to OpenAI API, maintains conversation history | ✅ Complete |
| React frontend | Chat UI with message display and input | ✅ Complete |
| Conversation history | Context passed to OpenAI on every message for coherent multi-turn chat | ✅ Complete |

## Credits

Built by [Serenity](https://github.com/serenren13) as part of the Launch SWE 2026 fellowship.
