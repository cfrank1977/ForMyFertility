/**
 * @jest-environment jsdom
 */
import React from 'react'
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import ConfirmSignIn from '../ConfirmSignIn';
import {
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

describe('>>>ConfirmSignIn --- Shallow Render REACT COMPONENTS', () => {
  let wrapper

  beforeEach(() => {

    const props = {
      inputs: jest.fn(),
      state: jest.fn(),
      authState: 'confirmSignIn'
    }

    wrapper = shallow(<ConfirmSignIn {...props} />)

  })

  it('renders correctly', () => {
    const tree = renderer.create(
      <ConfirmSignIn />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('+++ render the DUMB component', () => {
    expect(wrapper.length).toEqual(1)
  });
  it('contains 2 <Button /> components', () => {
    expect(wrapper.find(Button).length).toBe(2);
  });
  it('contains 2 <Button /> components', () => {
    expect(wrapper.find(Button).exists()).toBe(true);
  });
  it('contains 1 <Form /> component', () => {
    expect(wrapper.find(Form).length).toBe(1);
  });
  it('contains 1 <Input /> component', () => {
    expect(wrapper.find(Input).length).toBe(1);
  });
  it('contains 1 <Row /> component', () => {
    expect(wrapper.find(Row).length).toBe(1);
  });
});