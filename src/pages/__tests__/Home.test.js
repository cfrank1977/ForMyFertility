/**
 * @jest-environment jsdom
 */
import React from 'react'
import { shallow, mount, render } from 'enzyme';
import renderer from 'react-test-renderer';
import Home from '../Home';
import { Container, Content, Text, Header, Button, Footer } from "native-base";

describe('>>>Home --- Shallow Render REACT COMPONENTS',()=>{
  let wrapper
  
  beforeEach(()=>{
      wrapper = shallow(<Home />)
      
  })

  it('renders correctly', () => {
    const tree = renderer.create(
      <Home />
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('+++ render the DUMB component', () => {
     expect(wrapper.length).toEqual(1)
  });
  it('contains 2 <Button /> components', () => {
    expect(wrapper.find(Button).length).toBe(2);
  });
  it('contains 1 <Footer /> component', () => {
    expect(wrapper.find(Footer).length).toBe(1);
  });
  it('contains 2 <Header /> component', () => {
    expect(wrapper.find(Header).length).toBe(2);
  });
});