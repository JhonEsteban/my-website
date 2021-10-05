import projectList from '../data/projectList';

import types from '../types';

const initialState = {
  projectList: [...projectList],
  projectsToFilter: [...projectList],
};

const projectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.filterByTechnology:
      const areAllTechnologies = action.payload === 'all projects';

      const projectsByTechnology = state.projectsToFilter.filter((technology) =>
        areAllTechnologies
          ? technology
          : technology.stack.includes(action.payload)
      );

      return {
        ...state,
        projectList: projectsByTechnology,
      };

    default:
      return state;
  }
};

export default projectsReducer;
