import React from 'react';
import ArticleView from '../src/components/ArticleView';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<ArticleView />).toJSON();
  expect(tree).toMatchSnapshot();
});
