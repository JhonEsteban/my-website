import api from '../../api';

import {
  startLoaderAction,
  stopLoaderAction,
  setErrorAction,
  removeErrorAction,
} from '../ui/actions';

import { getAllProjectsAction, setSingleProjectAction } from './actions';

const getAllProjects = () => {
  return (dispatch) => {
    dispatch(startLoaderAction());

    api
      .getAllProjects()
      .then((projects) => {
        dispatch(removeErrorAction());
        dispatch(getAllProjectsAction(projects));
        dispatch(stopLoaderAction());
      })
      .catch((err) => {
        dispatch(setErrorAction(err));
      });
  };
};

const getProjectById = (projectId) => {
  return (dispatch) => {
    dispatch(startLoaderAction());

    api
      .getProjectById(projectId)
      .then((project) => {
        dispatch(removeErrorAction());
        dispatch(setSingleProjectAction(project));
        dispatch(stopLoaderAction());
      })
      .catch((err) => {
        dispatch(setErrorAction(err));
      });
  };
};

export { getAllProjects, getProjectById };
