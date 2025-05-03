import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";

export default function ChatPage() {
  const socketRef = useRef(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    socketRef.current = io("https://pingup-backend.onrender.com", {
      transports: ["websocket"],
    });

    socketRef.current.on("receive_message", (data) => {
      setMessages((prev) => [...prev, { text: data, from: "other" }]);
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, []);

  const handleSend = (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    setMessages((prev) => [...prev, { text: newMessage, from: "me" }]);
    socketRef.current.emit("send_message", newMessage);
    setNewMessage("");
  };

  return (
    <div className="d-flex vh-100">
      <div className="flex-grow-1 d-flex flex-column bg-light">
        <div className="bg-primary text-white p-2">PingUp Chat</div>

        <div className="flex-grow-1 p-3 overflow-auto">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`mb-2 d-flex ${
                msg.from === "me"
                  ? "justify-content-end"
                  : "justify-content-start"
              }`}
            >
              <div
                className={`p-2 rounded ${
                  msg.from === "me"
                    ? "bg-success text-white"
                    : "bg-secondary text-white"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        <form onSubmit={handleSend} className="d-flex p-3 border-top bg-white">
          <input
            type="text"
            className="form-control me-2"
            placeholder="Type a message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button type="submit" className="btn btn-primary">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
