import { HiOutlineTrash } from "react-icons/hi2";

export default function MovieRequestCard({ movie, mutate1 }) {
  const handleDelete = async (id) => {
    try {
      await fetch(`/api/help/${id}`, {
        method: "DELETE",
      });
      mutate1();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-row items-center justify-center py-2">
      <h1>
        {movie.title} ( {movie.createdAt.slice(0, 10)})
      </h1>
      <button
        type="button"
        className="ml-5"
        onClick={() => handleDelete(movie._id)}
      >
        <HiOutlineTrash className="icon_style h-6 w-6 " />
      </button>
    </div>
  );
}
