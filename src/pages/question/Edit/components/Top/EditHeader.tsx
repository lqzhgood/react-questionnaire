import React, { useState } from 'react';
import styles from './EditHeader.module.sass';
import { Button, Input, Space, Typography } from 'antd';
import { EditOutlined, LeftOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import EditToolbar from './EditToolbar';
import useGetQuestionPageInfo from '@/hooks/useGetQuestionPageInfo';
import { useDispatch } from 'react-redux';
import { updatePageInfo } from '@/store/pageInfo';

const { Title } = Typography;

const TitleElm = () => {
    const { pageInfo } = useGetQuestionPageInfo();
    const { title } = pageInfo;
    const dispatch = useDispatch();

    const [editState, setEditState] = useState(false);

    return (
        <Space align='baseline'>
            {!editState ? (
                <Title className={styles.title}>{title}</Title>
            ) : (
                <Input
                    value={title}
                    onChange={e => {
                        const t = e.target.value.trim();
                        if (!t) return;
                        dispatch(updatePageInfo({ title: t }));
                    }}
                    onBlur={() => setEditState(false)}
                    onPressEnter={() => setEditState(false)}
                />
            )}
            <Button type='text' icon={<EditOutlined />} onClick={() => setEditState(true)}></Button>
        </Space>
    );
};

const EditHeader = () => {
    const nav = useNavigate();
    return (
        <div className={styles['header-wrapper']}>
            <div className={styles.header}>
                <div className={styles.left}>
                    <Space align='baseline'>
                        <Button
                            type='link'
                            icon={<LeftOutlined />}
                            onClick={() => {
                                nav(-1);
                            }}
                        >
                            返回
                        </Button>
                        <TitleElm />
                    </Space>
                </div>
                <div className={styles.main}>
                    <EditToolbar />
                </div>
                <div className={styles.right}>
                    <Space>
                        <Button>保存</Button>
                        <Button type='primary'>发布</Button>
                    </Space>
                </div>
            </div>
        </div>
    );
};

export default EditHeader;
