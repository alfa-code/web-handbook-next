import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import { PageWrapper } from '@/components/page-wrapper';

const HtmlListPage: NextPage = () => {
  return (
    <PageWrapper>
      <Head>
        <title>
          Список html элементов | Список всех HTML тегов
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
        Список всех HTML тегов
      </h1>
      <Link href={'/html-list/a'}>a</Link>
    </PageWrapper>
  );
};

export default HtmlListPage;
