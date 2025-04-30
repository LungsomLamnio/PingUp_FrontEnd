import React from "react";
import "./ChatPage.css";

export default function ChatPage() {
  return (
    <div className="d-flex vh-100">
      {/* Sidebar */}
      <div
        className="bg-dark text-white p-3"
        style={{ width: "30%", overflowY: "auto" }}
      >
        <h5 className="text-center">Chats</h5>
        <ul className="list-group list-group-flush mt-3">
          {["General", "GDG", "Hostel", "AdtU", "Family"].map((chat, idx) => (
            <li key={idx} className="list-group-item list-group-item-action">
              {chat}
            </li>
          ))}
        </ul>
      </div>

      {/* Chat Window */}
      <div className="flex-grow-1 d-flex flex-column bg-light">
        {/* Header */}
        <div className="bg-primary text-white p-2 d-flex justify-content-between align-items-center">
          <h6 className="m-0">Selected Chat</h6>
          <button className="btn btn-sm btn-outline-light">Logout</button>
        </div>

        {/* Messages */}
        <div className="flex-grow-1 overflow-auto p-3" id="message-area">
          {/* Example messages */}
          <div className="text-start mb-2">
            <span className="badge bg-secondary">Hey, how are you?</span>
          </div>
          <div className="text-end mb-2">
            <span className="badge bg-success">I'm good, thanks!</span>
          </div>
        </div>

        {/* Input Box */}
        <div className="p-3 bg-white border-top">
          <form className="d-flex gap-2">
            <input
              type="text"
              className="form-control"
              placeholder="Type your message..."
            />
            <button className="btn btn-primary">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}
