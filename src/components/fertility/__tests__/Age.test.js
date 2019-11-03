/**
 * @jest-environment jsdom
 */
import React from 'react'
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { Age } from '../questions/female/Age';
import { Button, View } from 'native-base';
import * as Progress from 'react-native-progress';
import { Form } from 'react-redux-form/native';

describe('>>>AGE --- Shallow Render REACT COMPONENTS',()=>{
  let wrapper
  
  beforeEach(()=>{
      wrapper = shallow(<Age />)
      
  })

  it('renders correctly', () => {
    const tree = renderer.create(
      <Age />
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('+++ render the DUMB component', () => {
     expect(wrapper.length).toEqual(1)
  });
  it('contains 2 <View /> components', () => {
    expect(wrapper.find(View).length).toBe(2);
  });
  it('contains 1 <Form /> component', () => {
    expect(wrapper.find(Form).length).toBe(1);
  });
  it('contains 1 <Button /> component', () => {
    expect(wrapper.find(Button).length).toBe(1);
  });  
  it('contains 1 <Progress.Bar /> component', () => {
    expect(wrapper.find(Progress.Bar).length).toBe(1);
  }); 
});