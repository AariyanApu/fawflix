export default function MovieCardLoading() {
  const tenMovies = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="flex sm:flex-row flex-col flex-wrap sm:justify-between items-center justify-center sm:px-4">
      {tenMovies.map((movie) => (
        <div
          key={movie}
          className={
            'overflow-hidden w-[230px] h-[350px]  my-2 break-inside-avoid rounded-lg border p-2 border-red-600 bg-gray-900/75 bg-clip-padding  backdrop-blur-xl backdrop-filter transition-all duration-500 animate-pulse '
          }
        >
          <div className="h-[330px] w-[210px] bg-gray-800 rounded-lg " />
        </div>
      ))}
    </div>
  );
}
