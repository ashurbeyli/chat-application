import { SET_MESSAGES } from '../types/messageTypes';

const messages = (state = [], action) => {
  switch (action.type) {
    case SET_MESSAGES:
      return action.messages;
    default:
      return state;
  }
};
export default messages;