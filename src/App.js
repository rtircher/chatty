import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ContactList from './ContactList';
import MessageList from './MessageList';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app-header">
          Chatty
          <img src={logo} className="app-logo" alt="logo" />
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
