import thunk from 'redux-thunk';
import { getStore, setStore, getState } from './storeHelper';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware, combineReducers } from 'redux';

import { createForms } from 'react-redux-form/native';
import { user, profile } from '../authorizers/reducers';
import initialfertilityQuestionsState from '../forms/initialfertilityQuestionsState';
import initialMaleQuesions from '../forms/initialMaleQuestions';
import { reducer as navigatorsReducer } from '../navigators/reducer';
import { middleware as navMiddleware } from '../navigators';

const middlewares = [thunk, navMiddleware];
const enhancer = composeWithDevTools(
  {
    // Options: https://github.com/jhen0409/react-native-debugger#options
  },
)(applyMiddleware(...middlewares));

let store = getStore();

if (!store) {
  const reducers = combineReducers({
    nav: navigatorsReducer,
    user,
    profile,
    ...createForms({
      fertilityQuestions: initialfertilityQuestionsState,
      maleQuestions: initialMaleQuesions
    }),
  });

  store = createStore(
    reducers,
    enhancer
  );
  setStore(store);
  
}

export default store;

