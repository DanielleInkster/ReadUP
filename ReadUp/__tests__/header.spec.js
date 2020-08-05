import React from 'react';
import {render} from 'react-native-testing-library';
import Header from '../src/components/Header';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<Header />).toJSON();
  expect(tree).toMatchSnapshot();
});

describe('Header', () => {
  it('displays the title', () => {
    const {queryByText} = render(<Header title="ReadUp" />);
    expect(queryByText('ReadUp')).not.toBeNull();
  });
});
