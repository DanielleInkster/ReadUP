import React from 'react';
import {render, fireEvent} from 'react-native-testing-library';
import CarouselItem from '../src/components/CarouselItem';

import renderer from 'react-test-renderer';

const article = {
  id: '1',
  title: 'hello',
  description: 'world',
  url: 'www.fakesite.com',
  image: '../src/images/none.jpg',
};
let mockOpenURL = jest.fn();

jest.mock('react-native/Libraries/Linking/Linking', () => ({
  openURL: mockOpenURL,
}));

test('renders correctly', () => {
  const tree = renderer
    .create(<CarouselItem item={article} index={1} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

describe('CarouselItem', () => {
  it('displays article info', () => {
    const {getByText} = render(<CarouselItem item={article} index={1} />);
    expect(getByText('hello')).not.toBeNull();
    expect(getByText('world')).not.toBeNull();
  });
});

describe('Read On button', () => {
  it('opens Link onClick', () => {
    const {getByTestId} = render(<CarouselItem item={article} index={1} />);
    fireEvent.press(getByTestId('button'));
    expect(mockOpenURL).toHaveBeenCalled();
  });
});
