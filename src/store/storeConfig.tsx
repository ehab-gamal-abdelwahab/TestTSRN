import {createStore,combineReducers, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import {uiReducer} from './reducers/uiReducer';
import {postsReducer} from './reducers/postsReducer';

const rootReducer = combineReducers({
  uiReducer: uiReducer,
  postsReducer: postsReducer,
});

let composeEnhancer = compose;


export const configStore = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk)),
);