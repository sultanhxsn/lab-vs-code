import React from 'react';
import '../Styles/Messages.css';

const Messages = ({ messages }) => {
    return (
      <div className="messages-container">
        <h2 className="messages-title">Messages</h2>
        {messages && messages.length > 0 ? (
          messages.map((message, index) => (
            <div key={index} className="message-item">
              <div className="sender">Message {index + 1}:</div>
              <div className="text">{message}</div>
            </div>
          ))
        ) : (
          <div className="no-messages">No messages to display</div>
        )}
      </div>
    );
  };
export default Messages;