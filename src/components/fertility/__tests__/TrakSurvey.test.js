/**
 * @jest-environment jsdom
 */
import React from 'react'
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import TrakSurvey from '../TrakSurvey';
import { WebView } from 'react-native';
import { Text, Body, Spinner } from "native-base";

describe('>>>TrakSurvey --- Shallow Render REACT COMPONENTS',()=>{
  let wrapper
  
  beforeEach(()=>{
      wrapper = shallow(<TrakSurvey />)
      
  })

  it('renders correctly', () => {
    const tree = renderer.create(
      <TrakSurvey />
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('+++ render the DUMB component', () => {
     expect(wrapper.length).toEqual(1)
  }); 
 it('contains 1 <WebView /> component', () => {
  expect(wrapper.find(WebView).length).toBe(1);
}); 
});