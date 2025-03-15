"use client";
import React, { useState, useEffect, useRef } from "react";
import { RefreshCw, Send, Menu, Brain } from "lucide-react";

export default function Chat() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const chatContainerRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    chatContainerRef.current?.scrollTo({
      top: chatContainerRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

  const fetchResponse = async () => {
    if (!input.trim()) return;
    setLoading(true);
    setError("");

    try {
      const userMessage = { text: input, sender: "user" };
      setMessages((prev) => [...prev, userMessage]);
      setInput("");

      const res = await fetch("https://invision-1.onrender.com/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      if (!res.ok) throw new Error(`Failed to fetch response: ${res.status}`);

      const data = await res.json();
      formatAndSetAIResponse(data.response || "⚠️ No response from AI.");
    } catch (error) {
      console.error("Error fetching response:", error);
      setError("🚨 Oops! Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const formatAndSetAIResponse = (text) => {
    const formattedResponse = formatResponse(text);
    setMessages((prev) => [...prev, { text: formattedResponse, sender: "ai" }]);
  };

  const formatResponse = (text) => {
    const lines = text.split("\n");

    return lines.map((line, index) => {
      if (line.startsWith("```")) {
        return (
          <pre key={index} className="bg-gray-200 text-black p-3 rounded-md overflow-x-auto text-xs md:text-sm">
            <code>{line.replace(/```/g, "")}</code>
          </pre>
        );
      } else if (line.startsWith("# ")) {
        return <h2 key={index} className="text-md md:text-lg font-bold mt-2">✨ {line.replace("# ", "")} ✨</h2>;
      } else if (line.startsWith("## ")) {
        return <h3 key={index} className="text-sm md:text-md font-bold mt-2">🔹 {line.replace("## ", "")}</h3>;
      } else if (line.startsWith("- ")) {
        return <li key={index} className="ml-5 list-disc">✅ {line.replace("- ", "")}</li>;
      } else if (/^\d+\./.test(line)) {
        return <li key={index} className="ml-5 list-decimal">📌 {line}</li>;
      } else {
        return <p key={index} className="mb-2">{line}</p>;
      }
    });
  };

  return (
    <div className="flex flex-col h-screen bg-white text-black">
      {/* Navbar */}
      <nav className="bg-white text-black px-4 md:px-6 py-4 flex justify-between items-center shadow-md border-b">
        <div className="flex items-center gap-2 cursor-pointer">
          <Brain className="h-6 w-6 text-primary" />
          <span className="text-lg md:text-xl font-bold text-gray-900">InVision</span>
        </div>
       
      </nav>

      {/* Chat Container */}
      <main className="flex-1 flex flex-col max-w-full md:max-w-5xl mx-auto w-full px-4 md:px-6 pt-8 pb-0 relative">
  <div
    ref={chatContainerRef}
    className="flex-1 flex flex-col p-4 pt-10 rounded-lg overflow-y-auto w-full max-h-[75vh] min-h-[63vh] no-scrollbar"
  >
    {messages.map((msg, index) => (
      <div key={index} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
        <div
          className={`p-3 max-w-[80%] md:max-w-[60%] break-words rounded-lg shadow text-xs md:text-sm ${
            msg.sender === "user"
              ? "bg-gray-300 text-black rounded-br-none"
              : "bg-gray-100 text-black rounded-bl-none"
          }`}
        >
          {typeof msg.text === "string" ? <p>{msg.text}</p> : msg.text}
        </div>
      </div>
    ))}

    {loading && (
      <div className="flex justify-start">
        <p className="p-3 bg-gray-100 text-black rounded-lg italic text-xs md:text-sm">🤖 AI is thinking...</p>
      </div>
    )}
  </div>

        {/* Input Box (Fixed to Bottom) */}
        <div className="absolute bottom-0 left-0 w-full bg-gray-100 shadow-md p-2 flex items-center">
          <textarea
            placeholder="Type your question here... ✨"
            className="flex-1 resize-none outline-none py-2 px-3 h-12 max-h-32 rounded-lg bg-white text-black placeholder-gray-500 text-sm md:text-base"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            rows={1}
          />
          <button
            className={`ml-2 rounded-full ${
              input.trim() ? "bg-black hover:bg-gray-800" : "bg-gray-400"
            } h-10 w-10 flex items-center justify-center`}
            onClick={fetchResponse}
            disabled={!input.trim() || loading}
          >
            {loading ? (
              <RefreshCw className="h-5 w-5 text-white animate-spin" />
            ) : (
              <Send className="h-5 w-5 text-white" />
            )}
          </button>
        </div>

        {error && (
          <div className="mt-4 p-2 border rounded bg-red-100 text-red-600 text-center">{error}</div>
        )}
      </main>
    </div>
  );
}
