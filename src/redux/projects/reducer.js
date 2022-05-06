import types from './types';

const initialState = {
  projectList: [],
  singleProject: {},
};

const projectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.getAllProjects:
      return {
        ...state,
        projectList: [...action.payload],
      };

    case types.setSingleProject:
      return {
        ...state,
        singleProject: action.payload,
      };

    case types.removeSingleProject:
      return {
        ...state,
        singleProject: {},
      };

    default:
      return state;
  }
};

export default projectsReducer;
