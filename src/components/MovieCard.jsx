/* eslint-disable @next/next/no-img-element */

import Link from 'next/link';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function MovieCard({ movie, customStyles, imageStyles }) {
  return (
    <div
      className={`${customStyles} group overflow-hidden hover:shadow-red-700 hover:shadow-md transition-all duration-500 ease-in-out relative`}
    >
      <Link href={`/video/${movie._id}`}>
        <LazyLoadImage
          src={movie.imageLink}
          alt={movie.title}
          className={`  object-cover cursor-pointer  image_hover ${imageStyles}} `}
        />
        <div className='opacity-30 top-0 left-0 w-full h-full  absolute   rounded-md bg-gradient-to-t from-black to-transparent  group-hover:opacity-50' />
        <h1 className='absolute bottom-4 left-1/2 -translate-x-1/2 w-full text-center font-semibold text-white  group-hover:opacity-100 opacity-0 transition-opacity duration-500 ease-in-out px-4 '>
          {movie.title}
        </h1>
      </Link>
    </div>
  );
}
