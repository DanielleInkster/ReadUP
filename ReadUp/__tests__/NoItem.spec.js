import React from 'react';
import {render} from 'react-native-testing-library';
import NoItem from '../src/components/NoItem';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<NoItem />).toJSON();
  expect(tree).toMatchSnapshot();
});

describe('NoItem', () => {
  it('displays startup info', () => {
    const {getByText} = render(<NoItem />);
    expect(getByText('Nothing to see here - yet! ')).not.toBeNull();
    expect(
      getByText("Press the 'Edit' button to start adding articles."),
    ).not.toBeNull();
  });
});
