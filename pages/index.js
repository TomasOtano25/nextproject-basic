import Head from "next/head";
import fetch from "isomorphic-fetch";
import Container from "../components/Container";

import Users from "../components/Users";

const Index = ({ users }) => {
  return (
    <div>
      <Head>
        <title>Next.js Project - Home</title>
      </Head>
      <Container>
        <h3>Next</h3>

        <Users users={users} />
      </Container>
    </div>
  );
};

Index.getInitialProps = async (ctx) => {
  const res = await fetch("https://reqres.in/api/users");
  const resJSON = await res.json();
  return { users: resJSON.data };
};

export default Index;
