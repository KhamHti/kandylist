export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  // console.log(data);

  const paths = data.map((kandy) => {
    return {
      params: { id: kandy.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await res.json();

  return {
    props: { kandy: data },
  };
};

const Details = ({ kandy }) => {
  return (
    <div>
      <h2>{kandy.name}</h2>
      <p>UserName: {kandy.username}</p>
      <p>Email: {kandy.email}</p>
      <p>Website: {kandy.website}</p>
      <p>City: {kandy.address.city}</p>
      <p>Company: {kandy.company.name}</p>
      <p>Company Type: {kandy.company.bs}</p>
    </div>
  );
};

export default Details;
