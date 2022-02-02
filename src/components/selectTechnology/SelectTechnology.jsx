import { useDispatch } from 'react-redux';

import './SelectTechnology.scss';

import getProjectsByTechnology from '../../actions/projectsActions';

const SelectTechnology = () => {
  const dispatch = useDispatch();

  const handleSelect = (e) => {
    const technology = e.nativeEvent.target.textContent.toLowerCase();
    dispatch(getProjectsByTechnology(technology));
  };

  return (
    <div className='dropdown'>
      <div className='dropdown__container'>
        <div className='dropdown__select'>
          <span className='first-select'>Filter By Technologies</span>
          <span className='fa fa-caret-down icon'></span>
        </div>

        <div className='dropdown-list' onClick={handleSelect}>
          <div className='dropdown-list__item'>All Projects</div>
          <div className='dropdown-list__item'>JavaScript</div>
          <div className='dropdown-list__item'>TypeScript</div>
          <div className='dropdown-list__item'>React</div>
          <div className='dropdown-list__item'>Angular</div>
        </div>
      </div>
    </div>
  );
};

export default SelectTechnology;
