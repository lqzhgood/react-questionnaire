import React from 'react';
import { useNavigate } from 'react-router-dom';

type Props = {
    //;
};

const Login = (props: Props) => {
    const nav = useNavigate();
    return (
        <div>
            Login
            <button
                onClick={() => {
                    nav(-1);
                }}
            >
                返回
            </button>
        </div>
    );
};

export default Login;
