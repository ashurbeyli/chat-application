import React from 'react';
import { shallow } from 'enzyme';

import { MessageForm } from './index';

const mockMessage = 'message';

describe('MessageForm', () => {
  const wrapper = shallow(<MessageForm />);

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render form', () => {
    expect(wrapper.find('form').exists()).toBe(true);
    expect(wrapper.find('input').exists()).toBe(true);
    expect(wrapper.find('button').exists()).toBe(true);
  });

  describe('should update message', () => {

    beforeEach(() => {
      wrapper.find('input').simulate('change', { target: { name: 'message', value: mockMessage} });
    });

    it('should update message in state', () => {
      expect(wrapper.state().message).toEqual(mockMessage);
    });
  });

});