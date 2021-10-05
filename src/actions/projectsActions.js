import types from '../types';

const getProjectsByTechnology = (technology) => ({
  type: types.filterByTechnology,
  payload: technology,
});

export default getProjectsByTechnology;
