import React from 'react';

import './App.css';

import MessageList from '../MessageList/index';
import MessageForm from '../MessageForm/index';

export class App extends React.Component {
  render () {
    return (
      <div>
        <div className="block-container">
          <MessageList/>
        </div>
        <div className="footer">
          <MessageForm/>
        </div>
      </div>
    );
  }
}
export default App;