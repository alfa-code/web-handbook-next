import React, { memo } from 'react';
import Head from 'next/head';
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Navigation } from "@/components/navigation";

import styles from './page-wrapper.module.scss';

interface Props {
    children: React.ReactNode;
}

export const PageWrapper: React.FunctionComponent<Props> = (props) => {
    return (
        <div className={styles.wrapper}>
            <Head>
                <meta
                    name="description"
                    content="Web Handbook - карманный справочник по веб технологиям."
                />
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Header />
            <Navigation tags={['body', 'a']}/>
            <main className={styles.main}>
                { props.children }
            </main>
            <Footer />
        </div>
    );
};
