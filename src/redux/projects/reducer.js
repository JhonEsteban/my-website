import types from './types';

const initialState = {
  projects: [],
  project: null,
};

const projectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.getAllProjects:
      return {
        ...state,
        projects: [...action.payload],
      };

    case types.setSingleProject:
      return {
        ...state,
        project: action.payload,
      };

    case types.removeSingleProject:
      return {
        ...state,
        project: null,
      };

    default:
      return state;
  }
};

export default projectsReducer;
