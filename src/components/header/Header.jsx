import './Header.scss';

import DownLoadCvButton from '../downLoadCvButton/DownLoadCvButton';
import DarkModeButton from '../darkModeButton/DarkModeButton';
import Navegation from '../navegation/Navegation';

const Header = () => {
  return (
    <header className='header wrapper'>
      <div className='header__content'>
        <h1>JEH</h1>

        <DownLoadCvButton />
      </div>

      <div className='header__options'>
        <DarkModeButton />
        <Navegation />
      </div>
    </header>
  );
};

export default Header;
