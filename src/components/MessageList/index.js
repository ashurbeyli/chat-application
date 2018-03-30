import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import './MessageList.css';

import config from '../../config';

import MessageCard from './MessageCard';
import { setMessages } from '../../actions/messageActions';

class MessageList extends React.Component {
  constructor () {
    super();

    this.state = {
      messages: []
    };
  }
  componentDidMount() {
    if (this.props.messages.length === 0) {
      fetch(`https://chatty.kubernetes.doodle-test.com/api/chatty/v1.0/?token=${config.TOKEN}`)
        .then((res) => res.json())
        .then((json) => this.props.setMessages(json));
    }
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