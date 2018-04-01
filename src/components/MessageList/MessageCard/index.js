import React from 'react';
import Moment from 'react-moment';

import './MessageCard.css';

export const MessageCard = ({ data, user }) => {
  const { message, author, timestamp } = data;

  // float message-card to right if message author is logged in user
  const modifyCardForCurrentAuthor = () => {
    return checkAuthorIsCurrent() ? 'messages-list__card--right' : '';
  };

  const checkAuthorIsCurrent = () => {
    return author === user;
  };

  // if author is CURRENT_AUTHOR need to not show author name
  const showAuthorName = () => {
    return author !== user;
  };

  const filterTimestamp = () => {
    return Number(timestamp);
  };

  return (
    <div>
      <div className={'messages-list__card ' + modifyCardForCurrentAuthor() }>
        { showAuthorName() ? <span className="messages-list__card-holder">{author}</span> : ''}
        <p>{message}</p>
        <span className="messages-list__datetime">
          <Moment format="DD MMM YYYY hh:mm">
            {filterTimestamp()}
          </Moment>
        </span>
      </div>
      <div className="clearfix"/>
    </div>
  );
};
export default MessageCard;