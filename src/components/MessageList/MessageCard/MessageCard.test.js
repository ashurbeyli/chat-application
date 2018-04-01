import React from 'react';
import { mount } from 'enzyme';

import { MessageCard } from './';
import { message } from '../../../data/fixtures';

let props = {
  data: message
};

describe('MessageCard', () => {
  describe('render if user is not current', () => {
    const wrapper = mount(<MessageCard {...props}/>);

    it('renders correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('should render div.messages-list__card', () => {
      expect(wrapper.find('.messages-list__card').exists()).toBe(true);
    });

    it('should render span contains Author name', () => {
      expect(wrapper.find('.messages-list__card-holder').text()).toEqual('Ninja');
    });

    it('should render p contains message text', () => {
      expect(wrapper.find('p').text()).toEqual('Hello world');
    });

    it('should render correct time', () => {
      expect(wrapper.find('.messages-list__datetime').find('time').text()).toEqual('30 Mar 2018 03:34');
    });
  });

  describe('render if user is current', () => {
    // setting current user as data.author
    props = {...props, user: props.data.author};
    const wrapper = mount(<MessageCard {...props}/>);

    it('should render div.messages-list__card.messages-list__card--right', () => {
      expect(wrapper.find('.messages-list__card.messages-list__card--right').exists()).toBe(true);
    });

    it('should not render span contains Author name', () => {
      expect(wrapper.find('.messages-list__card-holder').exists()).toBe(false);
    });

  });

});