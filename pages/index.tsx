import type {NextPage} from 'next';
import Head from 'next/head';
import Link from 'next/link';
import {Button} from '@/components/button';
import {PageWrapper} from "@/components/page-wrapper";

const Home: NextPage = () => {
    return (
        <PageWrapper>
            <Head>
                <title>
                    Web Handbook - Cправочник по html, css и другим веб технологиям.
                </title>
                <meta
                    name="description"
                    content="Web Handbook - карманный справочник по веб технологиям."
                />
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <h1>
                Главная страница
            </h1>
            <Link href={'/html-list'}>Список всех html тегов</Link>
            <br />
            <br />
            <Link href={'/ssr/users/2'}>ssr/users/2</Link>
            <br />
            <br />
            <Button/>
        </PageWrapper>
    );
};

export default Home;
