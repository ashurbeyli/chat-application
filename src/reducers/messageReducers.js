import { LOAD_MESSAGES } from '../types/messageTypes';
import { ADD_MESSAGE } from '../types/messageTypes';

const messages = (state = [], action) => {
  switch (action.type) {
    case LOAD_MESSAGES:
      return action.messages;
    case ADD_MESSAGE:
      return [...state, action.message];
    default:
      return state;
  }
};
export default messages;