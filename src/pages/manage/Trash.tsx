import React, { useState } from 'react';
import { useTitle } from 'ahooks';
import styles from './common.module.sass';
import Title from 'antd/es/typography/Title';
import { Button, Empty, Modal, Space, Spin, Table, Tag } from 'antd';
import { WEB_NAME } from '../../const/web';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import ListSearch from '../../components/ListSearch';
import useLoadQuestList from '../../hooks/useLoadQuestList';
import ListPage from '../../components/ListPage';

const Trash = () => {
    useTitle(`回收站 - ${WEB_NAME}`);

    const [selectIds, setSelectIds] = useState<string[]>([]);
    const { loading, error, data = { list: [], total: 0 } } = useLoadQuestList({ isDeleted: true });
    const { list, total } = data;

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
        <>
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
        </>
    );
};

export default Trash;
