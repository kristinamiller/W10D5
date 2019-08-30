import { createStore } from 'redux';
import rootReducer from '../reducers/root_reducer';
// import configureStore from './store/store';

const configureStore = (preloadedState = {}) => {
  return createStore(rootReducer, preloadedState);
};

export default configureStore;

