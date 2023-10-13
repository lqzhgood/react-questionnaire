import React, { useEffect, useState } from 'react';
import { Input } from 'antd';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { LIST_SEARCH_PARAM_KEY } from '../const';

const { Search } = Input;

const ListSearch = () => {
    const [value, setValue] = useState('');
    const nav = useNavigate();
    const { pathname } = useLocation();

    function handleSearch(v: string) {
        setValue(v);
        nav({
            pathname,
            search: `${LIST_SEARCH_PARAM_KEY}=${v}`,
        });
    }

    const [searchParams] = useSearchParams();
    useEffect(() => {
        const currV = searchParams.get(LIST_SEARCH_PARAM_KEY) || '';
        setValue(currV);
    }, [searchParams]);

    return (
        <Search
            placeholder='输入关键词'
            allowClear
            value={value}
            onChange={e => setValue(e.target.value)}
            onSearch={handleSearch}
            style={{ width: '260px' }}
        />
    );
};

export default ListSearch;
