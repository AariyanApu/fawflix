/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function MovieCard({ movie, customStyles, imageStyles }) {
  return (
    <div
      className={`${customStyles} group relative overflow-hidden transition-all duration-500 ease-in-out hover:shadow-md hover:shadow-red-700`}
    >
      <Link href={`/video/${movie._id}`}>
        <LazyLoadImage
          src={movie.imageLink}
          alt={movie.title}
          className={`  image_hover cursor-pointer  object-cover ${imageStyles}} `}
        />
        <div className="absolute left-0 top-0 h-full w-full  rounded-md   bg-gradient-to-t from-black to-transparent opacity-30  group-hover:opacity-50" />
        <h1 className="absolute bottom-4 left-1/2 w-full -translate-x-1/2 px-4 text-center font-semibold  text-white opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 ">
          {movie.title}
        </h1>
      </Link>
    </div>
  );
}
