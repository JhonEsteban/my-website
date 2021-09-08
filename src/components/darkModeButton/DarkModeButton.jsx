import './DarkModeButton.scss';

import useAppTheme from '../../hooks/useAppTheme';
import { useSelector } from 'react-redux';

const DarkModeButton = () => {
  const { darkMode } = useSelector((state) => state.theme);
  const { handleToggleTheme } = useAppTheme();

  return (
    <button
      onClick={handleToggleTheme}
      className={`theme-button ${darkMode ? 'dark-active' : ''}`}
      type='button'
    >
      <span>
        <i className='fas fa-sun'></i>
      </span>
      <span>
        <i className='fas fa-moon'></i>
      </span>
    </button>
  );
};

export default DarkModeButton;
