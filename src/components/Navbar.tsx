import { UserContext } from "@/lib/context";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
// import NextImage from "next/image";

// const Image = (props) => {
//   if (props.src) {
//     return <NextImage {...props} />;
//   }

//   //TODO: if the image source is not there, you can set a default source
//   //const defaultSrc = "something"

//   return <img {...props} src={""} />;
// };

function Navbar() {
  const { username, user } = useContext(UserContext);

  console.log("user:", user, "username:", username);

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
                <Image
                  src={user?.photoURL}
                  width="50"
                  height="50"
                  alt="profile avatar"
                />
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
