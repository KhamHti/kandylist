import Head from "next/head";
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
          <div key={kandy.id}>
            <a className={styles.single}>
              <h3>{kandy.name}</h3>
              <h5>username: {kandy.username}</h5>
              <h5>email: {kandy.email}</h5>
              <h5>website: {kandy.website}</h5>
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default Kandy;
