import Image from 'next/image';
import Link from 'next/link';

export default function MovieCard({ movie }) {
  return (
    <div className="movie_card ">
      <Link href={movie.movieLink}>
        <Image
          src={movie.imageLink}
          alt="poster"
          width={400}
          height={400}
          className="h-96 w-[290px] object-cover cursor-pointer rounded-lg"
        />
      </Link>
    </div>
  );
}
