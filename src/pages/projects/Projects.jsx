import { useSelector } from 'react-redux';

import './Projects.scss';

import SelectTechnology from '../../components/selectTechnology/SelectTechnology';
import ProjectCard from '../../components/projectCard/ProjectCard';

const Projects = () => {
  const { projectList } = useSelector((state) => state.projects);

  return (
    <section className='projetcs animated fadeIn'>
      <SelectTechnology />

      <div className='projetcs__content animated fadeIn'>
        {projectList.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
