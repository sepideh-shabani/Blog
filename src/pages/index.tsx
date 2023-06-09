import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Loader from "@/components/Loader";
import toast from "react-hot-toast";

export default function Home() {
  return (
    <div>
      {/* <Link
        prefetch={false}
        href={{
          pathname: "/[username]",
          query: { username: "sepideh" },
        }}
      >
        Sepideh&apos;s profile
      </Link>
      <Loader show={true} /> */}
      <button onClick={() => toast.success("Hello")}>
        Click me
      </button>
    </div>
  );
}
