import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from '../store/count';
import { StateType } from '../store';
import { Space } from 'antd';

const Count = () => {
    const count = useSelector<StateType, number>(state => state.count);

    const dispatch = useDispatch();

    return (
        <div>
            <h2>Count</h2>
            <Space>
                <span>{count}</span>
                <button onClick={() => dispatch(increase())}>+</button>
                <button onClick={() => dispatch(decrease())}>-</button>
            </Space>
        </div>
    );
};

export default Count;
