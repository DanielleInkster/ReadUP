import React from 'react';
import {render} from 'react-native-testing-library';
import ArticleList from '../src/components/ArticleList';

import renderer from 'react-test-renderer';

const articles = [
  {id: '1', title: 'hello'},
  {id: '2', title: 'world'},
];
const fakeCall = jest.fn();

test('renders correctly', () => {
  const tree = renderer
    .create(<ArticleList articles={articles} deleteEntry={fakeCall} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

describe('ArticleList', () => {
  describe('list', () => {
    it('generates a list of articles', () => {
      const componentTree = render(
        <ArticleList articles={articles} deleteEntry={fakeCall} />,
      );
      expect(componentTree.getAllByTestId('listItem').length).toBe(
        articles.length,
      );
    });
  });
});
