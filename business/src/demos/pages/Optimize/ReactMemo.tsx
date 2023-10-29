import React, { useState } from 'react';

const Num = (props: { num: number }) => {
    console.log('num update', props.num);
    return <div>{props.num}</div>;
};

const Num2 = React.memo(Num);

const Num3 = (props: { num: number }) => {
    console.log('num update', props.num);
    return <div>{props.num}</div>;
};

const Num4 = React.memo(Num3);

console.log('Num4', Num4);

const ReactMemo = () => {
    const [count, setCount] = useState(0);

    const num1 = 1;
    const num2 = 2;

    return (
        <div>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>add</button>
            <Num num={num1} />
            <Num2 num={num2} />
            {Num3({ num: 3 })}
        </div>
    );
};

export default ReactMemo;
