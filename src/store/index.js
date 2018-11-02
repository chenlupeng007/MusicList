import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import combinedReducers from '../reducers';

const Store = createStore(combinedReducers, applyMiddleware(thunkMiddleware));

if (module.hot) {
  module.hot.accept('../reducers', () => Store.replaceReducer(combinedReducers));
}

export default Store;
