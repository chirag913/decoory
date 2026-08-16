import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/#top" className="group flex items-center" aria-label="Decoory Interiors home">
      <img src="/logo.png" alt="Decoory Interiors" className="h-14 w-auto md:h-16" />
    </Link>
  );
}
