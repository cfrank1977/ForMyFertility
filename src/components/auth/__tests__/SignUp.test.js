/**
 * @jest-environment jsdom
 */
import React from 'react'
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import SignUp from '../SignUp';
import {
  Container,
  Body,
  Button,
  Form,
  Text,
  Header,
  Content,
  Item,
  Input,
  Label
} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

describe('>>>SignUp --- Shallow Render REACT COMPONENTS', () => {
  let wrapper

  beforeEach(() => {

    const props = {
      inputs: jest.fn(),
      state: jest.fn(),
      authState: 'signUp'
    }

    wrapper = shallow(<SignUp {...props} />)

  })

  it('renders correctly', () => {
    const tree = renderer.create(
      <SignUp />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('+++ render the DUMB component', () => {
    expect(wrapper.length).toEqual(1)
  });
  it('The <Button /> component exists', () => {
    expect(wrapper.find(Button).exists()).toBe(true);
  });
  it('contains 3 <Button /> components', () => {
    expect(wrapper.find(Button).length).toBe(3);
  });
  it('contains 1 <Content /> component', () => {
    expect(wrapper.find(Content).length).toBe(1);
  });
  it('contains 1 <Grid /> component', () => {
    expect(wrapper.find(Grid).length).toBe(1);
  });
  it('contains 1 <Form /> component', () => {
    expect(wrapper.find(Form).length).toBe(1);
  });
  it('contains 3 <Item /> components', () => {
    expect(wrapper.find(Item).length).toBe(3);
  });
  it('contains 1 <Row /> component', () => {
    expect(wrapper.find(Row).length).toBe(1);
  });
});