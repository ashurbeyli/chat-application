import React from 'react';
import { shallow } from 'enzyme';

import { App } from './';

describe('App', () => {
  const app = shallow(<App />);

  it('renders', () => {
    expect(app.find('.block-container').length).toEqual(1);
  });
});