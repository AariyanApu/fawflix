import Image from "next/image";
import Link from "next/link";
import SearchBar from "./SearchBar";

const NavBar = () => {
  return (
    <nav className="flex w-full justify-between">
      <Link href="/">
        <Image
          src="/assets/images/fawflix-logo.png"
          alt="FawFlix Logo"
          width={400}
          height={100}
          className="my-5 w-44 cursor-pointer sm:h-16 sm:w-56"
        />
      </Link>
      <SearchBar />
    </nav>
  );
};

export default NavBar;
