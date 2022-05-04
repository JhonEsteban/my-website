import types from './types';

const startLoaderAction = () => ({
  type: types.startLoader,
});

const stopLoaderAction = () => ({
  type: types.stopLoader,
});

const setErrorAction = (error) => ({
  type: types.setError,
  payload: error,
});

const removeErrorAction = () => ({
  type: types.removeError,
});

export {
  startLoaderAction,
  stopLoaderAction,
  setErrorAction,
  removeErrorAction,
};
