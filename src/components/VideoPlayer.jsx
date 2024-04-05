"use client";

import ReactPlayer from "react-player/youtube";
export default function VideoPlayer({ url, customStyles }) {
  return (
    <ReactPlayer
      url={url}
      className={" mx-auto aspect-video w-full rounded-md"}
      width={"100%"}
      height={"100%"}
      controls={true}
      autoPlay={true}
    />
  );
}
