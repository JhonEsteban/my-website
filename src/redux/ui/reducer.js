import types from './types';

const initialState = {
  isLoading: false,
  error: null,
};

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.startLoader:
      return {
        ...state,
        isLoading: true,
      };

    case types.stopLoader:
      return {
        ...state,
        isLoading: false,
      };

    case types.setError:
      return {
        ...state,
        error: action.payload,
      };

    case types.removeError:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

export default uiReducer;
