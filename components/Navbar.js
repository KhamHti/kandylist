import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/Luffy.jpeg" alt="Luffy" width={123} height={123} />
      </div>
      <Link href="/" legacyBehavior>
        <a>Home</a>
      </Link>
      <br></br>
      <Link href="/about" legacyBehavior>
        <a>About</a>
      </Link>
      <br></br>
      <Link href="/kandy" legacyBehavior>
        <a>Kandy</a>
      </Link>
      <br></br>
      <Link href="/kandy/test" legacyBehavior>
        <a>kandy test</a>
      </Link>
    </nav>
  );
};

export default Navbar;
