import Image from 'next/image';
import SearchBar from './SearchBar';

const NavBar = () => {
  return (
    <nav className="nav">
      <Image
        src="/assets/images/fawflix-logo.png"
        alt="FawFlix Logo"
        width={200}
        height={30}
      />

      <SearchBar />
    </nav>
  );
};

export default NavBar;
