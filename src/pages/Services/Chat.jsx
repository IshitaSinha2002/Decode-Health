import "./Chat.css";

export default function ChatLayout({ title, subtitle, placeholder }) {
  return (
    <div className="chat-page">

      {/* Heading */}
      <div className="chat-header">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>

      {/* Chat */}
      <div className="chat-box">
        <div className="bot-msg">
          Hello! How can I assist you today?
        </div>

        <div className="user-msg">
          I have a question regarding my health.
        </div>
      </div>

      {/* Input */}
      <div className="chat-input">
        <input placeholder={placeholder} />
        <button>Send</button>
      </div>

    </div>
  );
}