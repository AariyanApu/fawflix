"use client";
import useUser from "@/utils/GetDataApi";
import MovieCard from "./MovieCard";
import MovieCardLoading from "./MovieCardLoading";
import Title from "./Title";

export default function HotList() {
  const { data, isLoading, isError } = useUser();

  if (!data) return <MovieCardLoading />;

  return (
    <div className="mt-8 sm:mt-16 ">
      <Title title="Hot Cake" link="/viewmore/" linkName="View More" />
      <div className=" flex flex-col flex-wrap items-center justify-center sm:flex-row sm:justify-between sm:px-4 ">
        {data
          ?.slice(-10)
          .reverse()
          .map((movie) => (
            <MovieCard
              key={movie.imageLink}
              movie={movie}
              customStyles="movie_card w-[230px] h-[350px]  my-2"
              imageStyles=" h-[330px] w-[210px] "
            />
          ))}
      </div>
    </div>
  );
}
