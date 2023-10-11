import React, { useContext, useState } from 'react';

import { TodoContext } from './index';

const InputForm = () => {
    const [text, setValue] = useState('');
    const { state, dispatch } = useContext(TodoContext);

    return (
        <div>
            <input
                type='text'
                value={text}
                placeholder='enter to add todo'
                onChange={e => setValue(e.target.value)}
                onKeyDown={e => {
                    if (e.key !== 'Enter') return;
                    if (!text.trim()) return;

                    dispatch({ type: 'add', payload: { id: Date.now(), title: text } });
                    setValue('');
                }}
            />
            #{state.length}
        </div>
    );
};

export default InputForm;
