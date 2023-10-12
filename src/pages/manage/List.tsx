import React, { useEffect, useMemo, useRef, useState } from 'react';
import QuestionCard from '../../components/QuestionCard';
import { useSearchParams } from 'react-router-dom';
import { useRequest, useDebounceFn, useTitle } from 'ahooks';
import styles from './common.module.sass';
import Title from 'antd/es/typography/Title';
import { WEB_NAME } from '../../const/web';
import ListSearch from '../../components/ListSearch';
import { Empty, Spin } from 'antd';
import { getQuestionListService } from '../../services/question';
import { LIST_PAGE_SIZE, LIST_SEARCH_PARAM_KEY } from '../../const';
import { QuestionData } from '@/types/question';

const List = () => {
    useTitle(`我的问卷 - ${WEB_NAME}`);

    const [searchParams] = useSearchParams();
    const keyword = searchParams.get(LIST_SEARCH_PARAM_KEY) || '';

    const [page, setPage] = useState(1);
    const [list, setList] = useState<QuestionData[]>([]);
    const [total, setTotal] = useState(0);
    const haveMoreData = total > list.length;

    const footerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    const { loading, run } = useRequest(
        () => {
            return getQuestionListService({ [LIST_SEARCH_PARAM_KEY]: keyword, page, pageSize: LIST_PAGE_SIZE });
        },
        {
            manual: true,
            onSuccess: ({ list: l, total }) => {
                setPage(page + 1);
                setList([...list, ...l]);
                setTotal(total);
            },
        },
    );

    const { run: loadMore } = useDebounceFn(
        () => {
            if (!footerRef.current) return;
            const rect = footerRef.current.getBoundingClientRect();
            const vHeight = contentRef.current?.getBoundingClientRect().bottom || 0;
            if (rect.bottom > vHeight) return;
            if (loading) return;

            run();
        },
        {
            wait: 500,
        },
    );

    useEffect(() => {
        setPage(1);
        setList([]);
        setTotal(0);
    }, [keyword]);

    useEffect(() => {
        loadMore(); // 加载第一页，初始化
    }, [searchParams]);

    useEffect(() => {
        if (haveMoreData) {
            contentRef.current?.addEventListener('scroll', loadMore);
        }

        return () => {
            contentRef.current?.removeEventListener('scroll', loadMore);
        };
    }, [searchParams, haveMoreData]);

    const footerElm = useMemo(() => {
        if (loading) return <Spin />;
        if (total === 0) return <Empty description='暂无数据' />;
        if (!haveMoreData) return <span>没有更多了</span>;
        return <span>开始加载下一页</span>;
    }, [loading, total, haveMoreData]);

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
            <div className={styles.content} ref={contentRef}>
                {list.map(q => {
                    const { _id } = q;

                    return <QuestionCard key={_id} {...q} />;
                })}
                <div className={styles.footer} ref={footerRef}>
                    {footerElm}
                </div>
            </div>
        </div>
    );
};

export default List;
