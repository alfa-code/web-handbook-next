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
                    Web Handbook - Cправочник по html, css и другим веб технология.
                </title>
            </Head>
            <h1>Главная станица</h1>
            <Link href="/old/ssg/user">old link</Link>
        </PageWrapper>
    );
};

export default Home;
