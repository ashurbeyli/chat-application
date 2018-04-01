import { LOAD_MESSAGES } from '../types/messageTypes';
import { ADD_MESSAGE } from '../types/messageTypes';

export const loadMessages = (messages) => {
  return {
    type: LOAD_MESSAGES,
    messages
  };
};
export const addMessage = (message) => {
  return {
    type: ADD_MESSAGE,
    message
  };
};