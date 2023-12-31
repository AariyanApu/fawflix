/* eslint-disable @next/next/no-img-element */

import Link from 'next/link';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function DashboardMovieCard({
  movie,
  customStyles,
  imageStyles,
  mutate,
  handleEdit,
}) {
  const handleDelete = async (id) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
      });
      mutate();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className={`${customStyles} overflow-hidden hover:shadow-red-700 hover:shadow-md transition-all duration-500 ease-in-out flex flex-row justify-between items-center`}
    >
      <Link href={`/video/${movie._id}`}>
        <LazyLoadImage
          src={movie.imageLink}
          alt={movie.title}
          className={` object-cover cursor-pointer  image_hover ${imageStyles}} `}
        />
      </Link>
      <div className="flex flex-col gap-4">
        <button
          onClick={() => handleDelete(movie._id)}
          className="h-10 w-20 button_style"
        >
          {' '}
          Delete
        </button>

        <button
          onClick={() => handleEdit(movie._id)}
          className="h-10 w-20 button_style"
        >
          {' '}
          Edit
        </button>
      </div>
    </div>
  );
}
