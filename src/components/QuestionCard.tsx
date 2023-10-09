import React from 'react';

import styles from './QuestionCard.module.sass';
import { Button, Divider, Modal, Popconfirm, Space, Tag, message } from 'antd';
import { CopyOutlined, DeleteOutlined, EditOutlined, ExclamationCircleOutlined, ExclamationOutlined, LineChartOutlined, StarOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';

type PropsType = {
    _id: string;
    title: string;
    isPublished: boolean;
    isStar: boolean;
    answerCount: number;
    createdAt: string;
};

const QuestionCard = (props: PropsType) => {
    const { _id, title, createdAt, answerCount, isPublished, isStar } = props;
    const nav = useNavigate();

    function copy() {
        message.success('copy');
    }
    function del() {
        Modal.confirm({
            title: '确认删除问卷',
            icon: <ExclamationCircleOutlined />,
            okText: '删除',
            okType: 'danger',
            cancelText: '取消',
            onOk(...args) {
                message.success('del');
            },
        });
    }
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <div className={styles.left}>
                    <Link to={isPublished ? `/question/stat/${_id}` : `/question/edit/${_id}`}>
                        <Space>
                            {isStar && <StarOutlined style={{ color: 'red' }} />}
                            {title}
                        </Space>
                    </Link>
                </div>
                <div className={styles.right}>
                    <Space>
                        {isPublished ? <Tag color='processing'>已发布</Tag> : <Tag>未发布</Tag>}
                        <Tag>答卷:{answerCount}</Tag>
                        <Tag>{createdAt}</Tag>
                    </Space>
                </div>
            </div>
            <Divider style={{ margin: '12px 0' }} />
            <div className={styles['button-container']}>
                <div className={styles.left}>
                    <Space>
                        <Button type='text' size='small' icon={<EditOutlined />} onClick={() => nav(`/question/edit/${_id}`)}>
                            编辑问卷
                        </Button>
                        <Button type='text' size='small' icon={<LineChartOutlined />} onClick={() => nav(`/question/stat/${_id}`)} disabled={!isPublished}>
                            数据统计
                        </Button>
                    </Space>
                </div>
                <div className={styles.right}>
                    <Space>
                        <Button type='text' size='small' icon={<StarOutlined />}>
                            {isStar ? '取消标星' : '标星'}
                        </Button>
                        <Popconfirm title='确认复制' onConfirm={copy} okText='复制' cancelText='取消'>
                            <Button type='text' size='small' icon={<CopyOutlined />}>
                                复制
                            </Button>
                        </Popconfirm>
                        <Button type='text' size='small' icon={<DeleteOutlined />} onClick={del}>
                            删除
                        </Button>
                    </Space>
                </div>
            </div>
        </div>
    );
};

export default QuestionCard;
