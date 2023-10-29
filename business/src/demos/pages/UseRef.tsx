import React, { useRef } from 'react';

const UseRefFC = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    function selectInput() {
        inputRef.current?.select();
    }

    return (
        <>
            <input type='text' defaultValue='HH' ref={inputRef} />
            <button onClick={selectInput}> select </button>
        </>
    );
};

export default UseRefFC;
