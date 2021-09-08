import { NavLink } from 'react-router-dom';

import './Navegation.scss';

const Navegation = () => {
  return (
    <nav className='main-menu'>
      <ul className='navegation'>
        <NavLink to='/about-me' activeClassName='active'>
          Sobre mi
        </NavLink>

        <NavLink to='/projects' activeClassName='active'>
          Proyectos
        </NavLink>

        <NavLink to='/contact-me' activeClassName='active'>
          Contacto
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navegation;
