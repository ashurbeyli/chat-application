import messageReducer from './messageReducers';
import * as actions from '../actions/messageActions';
import { LOAD_MESSAGES } from '../types/messageTypes';
import { ADD_MESSAGE } from '../types/messageTypes';
import { message, messages } from '../data/fixtures';

describe('messageReducer', () => {
  it('should return messages', () => {
    expect(messageReducer([], { type: LOAD_MESSAGES, messages })).toEqual(messages);
  });

  it('should return message', () => {
    expect(messageReducer(messages, { type: ADD_MESSAGE, message })).toEqual([...messages, message]);
  });
});
