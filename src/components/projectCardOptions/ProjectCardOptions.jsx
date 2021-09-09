import './ProjectCardOptions.scss';

const ProjectCardOptions = ({ code, live }) => {
  return (
    <div className='options'>
      <a
        className='project-button'
        href={code}
        target='_blank'
        rel='noreferrer'
      >
        Ver Codigo
      </a>

      <a
        className='project-button'
        href={live}
        target='_blank'
        rel='noreferrer'
      >
        Ver Projecto
      </a>
    </div>
  );
};

export default ProjectCardOptions;
