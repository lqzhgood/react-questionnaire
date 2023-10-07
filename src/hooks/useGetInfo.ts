import { useState } from 'react';

function getInfo(): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('hello');
        }, 1000);
    });
}

function useGetInfo() {
    const [loading, setLoading] = useState(true);
    const [info, setInfo] = useState('');

    getInfo()
        .then(data => {
            setInfo(data);
        })
        .finally(() => {
            setLoading(false);
        });

    return { loading, info };
}

export default useGetInfo;
