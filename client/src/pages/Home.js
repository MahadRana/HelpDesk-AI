import {useState } from "react";

function Home() {
    const [messages, setMessages] = useState([{
    role:"bot", 
    content:"Hello, my name is HelpGPT! How can I help you with your PC today?"
}])
    const [inputValue, setInputValue] = useState("")
const handleSendMessage = async () => {
    if (inputValue.trim() === "") return; // Don't send empty messages

    // Add the user's message to the chat
    setMessages((prevMessages) => [
      ...prevMessages,
      { role: "user", content: inputValue },
    ]);
    const text = inputValue
    setInputValue("");

    // Send the message to the backend API (Replace 'http://localhost:4000/help' with your actual endpoint)
    try {
      const response = await fetch('/help', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });
      if (!response.ok) {
        throw new Error(`API error: ${response.statusText}`);
      }

      const data = await response.json();

      // Add the bot's response to the chat
      setMessages((prevMessages) => [
        ...prevMessages,
        { role: "bot", content: data.message },
      ]);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };
    
  
    return (
    <div className="chat-container">
        <div className="chat">
            {messages.map((message, index) => (
            <div
                key={index}
                className={`message ${message.role === "bot" ? "bot" : "user"}`}
            >
                {message.content}
            </div>
            ))}
        </div>
        <div className="input-bar">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type your message..."
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSendMessage();
            }}
          />
        </div>
    </div>
    );
    }

export default Home;
