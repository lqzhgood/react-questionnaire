import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRequest } from 'ahooks';
import { Table, Typography } from 'antd';

import useGetComponentInfo from '@/hooks/useGetComponentInfo';
import { StatDetail, StatListType, getStatListService } from '@/services/stat';
import CenterSpin from '@/components/CenterSpin';
const { Title } = Typography;

import styles from './PageSata.module.sass';
import { STAT_PAGE_SIZE } from '@/const';

type Props = {
    selectedComponentId: string;
    setSelectedComponentId: (id: string) => void;
    setSelectedComponentType: (type: string) => void;
};

const PageSata = (props: Props) => {
    const { selectedComponentId, setSelectedComponentId, setSelectedComponentType } = props;

    const { id = '' } = useParams();
    const { componentList } = useGetComponentInfo();

    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(STAT_PAGE_SIZE);
    const [total, setTotal] = useState(0);
    const [list, setList] = useState<StatDetail[]>([]);

    const { loading } = useRequest<StatListType, [string, { page: number; pageSize: number }]>(
        () =>
            getStatListService(id, {
                page,
                pageSize,
            }),
        {
            refreshDeps: [id, page, pageSize],
            onSuccess(data) {
                setTotal(data.total);
                setList(data.list);
            },
        },
    );

    const columns = componentList.map(c => {
        const { fe_id, type } = c;
        const title = (
            <div
                style={{ cursor: 'pointer' }}
                className={selectedComponentId === fe_id ? styles.selected : ''}
                onClick={() => {
                    setSelectedComponentId(fe_id);
                    setSelectedComponentType(type);
                }}
            >
                {c.title}
            </div>
        );

        return {
            title,
            dataIndex: fe_id,
        };
    });

    return (
        <div>
            <Title level={3}>答卷数量: {total}</Title>
            {loading ? (
                <CenterSpin />
            ) : (
                <Table
                    rowKey='_id'
                    dataSource={list}
                    columns={columns}
                    pagination={{
                        total,
                        current: page,
                        pageSize,
                        onChange(page) {
                            setPage(page);
                        },
                        onShowSizeChange(page, pageSize) {
                            setPage(page);
                            setPageSize(pageSize);
                        },
                    }}
                />
            )}
        </div>
    );
};

export default PageSata;
