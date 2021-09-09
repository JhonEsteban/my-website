import './AboutMe.scss';

import Profile from '../../components/profile/Profile';
import Information from '../../components/information/Information';
import Skills from '../../components/skills/Skills';

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
