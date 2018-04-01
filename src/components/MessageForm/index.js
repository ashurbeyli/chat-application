import React from 'react';
import { connect } from 'react-redux';

import API from '../../api/';
import { addMessage } from '../../actions/messageActions';

import './MessageForm.css';


const CURRENT_AUTHOR = 'Tom';

export class MessageForm extends React.Component {
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
      API.saveMessage(this.state)
        .then((data) => {
          this.props.addMessage(data);
          this.setState({ message: ''});
        })
        .catch((err) => console.error((err)));
    }
  }
  handleInputChange = (e) => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  }
  isValid = () => {
    //@TODO do some validation here
    return this.state.message !== '';
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
            autoComplete="off"
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

export default connect(null, { addMessage })(MessageForm);