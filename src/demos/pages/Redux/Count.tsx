import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from './store/count';

const Count = () => {
    const count = useSelector<{ count: number }>(state => state.count);

    const dispatch = useDispatch();

    return (
        <div>
            <span>
                <>Count {count}</>
            </span>
            <button onClick={() => dispatch(increase())}>+</button>
            <button onClick={() => dispatch(decrease())}>-</button>
        </div>
    );
};

export default Count;
