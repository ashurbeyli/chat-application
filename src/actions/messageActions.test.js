import * as actions from './messageActions';
import { LOAD_MESSAGES } from '../types/messageTypes';
import { ADD_MESSAGE } from '../types/messageTypes';
import { message, messages } from '../data/fixtures';

describe('messageActions', () => {
  it('should create an addMessage action', () => {
    const expectedAction = { type: ADD_MESSAGE, message };

    expect(actions.addMessage(message)).toEqual(expectedAction);
  });

  it('should create an loadMessages action', () => {
    const expectedAction = { type: LOAD_MESSAGES, messages };

    expect(actions.loadMessages(messages)).toEqual(expectedAction);
  });

});

