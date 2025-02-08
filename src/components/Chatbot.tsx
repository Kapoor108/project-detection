import React, { useState, useEffect, useRef } from "react";
import { Send, Bot } from "lucide-react";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    {
      type: "bot",
      content:
        "Hello! I'm your AI assistant. How can I help you with fraud detection today?",
    },
  ]);
  const [input, setInput] = useState("");
  const chatContainerRef = useRef(null);

  useEffect(() => {
    chatContainerRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { type: "user", content: input }]);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          type: "bot",
          content:
            "I understand your concern. Our fraud detection system is analyzing your query. Please provide more details about the transaction you'd like to verify.",
        },
      ]);
    }, 1000);

    setInput("");
  };

  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center px-4 sm:px-6 py-6 sm:py-12">
      <div className="max-w-2xl w-full bg-gray-800 p-4 sm:p-6 rounded-2xl shadow-lg flex flex-col">
        {/* Chatbot Header */}
        <div className="flex items-center mb-4 sm:mb-6">
          <div className="bg-emerald-500/10 p-2 sm:p-3 rounded-lg">
            <Bot className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-500" />
          </div>
          <h2 className="text-lg sm:text-2xl font-bold text-gray-100 ml-2 sm:ml-3">
            AI Fraud Detection Assistant
          </h2>
        </div>

        {/* Chat Window */}
        <div className="flex flex-col space-y-3 sm:space-y-4 h-80 sm:h-[400px] overflow-y-auto p-3 sm:p-4 bg-gray-700 rounded-lg">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[85%] sm:max-w-[75%] p-3 sm:p-4 rounded-2xl text-sm sm:text-base ${
                  message.type === "user"
                    ? "bg-gradient-to-r from-emerald-500 to-teal-600 text-white"
                    : "bg-gray-800 text-gray-100"
                }`}
              >
                {message.content}
              </div>
            </div>
          ))}
          <div ref={chatContainerRef} />
        </div>

        {/* Input Field */}
        <form onSubmit={handleSubmit} className="flex gap-2 sm:gap-4 mt-4 sm:mt-6">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-grow px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-gray-700 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
          <button
            type="submit"
            className="p-2 sm:p-3 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-600 text-white hover:from-emerald-600 hover:to-teal-700 transform hover:scale-105 transition-all duration-300"
          >
            <Send className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chatbot;
