import { useSelector } from 'react-redux';

import './Layout.scss';

import Header from '../header/Header';

const Layout = ({ children }) => {
  const { darkMode } = useSelector((state) => state.theme);

  return (
    <div className={`app ${darkMode ? 'dark-mode' : ''}`}>
      <Header />
      <main className='main wrapper'>{children}</main>
    </div>
  );
};

export default Layout;
