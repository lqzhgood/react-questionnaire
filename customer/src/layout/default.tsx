import React from 'react';
import Head from 'next/head';

import styles from './default.module.sass';
import Script from 'next/script';

type PropsType = {
    title: string;
    desc?: string;
    css?: string;
    js?: string;
    children: JSX.Element | JSX.Element[];
};

const LayoutDefault = (props: PropsType) => {
    const { title, desc = '问卷调查', children, css, js } = props;
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name='description' content={desc} />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel='icon' href='/favicon.ico' />
                <style>{css}</style>
            </Head>
            <main className={styles.container}>{children}</main>
            <Script id='page-js'>{js}</Script>
        </>
    );
};

export default LayoutDefault;