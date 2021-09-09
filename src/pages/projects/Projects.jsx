import './Projects.scss';

import projectList from '../../data/projectList';

import ProjectCard from '../../components/projectCard/ProjectCard';

const Projects = () => {
  return (
    <section className='projetcs animated fadeIn'>
      <div className='projetcs__content'>
        {projectList.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
