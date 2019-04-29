/**
 * @jest-environment jsdom
 */
 import React from 'react'
 import { shallow } from 'enzyme';
 import renderer from 'react-test-renderer';
 import { TabHeader } from '../TabHeader';
 import {
  Button, Left, Body, Right, Header, Icon
} from 'native-base';
 
 describe('>>>TabHeader --- Shallow Render REACT COMPONENTS',()=>{
   let wrapper
   
   beforeEach(()=>{

    const props = {
      fertilityQuestions: jest.fn(),
      nav: jest.fn(),
      dispatch: jest.fn()
    }
       wrapper = shallow(<TabHeader {...props}  />)
       
   })
 
   it('+++ render the DUMB component', () => {
      expect(wrapper.length).toEqual(1)
   });
   it('contains 2 <Button /> components', () => {
     expect(wrapper.find(Button).length).toBe(2);
   });
   it('contains 1 <Left /> component', () => {
     expect(wrapper.find(Left).length).toBe(1);
   });
   it('contains 1 <Body /> component', () => {
    expect(wrapper.find(Body).length).toBe(1);
  });
  it('contains 1 <Icon /> component', () => {
    expect(wrapper.find(Icon).length).toBe(2);
  });
  it('contains 1 <Right /> component', () => {
    expect(wrapper.find(Right).length).toBe(1);
  });
  it('contains 1 <Header /> component', () => {
    expect(wrapper.find(Header).length).toBe(1);
  });
 });