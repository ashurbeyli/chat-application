import { SET_MESSAGES } from '../types/messageTypes';

export const setMessages = (messages) => {
  return {
    type: SET_MESSAGES,
    messages
  };
};