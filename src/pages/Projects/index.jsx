import './styles.scss';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getAllProjects } from '../../redux/projects/middlewares';

import ProjectList from '../../components/ProjectList';

const Projects = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProjects());
  }, [dispatch]);

  return (
    <section className='projetcs animated fadeIn'>
      <ProjectList />
    </section>
  );
};

export default Projects;
