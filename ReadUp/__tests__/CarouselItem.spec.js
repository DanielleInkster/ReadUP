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

const article2 = {
  id: '2',
  title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  description:
    'sed do eiusmod tempor incididunt ut labore et dolore magna aliquaUt enim ad minim veniam,' +
    'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' +
    'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
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

describe('trim', () => {
  it('trims title and description', () => {
    const {getByText} = render(<CarouselItem item={article2} index={2} />);
    expect(
      getByText('Lorem ipsum dolor sit amet, consectetur adipiscing...'),
    ).not.toBeNull();
    expect(
      getByText(
        'sed do eiusmod tempor incididunt ut labore et dolore magna aliquaUt enim ad minim ven...',
      ),
    ).not.toBeNull();
  });
});

describe('Read On button', () => {
  it('opens Link onClick', () => {
    const {getByTestId} = render(<CarouselItem item={article} index={1} />);
    fireEvent.press(getByTestId('button'));
    expect(mockOpenURL).toHaveBeenCalled();
  });
});
