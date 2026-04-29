import "./ChatLayout.css";

export default function ChatLayout({ title, subtitle, placeholder }) {
  return (
    <div className="chat-page">

      {/* Header */}
      <div className="chat-header">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>

      {/* Chat Area */}
      <div className="chat-body">

        <div className="bot-row">
          <div className="bot-msg">
            Hello! How can I assist you today?
          </div>
        </div>

        <div className="user-row">
          <div className="user-msg">
            I have a question regarding my health.
          </div>
        </div>

      </div>

      {/* Input */}
      <div className="chat-input-bar">
        <input placeholder={placeholder} />
        <button>Send</button>
      </div>

    </div>
  );
}