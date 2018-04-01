import React from 'react';
import { connect } from 'react-redux';

import API from '../../api/';
import MessageCard from './MessageCard';
import { loadMessages } from '../../actions/messageActions';

import './MessageList.css';

const CURRENT_AUTHOR = 'Tom';

export class MessageList extends React.Component {
  componentDidUpdate() {
    this.scrollToBottom();
  }
  scrollToBottom() {
    const messageList = document.getElementById('messageList');
    const scrollHeight = messageList.scrollHeight;
    const height = messageList.clientHeight;
    messageList.scrollTop = scrollHeight - height;
  }

  componentDidMount() {
    if (this.props.messages.length === 0) {
      this.fetchMessages();
    }
  }
  fetchMessages() {
    let timestamp = (this.props.messages.length)
      ? this.getLastMessageTimestamp()
      : false;
    //
    API.getMessages({ timestamp })
      .then((res) => this.props.loadMessages(res))
      .catch((err) => console.error(err));
  }
  getLastMessageTimestamp() {
    return this.props.messages.pop().timestamp;
  }

  render () {
    return (
      <div className="message-list" id="messageList">
        {
          this.props.messages.map( (message) => {
            return <MessageCard key={message._id} data={message} user={CURRENT_AUTHOR} />;
          })
        }
      </div>
    );
  }
}

// connecting component to store
const mapStateToProps = (state) => {
  return { messages: state.messages };
};

export default connect(mapStateToProps, { loadMessages })(MessageList);