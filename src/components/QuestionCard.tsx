import React, { useState } from 'react';

import styles from './QuestionCard.module.sass';
import { Button, Divider, Modal, Popconfirm, Space, Spin, Tag, message } from 'antd';
import {
    CopyOutlined,
    DeleteOutlined,
    EditOutlined,
    ExclamationCircleOutlined,
    LineChartOutlined,
    StarOutlined,
} from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import { useRequest } from 'ahooks';
import { duplicateQuestionService, updateQuestionService } from '@/services/question';
import { QuestionData } from '@/types/question';

type PropsType = QuestionData;

const QuestionCard = (props: PropsType) => {
    const { _id, title, createdAt, answerCount, isPublished, isStar } = props;
    const nav = useNavigate();

    const [loading, setLoading] = useState(false);

    const [data, setData] = useState<QuestionData>({ ...props });

    const { run: duplicate } = useRequest(
        () => {
            return duplicateQuestionService(_id);
        },
        {
            manual: true,
            onBefore() {
                setLoading(true);
            },
            onSuccess(res) {
                message.success(`复制成功`);
                nav(`/question/edit/${res._id}`);
            },
            onFinally() {
                setLoading(false);
            },
        },
    );

    function del() {
        Modal.confirm({
            title: '确认删除问卷',
            icon: <ExclamationCircleOutlined />,
            okText: '删除',
            okType: 'danger',
            cancelText: '取消',
            onOk() {
                update({ isDeleted: true });
            },
        });
    }

    const { run: update } = useRequest<Record<string, never>, [Partial<QuestionData>]>(
        opt => updateQuestionService(_id, opt),
        {
            manual: true,
            onBefore() {
                setLoading(true);
            },
            onSuccess(res, [opt]) {
                message.success(`更新成功 ${JSON.stringify(opt)}`);
                setData({ ...data, ...opt });
            },
            onFinally() {
                setLoading(false);
            },
        },
    );

    return data.isDeleted ? null : (
        <Spin spinning={loading}>
            <div className={styles.container}>
                <div className={styles.title}>
                    <div className={styles.left}>
                        <Link to={isPublished ? `/question/stat/${_id}` : `/question/edit/${_id}`}>
                            <Space>
                                {data.isStar && <StarOutlined style={{ color: 'red' }} />}
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
                            <Button
                                type='text'
                                size='small'
                                icon={<EditOutlined />}
                                onClick={() => nav(`/question/edit/${_id}`)}
                            >
                                编辑问卷
                            </Button>
                            <Button
                                type='text'
                                size='small'
                                icon={<LineChartOutlined />}
                                onClick={() => nav(`/question/stat/${_id}`)}
                                disabled={!isPublished}
                            >
                                数据统计
                            </Button>
                        </Space>
                    </div>
                    <div className={styles.right}>
                        <Space>
                            <Button
                                type='text'
                                size='small'
                                icon={<StarOutlined />}
                                onClick={() => update({ isStar: !isStar })}
                            >
                                {isStar ? '取消标星' : '标星'}
                            </Button>
                            <Popconfirm title='确认复制' onConfirm={duplicate} okText='复制' cancelText='取消'>
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
        </Spin>
    );
};

export default QuestionCard;
