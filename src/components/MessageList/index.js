import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import './MessageList.css';

import { prepareFetchUrl } from '../../config';

import MessageCard from './MessageCard';
import { setMessages } from '../../actions/messageActions';

class MessageList extends React.Component {
  componentDidMount() {
    if (this.props.messages.length === 0) {
      this.fetchMessages();
    }
  }
  fetchMessages() {
    let timestamp = (this.props.messages.length)
      ? this.getLastMessageTimestamp()
      : false;

    fetch(prepareFetchUrl({ timestamp }))
      .then((res) => res.json())
      .then((json) => this.props.setMessages(json));
  }
  getLastMessageTimestamp() {
    return this.props.messages.pop().timestamp;
  }

  render () {
    return (
      <div className="messages-list">
        {
          this.props.messages.map( (message) => {
            return <MessageCard key={message._id} data={message} />;
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
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ setMessages }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);