/* eslint-disable @next/next/no-img-element */
// 'use client';
import VideoPlayer from "@/components/VideoPlayer";
import Link from "next/link";
import { notFound } from "next/navigation";

async function getData(id) {
  const res = await fetch(`https://fawflix.vercel.app/api/posts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}

// Dynamic route metadata
export async function generateMetadata({ params }) {
  const data = await getData(params.id);
  return {
    title: data.title,
    description: data.description,
  };
}
export default async function Video({ params }) {
  const data = await getData(params.id);

  return (
    <div className="w-full">
      <VideoPlayer url={data.movieLink} />
      <div className="ml-1 mt-10  flex flex-col items-start justify-start px-4 sm:flex-row sm:px-20">
        {/* Movie Card Poster */}
        <img
          src={data.imageLink}
          alt={data.title}
          className="h-[330px] w-[210px] rounded-md object-cover "
        />
        <div className="red_gradient mt-4 sm:ml-10 sm:mt-0">
          {/* movie card descriptions */}
          <h1 className="text-2xl font-bold">Title: {data.title}</h1>
          <p className="text-sm">Description: {data.desc}</p>
          <p className="text-sm">
            Genre: {data.genre.map((tag) => `#${tag} `)}
          </p>

          <p className="text-sm">Release Date: {data.releaseDate} </p>

          <p className="text-sm">Director: {data.director}</p>
          <p className="text-sm">Cast: {data.cast}</p>

          <p className="text-sm">Language: {data.language}</p>
        </div>
      </div>
      {/* disclaimer */}
      <div className="mt-10 px-4 sm:px-20">
        <Link
          href="/help"
          className="red_gradient link_style text-2xl font-semibold "
        >
          বিরক্তকর Ads ছাড়া নির্বিঘ্নে মুভি দেখতে এই লিংকে ক্লিক করুন।
        </Link>
      </div>
    </div>
  );
}
