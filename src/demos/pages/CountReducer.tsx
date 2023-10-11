import React, { useReducer, useState } from 'react';

const CountReducer = () => {
    // const [count, setCount] = useState(100);
    const [state, dispatch] = useReducer(
        (state: { count: number }, action: { type: string }) => {
            switch (action.type) {
                case '+':
                    return { count: state.count + 1 };
                case '-':
                    return { count: state.count - 1 };
                default:
                    throw new Error();
            }
        },
        { count: 100 },
    );

    return (
        <div>
            <span>count: {state.count}</span>
            <button onClick={() => dispatch({ type: '+' })}>+</button>
            <button onClick={() => dispatch({ type: '-' })}>-</button>
        </div>
    );
};

export default CountReducer;
