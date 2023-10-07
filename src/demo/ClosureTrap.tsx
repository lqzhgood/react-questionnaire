import React, { useEffect, useMemo, useRef, useState } from 'react';

const ClosureTrap = () => {
    const [count, setCount] = useState(0);
    const countRef = useRef(0);

    useEffect(() => {
        countRef.current = count;
    });

    function add() {
        setCount(count + 1);
    }

    function syncOut() {
        setTimeout(() => {
            console.log('count', count);
            console.log('countRef.current', countRef.current);
        }, 3000);
    }

    return (
        <div>
            {count} {typeof count}
            <button onClick={add}>add</button>
            <button onClick={syncOut}>syncOut</button>
        </div>
    );
};

export default ClosureTrap;
