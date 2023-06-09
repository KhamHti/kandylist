import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 4000);
  }, []);

  return (
    <>
      <Head>
        <title>Luffy Lists | 404 Page </title>
        <meta name="keywords" content="luffy" />
      </Head>
      <div className="not-found">
        <h1>Oooops....</h1>
        <h2>This page cannot be found </h2>
        <p>
          Go back to the{" "}
          <Link href="/" legacyBehavior>
            <a>Homepage</a>
          </Link>
        </p>
      </div>
    </>
  );
};

export default NotFound;
