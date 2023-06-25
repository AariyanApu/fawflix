'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function MovieCard({ movie, customStyles, imageStyles }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className={`${customStyles}`}
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
    </motion.div>
  );
}
