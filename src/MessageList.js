import React, { Component } from 'react';
import VideoChat from './VideoChat';

class MessageList extends Component {
  render() {
    return (
      <div className="message-list">
        <ul>
          <li>Message</li>
        </ul>
        <VideoChat />
      </div>
    );
  }
}

export default MessageList;
