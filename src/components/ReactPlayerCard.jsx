'use client';

export default function ReactPlayerCard({ url }) {
  return (
    <iframe
      src={url}
      className="w-full sm:h-[720px] h-80"
      allowFullScreen
      loading="lazy"
      allow=" autoplay "
    ></iframe>
  );
}
