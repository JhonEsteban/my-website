import './Project.scss';

import { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getProjectById } from '../../redux/projects/middlewares';

import Loader from '../../components/Loader/Loader';
import SingleProjectCard from '../../components/singleProjectCard/SingleProjectCard';

const Project = () => {
  const { projectId = '' } = useParams();

  const dispatch = useDispatch();
  const history = useHistory();

  const { ui, projects } = useSelector((state) => state);

  const { isLoading } = ui;
  const { singleProject } = projects;

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
        <SingleProjectCard key={singleProject.id} {...singleProject} />
      )}
    </>
  );
};

export default Project;
