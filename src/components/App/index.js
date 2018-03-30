import React from 'react';

import './App.css';

class App extends React.Component {
  render () {
    return (
      <div>
        <div className="block-container">
          <div className="messages-list">
            <div className="messages-list__card">
              <span className="messages-list__card-holder">Ninja</span>
              <p>Great resource, thanks</p>
              <span className="messages-list__datetime">10 Mar 2018 9:55</span>
            </div>
            <div className="clearfix" />
            <div className="messages-list__card">
              <span className="messages-list__card-holder">Ninja</span>
              <p>Great resource, thanks</p>
              <span className="messages-list__datetime">10 Mar 2018 9:55</span>
            </div>
            <div className="clearfix" />
            <div className="messages-list__card">
              <span className="messages-list__card-holder">Ninja</span>
              <p>Great resource, thanks</p>
              <span className="messages-list__datetime">10 Mar 2018 9:55</span>
            </div>
            <div className="clearfix" />
            <div className="messages-list__card messages-list__card--right">
              <p>Hey folks! I wanted to get in touch with you regarding the project.</p>
              <span className="messages-list__datetime">10 Mar 2018 9:55</span>
            </div>
            <div className="clearfix" />
          </div>
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