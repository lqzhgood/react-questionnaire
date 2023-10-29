import QuestionInput from '@/components/QuestionComponents/QuestionInput';
import QuestionRadio from '@/components/QuestionComponents/QuestionRadio';
import React from 'react';
import styles from './page.module.sass';
import { GetServerSidePropsContext } from 'next/types';
import LayoutDefault from '@/layout/default';
import { getQuestionById } from '../services/question';

type Props = {
    code: number;
    msg: string;
    data: {
        id: string;
        title: string;
        desc?: string;
        js?: string;
        css?: string;
        isPublished: boolean;
        isDeleted: boolean;
        componentList: any[];
    };
};

const page = (props: Props) => {
    const { code, data, msg } = props;

    if (code !== 200) {
        return (
            <LayoutDefault title='错误'>
                <h1>表单获取错误</h1>
                <div>{msg}</div>
            </LayoutDefault>
        );
    }

    const { title, id } = data || {};

    return (
        <LayoutDefault title={title + ' - 问卷调查'}>
            <h1>{title}</h1>
            <form action='/api/answer' method='POST'>
                <input type='hidden' name='questionId' value={id} />
                <div className={styles.componentWrapper}>
                    <QuestionInput fe_id='c1' props={{ title: '你的姓名', placeholder: '请输入姓名' }} />
                </div>
                <div className={styles.componentWrapper}>
                    <QuestionRadio
                        fe_id='c2'
                        props={{
                            title: '你的性别',
                            options: [
                                { label: '男', value: 'male' },
                                { label: '女', value: 'female' },
                            ],
                            value: '',
                        }}
                    />
                </div>
                <div className={styles.submitBtnContainer}>
                    <button type='submit'>提交</button>
                </div>
            </form>
        </LayoutDefault>
    );
};

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
    const id = ctx.params?.id as string;

    const data = await getQuestionById(id);

    return {
        props: data,
    };
}

export default page;
