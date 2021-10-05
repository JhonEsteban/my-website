import { createStore, combineReducers } from 'redux';

import themeReducer from '../reducers/themeReducer';
import projectsReducer from '../reducers/projectsReducer';

const reducers = combineReducers({
  theme: themeReducer,
  projects: projectsReducer,
});

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
