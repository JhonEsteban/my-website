import projectList from './projectList';

const api = {
  getAllProjects: () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(projectList), 500);
    });
  },

  getProjectById: (id) => {
    const projectId = Number(id);

    return new Promise((resolve) => {
      const [project] = projectList.filter(
        (project) => project.id === projectId
      );

      setTimeout(() => resolve(project), 500);
    });
  },
};

export default api;
