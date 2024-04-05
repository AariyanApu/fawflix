/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { LazyLoadImage } from "react-lazy-load-image-component";

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
        method: "DELETE",
      });
      mutate();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className={`${customStyles} flex flex-row items-center justify-between overflow-hidden transition-all duration-500 ease-in-out hover:shadow-md hover:shadow-red-700`}
    >
      <Link href={`/video/${movie._id}`}>
        <LazyLoadImage
          src={movie.imageLink}
          alt={movie.title}
          className={` image_hover cursor-pointer  object-cover ${imageStyles}} `}
        />
      </Link>
      <div className="flex flex-col gap-4">
        <button
          onClick={() => handleDelete(movie._id)}
          className="button_style h-10 w-20"
        >
          {" "}
          Delete
        </button>

        <button
          onClick={() => handleEdit(movie._id)}
          className="button_style h-10 w-20"
        >
          {" "}
          Edit
        </button>
      </div>
    </div>
  );
}
