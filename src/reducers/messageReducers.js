import { SET_MESSAGES } from '../types/messageTypes';
import { ADD_MESSAGE } from '../types/messageTypes';

const messages = (state = [], action) => {
  switch (action.type) {
    case SET_MESSAGES:
      return action.messages;
    case ADD_MESSAGE:
      return action.message;
    default:
      return state;
  }
};
export default messages;