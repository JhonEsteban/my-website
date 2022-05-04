import './Project.scss';

import { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getProjectById } from '../../redux/projects/middlewares';

import Loader from '../../components/Loader/Loader';

const Project = () => {
  const { projectId = '' } = useParams();

  const dispatch = useDispatch();
  const history = useHistory();

  const { ui, projects } = useSelector((state) => state);

  const { isLoading } = ui;
  const { project } = projects;

  useEffect(() => {
    dispatch(getProjectById(projectId));
  }, [projectId, dispatch]);

  const handleGoBack = () => {
    history.goBack();
  };

  return (
    <>
      <button className='btn-back' onClick={handleGoBack} type='button'>
        Regresar
      </button>
      <br />

      {isLoading ? (
        <Loader />
      ) : (
        <section className='single-project'>
          <a href={project.live} target='_blank' rel='noreferrer'>
            <img src={project.image} alt='' className='single-project__image' />
          </a>

          <article className='details'>
            <h1 className='details__name'>{project.name}</h1>
            <p className='details__description'>{project.description}</p>

            <div className='stack'>
              {project.stack?.map((tecnology) => (
                <span key={tecnology}>{tecnology} </span>
              ))}
            </div>

            <div className='options'>
              <a
                href={project.live}
                className='btn btn--one'
                target='_blank'
                rel='noreferrer'
              >
                Ver Proyecto
              </a>

              <a
                href={project.code}
                className='btn btn--two'
                target='_blank'
                rel='noreferrer'
              >
                Ver Codigo
              </a>
            </div>
          </article>
        </section>
      )}
    </>
  );
};

export default Project;
