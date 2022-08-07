import type { NextPage, GetServerSidePropsContext } from 'next';
import Head from 'next/head';

import { PageWrapper } from '@/components/page-wrapper';

interface IRepoInfoPage {
  htmlTagName: string;
}

const HtmlTagPage: NextPage<IRepoInfoPage> = (props) => {
  const { htmlTagName } = props;

  return (
    <PageWrapper>
      <Head>
        <title>
          Тег { htmlTagName } - описание и свойства
        </title>
        <meta
          name="description"
          content="Web Handbook - карманный справочник по веб технологиям."
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <h1>
        Страница конкретного тега: { htmlTagName }
      </h1>
    </PageWrapper>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { htmlTagName } = context.query;

  return {
    props: {
      htmlTagName,
    },
  };
}

export default HtmlTagPage;
