import Image from 'next/image';
import Link from 'next/link';

export default function HelpCard({
  url,
  customStyles,
  imageStyles,
  imageLink,
  altText,
  linkInfo,
}) {
  return (
    <Link
      href={url}
      className={`${customStyles} flex flex-row justify-start items-center sm:mb-4`}
    >
      <Image
        src={imageLink}
        alt={altText}
        width={200}
        height={200}
        className="rounded-md w-24 h-24 inline mr-0 sm:mr-2"
      />
      {linkInfo}
    </Link>
  );
}
