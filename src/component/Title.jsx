import Link from 'next/link';

export default function Title({ title, link, linkName }) {
  return (
    <div className="flex flex-row justify-between items-center mb-2">
      <p className="orange_gradient text-xl">{title}</p>
      <div className="flex">
        <div className=" mt-3 h-0 w-40 border-yellow-500/70 border  md:w-[500px] lg:w-[800px] xl:w-[900] md:flex hidden " />
        <Link href={link} className=" orange_gradient text-xl ml-2">
          {linkName}
        </Link>
      </div>
    </div>
  );
}
