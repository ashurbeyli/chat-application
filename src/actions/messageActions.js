import { SET_MESSAGES } from '../types/messageTypes';
import { ADD_MESSAGE } from '../types/messageTypes';

export const setMessages = (messages) => {
  return {
    type: SET_MESSAGES,
    messages
  };
};
export const addMessage = (message) => {
  return {
    type: ADD_MESSAGE,
    message
  };
};