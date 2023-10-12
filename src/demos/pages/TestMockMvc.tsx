import axios from '@/services/net';
import React from 'react';

const TestMockMvc = () => {
    function handler() {
        axios
            .post('/test?a=33', { t: 123 })
            .then(d => {
                console.log('d', d);
            })
            .catch(err => {
                console.log('err', err);
            });
    }
    return (
        <div>
            <p>TestMockMvc</p>
            <button onClick={handler}>axios</button>
        </div>
    );
};

export default TestMockMvc;
