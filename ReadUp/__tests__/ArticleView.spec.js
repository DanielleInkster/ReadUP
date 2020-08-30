import React from 'react';
import {render, fireEvent} from 'react-native-testing-library';
import ArticleView from '../src/components/ArticleView';

import renderer from 'react-test-renderer';

const article = {id: 1, title: 'hello'};
const fakeCall = jest.fn();

test('renders correctly', () => {
  const tree = renderer
    .create(<ArticleView article={article} deleteEntry={fakeCall} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

describe('ArticleView', () => {
  describe('clicking Add Article', () => {
    it('runs getData function', () => {
      const {getByTestId} = render(
        <ArticleView article={article} deleteEntry={fakeCall} />,
      );
      fireEvent.press(getByTestId('removeArticle'));
      expect(fakeCall).toHaveBeenCalled();
    });
  });
});
