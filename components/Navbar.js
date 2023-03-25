import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <h1>Kandy Navbar</h1>
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
