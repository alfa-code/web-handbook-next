import React from 'react';
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import Head from 'next/head';

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
            { props.children }
            <Footer />
        </div>
    );
};
