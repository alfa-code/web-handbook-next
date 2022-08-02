import type { NextPage } from "next";
import Head from "next/head";

import { PageWrapper } from "@/components/page-wrapper";

const Home: NextPage = () => {
  return (
    <PageWrapper>
      <Head>
        <title>Main app page</title>
        <meta
          name="description"
          content="Web Handbook - карманный справочник по веб технологиям."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      Main Page
    </PageWrapper>
  );
};

export default Home;
