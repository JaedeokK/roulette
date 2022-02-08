import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Roulette</title>
        <meta key="keyword" name="keyword" content="roulette" />
        <meta key="description" name="description" content="This is Roulette" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
};

export default Home;
