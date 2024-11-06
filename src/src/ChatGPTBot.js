import React, { useState } from "react";
import "./ChatGPTBot.css";

function ChatGPTBot() {
  const [threads, setThreads] = useState([
    { id: 1, name: "スレッド 1", messages: [] },
  ]);
  const [selectedThreadId, setSelectedThreadId] = useState(threads[0].id);
  const [inputText, setInputText] = useState("");

  const selectedThread = threads.find(
    (thread) => thread.id === selectedThreadId
  );

  const handleThreadSelect = (thread) => {
    setSelectedThreadId(thread.id);
  };

  const handleSend = () => {
    if (inputText.trim() === "") return;

    const userMessage = { sender: "user", text: inputText };

    setThreads((prevThreads) =>
      prevThreads.map((thread) =>
        thread.id === selectedThreadId
          ? { ...thread, messages: [...thread.messages, userMessage] }
          : thread
      )
    );
    setInputText("");

    setTimeout(() => {
      const botReply = {
        sender: "bot",
        text: "ご質問ありがとうございます！詳しくお答えしますね。",
      };

      setThreads((prevThreads) =>
        prevThreads.map((thread) =>
          thread.id === selectedThreadId
            ? { ...thread, messages: [...thread.messages, botReply] }
            : thread
        )
      );
    }, 1000);
  };

  const handleNewThread = () => {
    const newThread = {
      id: threads.length + 1,
      name: `スレッド ${threads.length + 1}`,
      messages: [],
    };
    setThreads([...threads, newThread]);
    setSelectedThreadId(newThread.id);
  };

  return (
    <div className="chatgpt-container">
      <div className="sidebar">
        <button onClick={handleNewThread} className="new-thread-button">
          新しいスレッド
        </button>
        <div className="thread-list">
          {threads.map((thread) => (
            <div
              key={thread.id}
              className={`thread-item ${
                selectedThreadId === thread.id ? "active" : ""
              }`}
              onClick={() => handleThreadSelect(thread)}
            >
              {thread.name}
            </div>
          ))}
        </div>
      </div>
      <div className="chat-area">
        <div className="chat-box">
          {selectedThread.messages.map((msg, index) => (
            <div key={index} className={`message ${msg.sender}`}>
              {msg.text}
            </div>
          ))}
        </div>
        <div className="input-box">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="メッセージを入力..."
          />
          <button onClick={handleSend}>送信</button>
        </div>
      </div>
    </div>
  );
}

export default ChatGPTBot;
