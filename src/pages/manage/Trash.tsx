import React, { useState } from 'react';
import { useRequest, useTitle } from 'ahooks';
import styles from './common.module.sass';
import Title from 'antd/es/typography/Title';
import { Button, Empty, Modal, Space, Spin, Table, Tag, message } from 'antd';
import { WEB_NAME } from '../../const/web';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import ListSearch from '../../components/ListSearch';
import useLoadQuestList from '../../hooks/useLoadQuestList';
import ListPage from '../../components/ListPage';
import { deleteQuestionService, updateQuestionService } from '@/services/question';

const Trash = () => {
    useTitle(`回收站 - ${WEB_NAME}`);

    const [selectIds, setSelectIds] = useState<string[]>([]);
    const { loading, error, data = { list: [], total: 0 }, refresh } = useLoadQuestList({ isDeleted: true });
    const { list, total } = data;

    const { loading: loadingRecover, run: runRecover } = useRequest(
        async () => {
            for await (const id of selectIds) {
                await updateQuestionService(id, { isDeleted: false });
            }
        },
        {
            manual: true,
            onSuccess() {
                message.success('恢复成功');
                setSelectIds([]);
                refresh();
            },
        },
    );

    const { loading: loadingDelete, run: runDelete } = useRequest(() => deleteQuestionService(selectIds), {
        manual: true,
        async onSuccess() {
            message.success('删除成功');
            setSelectIds([]);
            refresh();
        },
    });

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
            onOk: runDelete,
        });
    }

    const TableJsx = (
        <>
            <Space style={{ marginBottom: '16px' }}>
                <Button type='primary' disabled={selectIds.length === 0} onClick={runRecover} loading={loadingRecover}>
                    恢复
                </Button>

                <Button danger disabled={selectIds.length === 0} onClick={del} loading={loadingDelete}>
                    彻底删除
                </Button>
            </Space>
            <Table
                dataSource={list}
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
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.left}>
                    <Title level={3}>我的问卷</Title>
                </div>
                <div className={styles.right}>
                    <ListSearch />
                </div>
            </div>
            <div className={styles.content}>
                <Spin spinning={loading}>
                    {list.length > 0 && TableJsx}
                    {!loading && list.length === 0 && <Empty description='暂无数据' />}
                </Spin>
            </div>
            <div className={styles.footer}>
                <ListPage total={total} />
            </div>
        </div>
    );
};

export default Trash;
