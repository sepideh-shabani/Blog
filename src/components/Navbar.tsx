import Image from "next/image";
import Link from "next/link";

function Navbar() {
  const { username = null, user = null } = {};
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link href="/">
            <button className="">FEED</button>
          </Link>
        </li>
        {username && (
          <>
            <li>
              <Link href="/admin">
                <button className="btn-blue">Write a Post</button>
              </Link>
            </li>
            <li>
              <Link href={`/${username}`}>
                <Image src={user?.photoURL} alt="username" />
              </Link>
            </li>
          </>
        )}
        {!username && (
          <li>
            <Link href="/enter">
              <button className="btn-blue">Log In</button>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
