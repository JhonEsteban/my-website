import Header from '../header/Header';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className='main wrapper'>{children}</main>
    </>
  );
};

export default Layout;
