import { createStore, combineReducers } from 'redux';

import themeReducer from '../reducers/themeReducer';

const reducers = combineReducers({
  theme: themeReducer,
});

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
