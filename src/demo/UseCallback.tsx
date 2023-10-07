import React, { useCallback, useState } from 'react';

const UseCallback = () => {
    const [text, setText] = useState('hello');

    const fn1 = () => console.log('fn1', text);
    const fn2 = useCallback(() => console.log('fn2', text), [text]);

    return (
        <div>
            <input type='text' value={text} onChange={event => setText(event.target.value)} />
        </div>
    );
};

export default UseCallback;
