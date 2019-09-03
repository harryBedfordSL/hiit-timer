import React from 'react';
import { shallow } from 'enzyme';
import App from '../../containers/App';

test('Application renders without crashing', () => {
  const wrapper = shallow(<App />)
  expect(wrapper.exists()).toBe(true); 
});
