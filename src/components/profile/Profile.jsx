import './Profile.scss';

import image from '../../assets/images/profile.png';

const Profile = () => {
  return (
    <figure className='profile'>
      <img
        src={image}
        height='300px'
        className='profile__image'
        alt='Jhon Esteban Herrera'
        title='Jhon Esteban Herrera'
      />
    </figure>
  );
};

export default Profile;
