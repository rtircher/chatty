import React, { Component } from 'react';
import './App.css';
import ContactList from './ContactList';
import MessageList from './MessageList';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app-header">
          Chatty <i className="fa fa-comments-o" aria-hidden="true" />
        </div>
        <div className="contacts-container">
          <ContactList />
        </div>
        <div className="messages-container">
          <MessageList />
        </div>
      </div>
    );
  }
}

export default App;
