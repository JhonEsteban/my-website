import './Skills.scss';

import javascriptIcon from '../../assets/images/javascript.png';
import simpleReactIcon from '../../assets/images/react.png';
import reactRoutertIcon from '../../assets/images/react-router.png';
import sassIcon from '../../assets/images/sass.png';

const Skills = () => {
  return (
    <div className='skills'>
      <img
        src={javascriptIcon}
        className='skill'
        width='50px'
        alt='Javascript Icon'
        title='Javascript Icon'
      />

      <img
        src={simpleReactIcon}
        className='react-skill'
        width='60px'
        alt='React Icon'
        title='React Icon'
      />

      <img
        src={reactRoutertIcon}
        className='skill'
        width='80px'
        alt='React Router Icon'
        title='React Router Icon'
      />

      <img
        src={sassIcon}
        className='skill'
        width='60px'
        alt='Sass Icon'
        title='Sass Icon'
      />
    </div>
  );
};

export default Skills;
