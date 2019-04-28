/**
 * @jest-environment jsdom
 */
import React from 'react'
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import SignOut from '../SignOut';
import {
  Container,
  Button,
  Text,
  Content,
} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

describe('>>>SignOut --- Shallow Render REACT COMPONENTS', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<SignOut />)

  })

  it('renders correctly', () => {
    const tree = renderer.create(
      <SignOut />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('+++ render the DUMB component', () => {
    expect(wrapper.length).toEqual(1)
  });
  it('The <Button /> component exists', () => {
    expect(wrapper.find(Button).exists()).toBe(true);
  });
  it('contains 1 <Button /> component', () => {
    expect(wrapper.find(Button).length).toBe(1);
  });
  it('contains 1 <Container /> component', () => {
    expect(wrapper.find(Container).length).toBe(1);
  });
  it('contains 1 <Text /> component', () => {
    expect(wrapper.find(Text).length).toBe(1);
  });
  it('contains 1 <Content /> component', () => {
    expect(wrapper.find(Content).length).toBe(1);
  });
});