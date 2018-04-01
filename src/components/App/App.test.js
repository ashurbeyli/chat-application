import React from 'react';
import { shallow } from 'enzyme';

import App from './';

describe('App', () => {
  const app = shallow(<App />);

  it('renders correctly', () => {
    expect(app).toMatchSnapshot();
  });

  it('should render MessageList', () => {
    expect(app.find('.block-container').find('Connect(MessageList)').exists()).toBe(true);
  });

  it('should render MessageForm', () => {
    expect(app.find('.footer').find('Connect(MessageForm)').exists()).toBe(true);
  });

});