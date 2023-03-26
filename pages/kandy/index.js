import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Kandy.module.css";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    props: { kandies: data },
  };
};

const Kandy = ({ kandies }) => {
  return (
    <>
      <Head>
        <title>Luffy Lists | Kandy </title>
        <meta name="keywords" content="luffy" />
      </Head>
      <div>
        <h1>Kandys</h1>
        {kandies.map((kandy) => (
          <Link href={"/kandy/" + kandy.id} legacyBehavior key={kandy.id}>
            <a className={styles.single}>
              <h3>{kandy.name}</h3>
            </a>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Kandy;
