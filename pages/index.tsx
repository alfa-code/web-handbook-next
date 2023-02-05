import type {NextPage} from 'next';
import Head from 'next/head';
import {PageWrapper} from "@/components/page-wrapper";
import {BannerOnMainPage} from '@/src/components/banner-on-main-page';

const Home: NextPage = () => {
    return (
        <PageWrapper>
            <Head>
                <title>
                    Web Handbook - Cправочник по html, css и другим веб технология.
                </title>
            </Head>

            <BannerOnMainPage />
        </PageWrapper>
    );
};

export default Home;
