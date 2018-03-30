import React from 'react';

import './MessageForm.css';
import config from '../../config';

const CURRENT_AUTHOR = 'Tom';

class MessageForm extends React.Component {
  constructor () {
    super();

    this.state = {
      author: CURRENT_AUTHOR,
      message: ''
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.isValid()) {
      // send post request
      fetch(config.API_URL, {
        method: 'post',
        body: JSON.stringify(this.state)
      }).then(function(response) {
        return response.json();
      }).then(function(data) {
        console.log(data);
      });
      // make empty message field
      this.setState({ message: ''});
    }
  }
  handleInputChange = (e) => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  }
  isValid = () => {
    return this.state.message;
  }
  render () {
    const { message } = this.state;
    return (
      <div className="block-container">
        <form
          className="send-form"
          method="POST"
          onSubmit={this.handleSubmit}
        >
          <input
            className="send-form__textInput"
            name="message"
            onChange={this.handleInputChange}
            placeholder="Message"
            type="text"
            value={message}
          />
          <button className="send-form__sendButton">Send</button>
        </form>
      </div>
    );
  }
}
export default MessageForm;