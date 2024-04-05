import Image from "next/image";
import Link from "next/link";

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
      className={`${customStyles} link_style flex flex-row items-center justify-start sm:mb-4`}
    >
      <Image
        src={imageLink}
        alt={altText}
        width={200}
        height={200}
        className="mr-0 inline h-24 w-24 rounded-md sm:mr-2"
      />
      {linkInfo}
    </Link>
  );
}
