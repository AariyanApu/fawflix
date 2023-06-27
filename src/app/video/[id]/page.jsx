import VideoPlayer from '@/components/VideoPlayer';
import Image from 'next/image';
import Link from 'next/link';

export default function Video() {
  return (
    <div className="w-full">
      <VideoPlayer
        url="https://www.youtube.com/embed/-tJYN-eG1zk"
        customStyles={'w-full sm:h-[720px] h-80'}
      />
      <div className="mt-10 flex  ml-1 sm:flex-row flex-col items-start justify-start sm:px-20 px-4">
        {/* Movie Card Poster */}
        <Image
          src="/assets/images/poster1.jpg"
          alt="poster"
          width={200}
          height={300}
          className="rounded-md"
        />
        <div className="red_gradient sm:ml-10 mt-4 sm:mt-0">
          {/* movie card descriptions */}
          <h1 className="text-2xl font-bold">Title:</h1>
          <p className="text-sm">Description:</p>
          <p className="text-sm">Genre:</p>
          <p className="text-sm">Duration:</p>
          <p className="text-sm">Release Date:</p>
          <p className="text-sm">Rating:</p>
          <p className="text-sm">Director:</p>
          <p className="text-sm">Cast:</p>
          <p className="text-sm">Country:</p>
          <p className="text-sm">Language:</p>
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
