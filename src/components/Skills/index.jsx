import './styles.scss';

import mongoIcon from '../../assets/images/mongo.png';
import expressIcon from '../../assets/images/express.png';
import simpleReactIcon from '../../assets/images/react.png';
import nodeIcon from '../../assets/images/node.png';

const Skills = () => {
  return (
    <div className='skills'>
      <img
        src={mongoIcon}
        className='skill'
        width='50px'
        alt='Javascript Icon'
        title='Javascript Icon'
      />

      <img
        src={expressIcon}
        className='skill'
        width='50px'
        alt='React Icon'
        title='React Icon'
      />

      <img
        src={simpleReactIcon}
        className='skill'
        width='80px'
        alt='React Router Icon'
        title='React Router Icon'
      />

      <img
        src={nodeIcon}
        className='skill'
        width='50px'
        alt='Sass Icon'
        title='Sass Icon'
      />
    </div>
  );
};

export default Skills;
