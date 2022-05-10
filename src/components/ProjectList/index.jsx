import './styles.scss';

import { useSelector } from 'react-redux';

import Loader from '../Loader';
import ProjectCard from '../ProjectCard';

const ProjectList = () => {
  const { ui, projects } = useSelector((state) => state);

  const { isLoading } = ui;
  const { projectList } = projects;

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <section className='project-list'>
          {projectList.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </section>
      )}
    </>
  );
};

export default ProjectList;
