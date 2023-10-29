import LayoutDefault from '@/layout/default';
import Head from 'next/head';

export default function Success() {
    return (
        <LayoutDefault title='提交成功'>
            <h1>成功</h1>
            <p>问卷提交成功</p>
        </LayoutDefault>
    );
}
