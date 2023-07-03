/* eslint-disable @next/next/no-img-element */
// 'use client';
import VideoPlayer from '@/components/VideoPlayer';
import Link from 'next/link';
import { notFound } from 'next/navigation';

async function getData(id) {
  const res = await fetch(`https://fawflix.vercel.app/api/posts/${id}`, {
    cache: 'no-store',
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
      <VideoPlayer
        url={data.movieLink}
        customStyles={'w-full sm:h-[720px] h-80'}
      />
      <div className="mt-10 flex  ml-1 sm:flex-row flex-col items-start justify-start sm:px-20 px-4">
        {/* Movie Card Poster */}
        <img
          src={data.imageLink}
          alt="poster"
          width={200}
          height={300}
          className="rounded-md"
        />
        <div className="red_gradient sm:ml-10 mt-4 sm:mt-0">
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
      <div className="mt-10 sm:px-20 px-4">
        <Link
          href="/help"
          className="text-2xl font-semibold red_gradient link_style "
        >
          বিরক্তকর Ads ছাড়া নির্বিঘ্নে মুভি দেখতে এই লিংকে ক্লিক করুন।
        </Link>
      </div>
    </div>
  );
}
