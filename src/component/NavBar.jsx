import Image from 'next/image';
import Link from 'next/link';
import SearchBar from './SearchBar';

const NavBar = () => {
  return (
    <nav className="nav">
      <Link href="/">
        <Image
          src="/assets/images/fawflix-logo.png"
          alt="FawFlix Logo"
          width={200}
          height={30}
          className="cursor-pointer"
        />
      </Link>
      <SearchBar />
    </nav>
  );
};

export default NavBar;
