import React from 'react';
import {render} from 'react-native-testing-library';
import Header from '../src/components/Header';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<Header />).toJSON();
  expect(tree).toMatchSnapshot();
});
