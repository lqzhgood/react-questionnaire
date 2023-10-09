import React, { useState } from 'react';
import QuestionCard from '../../components/QuestionCard';
import { useTitle } from 'ahooks';
import styles from './common.module.sass';
import Title from 'antd/es/typography/Title';
import { Button, Empty, Modal, Space, Table, Tag } from 'antd';
import { WEB_NAME } from '../../const/web';
import { ExclamationCircleOutlined } from '@ant-design/icons';

const Trash = () => {
    useTitle(`回收站 - ${WEB_NAME}`);

    const [selectIds, setSelectIds] = useState<string[]>([]);

    const [questionList, setQuestionList] = useState([
        { _id: 'q1', title: '问卷1', isPublished: false, isStar: true, answerCount: 2, createdAt: '3月10日 13:23' },
        { _id: 'q3', title: '问卷3', isPublished: true, isStar: true, answerCount: 5, createdAt: '3月16日 13:23' },
    ]);

    const tableColumns = [
        {
            title: 'ID',
            dataIndex: '_id',
        },
        {
            title: '标题',
            dataIndex: 'title',
        },
        {
            title: '是否发布',
            dataIndex: 'isPublished',
            render(isPublished: boolean) {
                return isPublished ? <Tag color='processing'>已发布</Tag> : <Tag>未发布</Tag>;
            },
        },
        {
            title: '答卷',
            dataIndex: 'answerCount',
        },
        {
            title: '创建时间',
            dataIndex: 'createdAt',
        },
    ];

    function del() {
        Modal.confirm({
            title: '是否彻底删除问卷',
            content: '删除后不可恢复',
            icon: <ExclamationCircleOutlined />,
            onOk() {
                console.log(selectIds);
            },
        });
    }

    const TableJsx = (
        <>
            <Space style={{ marginBottom: '16px' }}>
                <Button type='primary' disabled={selectIds.length === 0}>
                    恢复
                </Button>

                <Button danger disabled={selectIds.length === 0} onClick={del}>
                    彻底删除
                </Button>
            </Space>
            <Table
                dataSource={questionList}
                columns={tableColumns}
                pagination={false}
                rowKey={'_id'}
                rowSelection={{
                    onChange(ids) {
                        setSelectIds(ids as string[]);
                    },
                }}
            />
        </>
    );

    return (
        <>
            <div className={styles.header}>
                <div className={styles.left}>
                    <Title level={3}>我的问卷</Title>
                </div>
                <div className={styles.right}>(搜索)</div>
            </div>
            <div className={styles.content}>{questionList.length > 0 ? TableJsx : <Empty description='暂无数据' />}</div>
            <div className={styles.footer}>分页</div>
        </>
    );
};

export default Trash;
