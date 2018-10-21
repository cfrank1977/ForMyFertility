import { createStore, applyMiddleware } from 'redux';
import { combineForms } from 'react-redux-form/native';
import thunk from 'redux-thunk'; 
import logger from 'redux-logger';

export default function configureStore(initialState) {
    return createStore(combineForms({
    initialState,
  }), applyMiddleware(thunk, logger)
  );
}