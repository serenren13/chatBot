import { useState } from "react";
import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL || 'http://localhost:5001';

type Message = {
  role: "user" | "assistant";
  content: string;
};
function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    const currentInput = input;
    setInput("");
    setIsLoading(true);

    try {
      const response = await axios.post(`${baseURL}/chat`, {
        message: currentInput,
      });
      const assistantMessage: Message = { role: "assistant", content: response.data.message };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };


  return (
    // UI goes here
    <div>
      {messages.map((message, index) => (
        <div key={index}>
          <strong>{message.role}:</strong> {message.content}
      </div>
      ))}
      <input 
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        placeholder="Type a message..."
      />
      <button onClick={sendMessage} disabled={isLoading}>
        {isLoading ? "Loading..." : "Send"}
      </button>
    </div>
  );
}

export default App;
