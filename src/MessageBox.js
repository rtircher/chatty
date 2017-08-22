import React, { Component } from 'react';
import './MessageBox.css';

class MessageBox extends Component {
  render() {
    return (
      <div className="message-box">
        <textarea
          className="message"
          autoComplete="off"
          autoFocus="true"
          placeholder="Write a message..."
        />
        <button className="send">
          <i className="fa fa-paper-plane" aria-hidden="true" />
        </button>
      </div>
    );
  }
}

export default MessageBox;
