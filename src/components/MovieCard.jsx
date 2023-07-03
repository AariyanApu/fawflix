/* eslint-disable @next/next/no-img-element */
'use client';

import Link from 'next/link';

export default function MovieCard({ movie, customStyles, imageStyles }) {
  return (
    <div
      className={`${customStyles} overflow-hidden hover:shadow-red-700 hover:shadow-md transition-all duration-500 ease-in-out`}
    >
      <Link href={`/video/${movie._id}`}>
        <img
          src={movie.imageLink}
          alt="poster"
          width={400}
          height={400}
          className={` object-cover cursor-pointer  image_hover ${imageStyles}} `}
        />
      </Link>
    </div>
  );
}
