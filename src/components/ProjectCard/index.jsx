import './styles.scss';

import { useHistory } from 'react-router-dom';

const ProjectCard = ({ id, name, image }) => {
  const history = useHistory();

  const handleGoToProject = () => {
    history.push(`./projects/${id}`);
  };

  return (
    <article className='project'>
      <img
        className='project__image'
        src={image}
        alt={`Imagen del proyecto ${name}`}
        title={name}
      />

      <div className='project__content'>
        <h3 className='main-title'>{name}</h3>

        <button
          onClick={handleGoToProject}
          className='project__btn'
          type='button'
        >
          Ver más
        </button>
      </div>
    </article>
  );
};

export default ProjectCard;
