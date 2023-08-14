'use client';

import ReactPlayer from 'react-player/youtube';
export default function VideoPlayer({ url, customStyles }) {
  return (
    <ReactPlayer
      url={url}
      className={' w-full mx-auto rounded-md aspect-video'}
      width={'100%'}
      height={'100%'}
      controls={true}
      autoPlay={true}
    />
  );
}
