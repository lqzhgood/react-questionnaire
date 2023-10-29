import LayoutDefault from '@/layout/default';
import Head from 'next/head';

export default function Fail() {
    return (
        <LayoutDefault title='提交失败'>
            <h1>失败</h1>
            <p>问卷提交失败</p>
        </LayoutDefault>
    );
}
