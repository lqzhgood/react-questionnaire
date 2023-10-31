import React, { useState } from 'react';

function Child({ n, count }: { n: number; count: number }) {
    console.log('child render', n);
    return (
        <div>
            Child-{n}-{count}
        </div>
    );
}

const Test = () => {
    console.log('Text render');
    const [count, setCount] = useState(0);

    return (
        <div>
            <span>{count}</span>
            <button onClick={() => setCount(count + 1)}>add</button>
            <Child n={1} count={count} />
            {Child({ n: 2, count })}
        </div>
    );
};

export default Test;
