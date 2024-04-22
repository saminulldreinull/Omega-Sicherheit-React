import Logo from './Logo';
import Navbar from './NavBar';

const Header = () => {
  return (
    <div className='flex items-center content-center z-100 fixed '>
      <Logo/>
      <Navbar/>
    </div>
  );
};

export default Header;
