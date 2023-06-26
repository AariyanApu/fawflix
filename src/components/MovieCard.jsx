'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function MovieCard({ movie, customStyles, imageStyles }) {
  return (
    <div
      className={`${customStyles} overflow-hidden hover:shadow-red-700 hover:shadow-md transition-all duration-500 ease-in-out`}
    >
      <Link href={movie.movieLink}>
        <Image
          src={movie.imageLink}
          alt="poster"
          width={400}
          height={400}
          className={` object-cover cursor-pointer rounded-lg ${imageStyles}}`}
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8Vl1dAAAGuQJeC6VyHgAAAABJRU5ErkJggg=="
        />
      </Link>
    </div>
  );
}
