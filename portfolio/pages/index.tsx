import type { NextPage } from "next";
import Head from 'next/head'
import Header from '../components/Header';

const Home: NextPage = () => {
  // stopping at 43:00
  return (
    <div>
      <Head>
        <title>Ryan's Portfolio</title>
      </Head>

      <Header />
   
    </div>
  );
};

export default Home;
