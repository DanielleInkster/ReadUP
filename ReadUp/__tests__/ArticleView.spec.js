import React from 'react';
import {render, fireEvent} from 'react-native-testing-library';
import ArticleView from '../src/components/ArticleView';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<ArticleView />).toJSON();
  expect(tree).toMatchSnapshot();
});

// describe('AddArticle', () => {
//   describe('delete article', () => {
//     it('clears the message field', () => {
//         const { getByTestId } = render(<ArticleView />);

//       fireEvent.changeText(getByTestId('messageText'), 'Hello world');
//       fireEvent.press(getByTestId('clearButton'));
//     });
//   });
// });
