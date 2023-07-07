/* eslint-disable @next/next/no-img-element */

import Link from 'next/link';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function MovieCard({ movie, customStyles, imageStyles }) {
  return (
    <div
      className={`${customStyles} overflow-hidden hover:shadow-red-700 hover:shadow-md transition-all duration-500 ease-in-out`}
    >
      <Link href={`/video/${movie._id}`}>
        <LazyLoadImage
          src={movie.imageLink}
          alt={movie.title}
          className={` object-cover cursor-pointer  image_hover ${imageStyles}} `}
        />
      </Link>
    </div>
  );
}
