import React from 'react';
import Report from '../../Report';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <Report />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
