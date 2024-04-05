import Link from "next/link";

export default function FooterCreditCard({ name, link, desc }) {
  return (
    <p className="red_gradient text-xs leading-5 ">
      {desc}
      <Link href={link} className="link_style">
        {name}
      </Link>
    </p>
  );
}
