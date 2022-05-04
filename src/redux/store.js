import { applyMiddleware, combineReducers, compose, createStore } from 'redux';

import thunk from 'redux-thunk';

import themeReducer from './theme/reducer';
import projectsReducer from './projects/reducer';
import uiReducer from './ui/reducer';

const reducers = combineReducers({
  theme: themeReducer,
  projects: projectsReducer,
  ui: uiReducer,
});

const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;
