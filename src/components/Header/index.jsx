import './styles.scss';

import DownLoadCvButton from './DownLoadCvButton';
import DarkModeButton from './DarkModeButton';
import Navegation from './Navegation';

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
