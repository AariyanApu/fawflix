import Link from 'next/link';

export default function FooterCreditCard({ name, link, desc }) {
  return (
    <p className="text-xs leading-5 red_gradient ">
      {desc}
      <Link href={link} className="hover:text-red-600 hover:underline ">
        {name}
      </Link>
    </p>
  );
}
