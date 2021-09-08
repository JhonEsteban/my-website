import './DarkModeButton.scss';

const DarkModeButton = () => {
  return (
    <button className='theme-button' type='button'>
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
