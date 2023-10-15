import React, { useEffect, useMemo, useState } from 'react';
import styles from './EditHeader.module.sass';
import { Button, Input, Space, Typography, message } from 'antd';
import { EditOutlined, LeftOutlined } from '@ant-design/icons';
import { useNavigate, useParams } from 'react-router-dom';
import EditToolbar from './EditToolbar';
import useGetQuestionPageInfo from '@/hooks/useGetQuestionPageInfo';
import { useDispatch } from 'react-redux';
import { updatePageInfo } from '@/store/pageInfo';
import useGetComponentInfo from '@/hooks/useGetComponentInfo';
import { useDebounceEffect, useKeyPress, useRequest } from 'ahooks';
import { updateQuestionEditService, updateQuestionService } from '@/services/question';
import { QuestionEditData } from '@/types/question';

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

const SaveButton = () => {
    const { id } = useParams();
    const { componentList } = useGetComponentInfo();
    const { pageInfo } = useGetQuestionPageInfo();

    const res = useMemo<QuestionEditData>(() => {
        return {
            ...pageInfo,
            componentList,
        };
    }, [pageInfo, componentList]);

    const { loading, run: save } = useRequest(
        () => {
            if (!id) return Promise.reject('没有ID');

            return updateQuestionEditService(id, res);
        },
        { manual: true },
    );

    useKeyPress(['ctrl.s', 'meta.s'], (event: KeyboardEvent) => {
        event.preventDefault();
        if (loading) return;
        save();
    });

    // 自动保存
    useDebounceEffect(
        () => {
            save();
        },
        [pageInfo, componentList],
        { wait: 30 * 1000 },
    );

    return (
        <Button loading={loading} onClick={save}>
            保存
        </Button>
    );
};

const PublishButton = () => {
    const { id } = useParams();
    const nav = useNavigate();
    const { loading, run } = useRequest(
        () => {
            if (!id) return Promise.reject('没有ID');
            return updateQuestionService(id, { isPublished: true });
        },
        {
            manual: true,
            onSuccess() {
                message.success('发布成功');
                nav(`/question/stat/${id}`); // TODO check
            },
        },
    );

    return (
        <Button loading={loading} onClick={run} type='primary'>
            发布
        </Button>
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
                        <SaveButton />
                        <PublishButton />
                    </Space>
                </div>
            </div>
        </div>
    );
};

export default EditHeader;
