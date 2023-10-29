import React, { useState } from 'react';

const p = new Proxy([], {
    get(target, p) {
        console.log('proxy get');
        if (p === 'length') {
            return target.length;
        }

        if (p === 'join') {
            return 'xxx';
        }

        return 'proxy';
    },
    set(target: string[], p, newValue) {
        target.push(newValue);
        console.log('proxy set');
        return true;
    },
});

const UseStateFn = () => {
    console.log('component init');
    const [arr, setArr] = useState(() => {
        console.log('function init');
        return ['init'];
    });
    function add() {
        setArr([...arr, 'a']);
    }

    const [pry] = useState(p);

    return (
        <div>
            <h4>useState 初始化时，普通变量每次都会执行，传入函数将仅执行一次</h4>
            <p>{arr.length}</p>
            <p>{arr.join()}</p>
            {pry}
            <button onClick={add}>add</button>
        </div>
    );
};

export default UseStateFn;
