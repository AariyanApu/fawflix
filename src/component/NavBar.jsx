import Image from 'next/image';
import Link from 'next/link';
import SearchBar from './SearchBar';

const NavBar = () => {
  return (
    <nav className="flex justify-between w-full">
      <Link href="/">
        <Image
          src="/assets/images/fawflix-logo.png"
          alt="FawFlix Logo"
          width={200}
          height={30}
          className="cursor-pointer sm:w-56 sm:h-20 w-44"
        />
      </Link>
      <SearchBar />
    </nav>
  );
};

export default NavBar;
