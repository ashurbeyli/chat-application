import React from 'react';

import './App.css';

import MessageList from '../MessageList/index';

class App extends React.Component {
  render () {
    return (
      <div>
        <div className="block-container">
          <MessageList/>
        </div>
        <div className="footer">
          <div className="block-container">
            <form className="send-form">
              <input type="text" className="send-form__textInput" placeholder="Message" />
              <button className="send-form__sendButton">Send</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default App;