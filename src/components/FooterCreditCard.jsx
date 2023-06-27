import Link from 'next/link';

export default function FooterCreditCard({ name, link, desc }) {
  return (
    <p className="text-xs leading-5 red_gradient ">
      {desc}
      <Link href={link} className="link_style">
        {name}
      </Link>
    </p>
  );
}
