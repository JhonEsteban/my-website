import './ProjectCard.scss';

import TechnologyCard from '../technologyCard/TechnologyCard';
import ProjectCardOptions from '../projectCardOptions/ProjectCardOptions';

const ProjectCard = ({ name, image, code, live, stack }) => {
  return (
    <article className='project'>
      <img className='project__image' src={image} alt={name} />

      <div className='project__content'>
        <h3 className='main-title'>{name}</h3>

        <div className='stack'>
          {stack.map((technology) => (
            <TechnologyCard key={technology} technology={technology} />
          ))}
        </div>

        <ProjectCardOptions code={code} live={live} />
      </div>
    </article>
  );
};

export default ProjectCard;
