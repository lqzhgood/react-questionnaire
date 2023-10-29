import Head from 'next/head';

export default function Fail() {
    return (
        <>
            <Head>
                <title>提交失败</title>
            </Head>
            <main>
                <h1>失败</h1>
                <p>问卷提交失败</p>
            </main>
        </>
    );
}
