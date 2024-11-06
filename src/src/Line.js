import React, { useState } from "react";
import "./Line.css";

function Line() {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "こんにちは！何かお手伝いできますか？" },
  ]);
  const [inputText, setInputText] = useState("");

  const handleSend = () => {
    if (inputText.trim() === "") return;

    const newMessage = { sender: "user", text: inputText };
    setMessages([...messages, newMessage]);
    setInputText("");

    setTimeout(() => {
      const botReply = {
        sender: "bot",
        text: "ご質問ありがとうございます。こちらで対応させていただきます。",
      };
      setMessages((prevMessages) => [...prevMessages, botReply]);
    }, 1000);
  };

  return (
    <div className="chat-container">
      <div className="chat-box">
        {messages.map((msg, index) => (
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
  );
}

export default Line;
