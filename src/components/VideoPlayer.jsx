'use client';

export default function VideoPlayer({ url, customStyles }) {
  return (
    <iframe
      src={url}
      className={`${customStyles} mx-auto rounded-md`}
      allowFullScreen
      loading="lazy"
      allow=" autoplay "
    ></iframe>
  );
}