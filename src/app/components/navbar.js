import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <div>
        <Link href="/">SOMOS</Link>
      </div>
      <ul>
        <li>
          <Link href="../about/">About</Link>
        </li>
        <li>
          <Link href="../services/">Services</Link>
        </li>
        <li>
          <Link href="../contact/">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
