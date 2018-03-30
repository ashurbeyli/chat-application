import { SET_MESSAGES } from '../types/messageTypes';

const initState = {
  messages: []
};

export default (state = initState, action) => {
  switch (action.type) {
    case SET_MESSAGES:
      return { ...state, messages: action.messages };
    default:
      return state;
  }
};