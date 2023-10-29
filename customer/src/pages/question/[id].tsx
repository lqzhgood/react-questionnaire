import QuestionInput from '@/components/QuestionComponents/QuestionInput';
import QuestionRadio from '@/components/QuestionComponents/QuestionRadio';
import React from 'react';
import styles from './page.module.sass';
import { GetServerSidePropsContext } from 'next/types';

type Props = {
    id: string;
};

const page = (props: Props) => {
    return (
        <div>
            <form action='/api/answer' method='POST'>
                <input type='hidden' name='questionId' value={props.id} />
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
        </div>
    );
};

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
    return {
        props: {
            id: ctx.params?.id,
        },
    };
}

export default page;
