import React from 'react';
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
        <div>
            <Head>
                <meta
                    name="description"
                    content="Web Handbook - карманный справочник по веб технологиям."
                />
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Header />
            <div className={ styles.mainContainer }>
                <Navigation tags={['body', 'a']}/>
                <main>
                    { props.children }
                </main>
            </div>
            <Footer />
        </div>
    );
};
