import React from 'react';
import EditView from '../src/components/ArticleView';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<EditView />).toJSON();
  expect(tree).toMatchSnapshot();
});
