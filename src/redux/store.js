import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import transactionReducer from 'redux/transactions/transactionReducer';

const rootReducer = combineReducers({
  transaction: transactionReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);
export default store;
