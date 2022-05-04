import types from './types';

const getAllProjectsAction = (projects) => ({
  type: types.getAllProjects,
  payload: projects,
});

const getProjectsByTechnologyAction = (technology) => ({
  type: types.filterByTechnology,
  payload: technology,
});

const setSingleProjectAction = (project) => ({
  type: types.setSingleProject,
  payload: project,
});

const removeSingleProjectAction = () => ({
  type: types.removeSingleProject,
});

export {
  getAllProjectsAction,
  getProjectsByTechnologyAction,
  setSingleProjectAction,
  removeSingleProjectAction,
};
