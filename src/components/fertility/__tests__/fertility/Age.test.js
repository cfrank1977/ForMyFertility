import React from 'react';
import Age from '../../questions/Age';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <Age />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
