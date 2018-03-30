import React from 'react';

import './MessageCard.css';

const CURRENT_AUTHOR = 'Tom';

const MessageCard = ({ data }) => {
  const { message, author, timestamp } = data;

  // checking if message author is logged in author
  const modifyCardForCurrentAuthor = () => {
    return (author === CURRENT_AUTHOR) ? 'messages-list__card--right' : '';
  };

  // if author is CURRENT_AUTHOR need to not show author name
  const showAuthorName = () => {
    return author !== CURRENT_AUTHOR;
  };

  return (
    <div>
      <div className={'messages-list__card ' + modifyCardForCurrentAuthor() }>
        { showAuthorName() ? <span className="messages-list__card-holder">{author}</span> : ''}
        <p>{message}</p>
        <span className="messages-list__datetime">{timestamp}</span>
      </div>
      <div className="clearfix"/>
    </div>
  );
};
export default MessageCard;