/**
 * @jest-environment jsdom
 */
import React from 'react'
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import ConnectedSurvey, { Survey } from '../Survey';
import initialState from '../../forms/initialfertilityQuestionsState'
import { Container, Header, Content, Text } from 'native-base';

describe('>>>Survey --- Shallow Render REACT COMPONENTS', () => {
  let wrapper

  beforeEach(() => {
    const props = {
      inputs: jest.fn(),
      state: {
        formdata: {
          gender: '',
        },
      },
    }
    wrapper = shallow(<Survey {...props} />)
  })

  it('renders correctly', () => {
    const tree = renderer.create(
      <Survey />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('+++ render the DUMB component', () => {
    expect(wrapper.length).toEqual(1)
  });
  it('contains 1 <Header /> component', () => {
    expect(wrapper.find(Header).length).toBe(1);
  });
  it('The <Container /> exists', () => {
    expect(wrapper.find(Container).exists()).toBe(true);
  });
  it('contains 1 <Content /> component', () => {
    expect(wrapper.find(Content).length).toBe(1);
  });
  it('contains 1 <Text /> component', () => {
    expect(wrapper.find(Text).length).toBe(1);
  });
});

//*******************************************************************************************************
describe('>>>Survey --- REACT-REDUX (Shallow + passing the {store} directly)', () => {
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);
  let store, container

  beforeEach(() => {
    store = mockStore(initialState);
    container = shallow(<ConnectedSurvey store={store} />)
  })
  it('+++ render the connected(SMART) component', () => {
    expect(container.length).toEqual(1)
  });
  it('+++ check Prop matches with initialState', () => {
    expect(container.props().store.getState().age).toEqual(initialState.age)
  });

});