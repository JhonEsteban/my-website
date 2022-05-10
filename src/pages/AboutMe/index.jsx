import './styles.scss';

import Profile from '../../components/Profile';
import Information from '../../components/Information';
import Skills from '../../components/Skills';

const AboutMe = () => {
  return (
    <section className='about-me animated fadeIn'>
      <Profile />

      <div className='about-me__content'>
        <Information />
        <Skills />
      </div>
    </section>
  );
};

export default AboutMe;
