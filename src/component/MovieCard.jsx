import Image from 'next/image';
import Link from 'next/link';

export default function MovieCard({ movie }) {
  return (
    <div className="movie_card my-2">
      <Link href={movie.movieLink}>
        <Image
          src={movie.imageLink}
          alt="poster"
          width={400}
          height={400}
          className="h-96 w-[290px] object-cover cursor-pointer rounded-lg"
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8Vl1dAAAGuQJeC6VyHgAAAABJRU5ErkJggg=="
        />
      </Link>
    </div>
  );
}
