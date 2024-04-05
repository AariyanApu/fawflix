export default function MovieCardLoading() {
  const tenMovies = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="flex flex-col flex-wrap items-center justify-center sm:flex-row sm:justify-between sm:px-4">
      {tenMovies.map((movie) => (
        <div
          key={movie}
          className={
            "my-2 h-[350px] w-[230px]  animate-pulse break-inside-avoid overflow-hidden rounded-lg border border-red-600 bg-gray-900/75 bg-clip-padding  p-2 backdrop-blur-xl backdrop-filter transition-all duration-500 "
          }
        >
          <div className="h-[330px] w-[210px] rounded-lg bg-gray-800 " />
        </div>
      ))}
    </div>
  );
}
