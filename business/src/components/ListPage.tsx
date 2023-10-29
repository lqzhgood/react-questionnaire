import React, { useEffect, useState } from 'react';
import { Pagination } from 'antd';
import { LIST_PAGE_PARAM_KEY, LIST_PAGE_SIZE, LIST_PAGE_SIZE_PARAM_KEY } from '../const';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';

type Props = {
    total: number;
};

const ListPage = (props: Props) => {
    const { total } = props;

    const [curr, setCurr] = useState(1);
    const [pageSize, setPageSize] = useState(LIST_PAGE_SIZE);

    const [searchParams] = useSearchParams();

    const { pathname } = useLocation();

    const nav = useNavigate();

    useEffect(() => {
        const page = parseInt(searchParams.get(LIST_PAGE_PARAM_KEY) || '') || 1;
        const pageSize = parseInt(searchParams.get(LIST_PAGE_SIZE_PARAM_KEY) || '') || LIST_PAGE_SIZE;

        setCurr(page);
        setPageSize(pageSize);
    }, [searchParams]);

    function pageHandle(page: number, pageSize: number) {
        searchParams.set(LIST_PAGE_PARAM_KEY, page.toString());
        searchParams.set(LIST_PAGE_SIZE_PARAM_KEY, pageSize.toString());
        nav({
            pathname,
            search: searchParams.toString(),
        });
    }

    return <Pagination total={total} current={curr} pageSize={pageSize} onChange={pageHandle} />;
};

export default ListPage;
