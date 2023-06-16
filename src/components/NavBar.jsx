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
          width={400}
          height={100}
          className="cursor-pointer sm:w-56 sm:h-16 w-44 my-5"
        />
      </Link>
      <SearchBar />
    </nav>
  );
};

export default NavBar;
