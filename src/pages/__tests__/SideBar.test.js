/**
 * @jest-environment jsdom
 */
import React from 'react'
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import SideBar from '../SideBar';
import { Image } from "react-native";
import { List } from "native-base";

describe('>>>Home --- Shallow Render REACT COMPONENTS',()=>{
  let wrapper
  
  beforeEach(()=>{
      wrapper = shallow(<SideBar />)
      
  })

  it('renders correctly', () => {
    const tree = renderer.create(
      <SideBar />
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('+++ render the DUMB component', () => {
     expect(wrapper.length).toEqual(1)
  });
  it('contains 1 <Image /> component', () => {
    expect(wrapper.find(Image).length).toBe(1);
  });
  it('contains 1 <List /> component', () => {
    expect(wrapper.find(List).length).toBe(1);
  });
});