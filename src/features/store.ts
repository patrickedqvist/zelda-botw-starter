import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { rootReducer } from './rootReducer';

export const initStore = (preloadedState = {}) => {
  const enhancer = composeWithDevTools();
  const store = createStore(rootReducer, preloadedState, enhancer);
  return store;
};
