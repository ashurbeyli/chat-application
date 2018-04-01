import React from 'react';
import { shallow } from 'enzyme';

import { MessageList } from './';
import { messages } from '../../data/fixtures';

const props = { messages };

describe('MessageList', () => {
  const wrapper = shallow(<MessageList {...props}/>);

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render MessageCard', () => {
    expect(wrapper.find('[user="Tom"]').length).toEqual(props.messages.length);
  });

});