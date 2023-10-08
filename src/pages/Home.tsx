import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'antd';

const Home = () => {
    const nav = useNavigate();
    function clickHandler() {
        nav('/login');
    }

    return (
        <div>
            <p>Home</p>
            <Button type='primary'>Button</Button>
            <div>
                <button onClick={clickHandler}>登录</button>
                <Link to='/register'>注册</Link>
            </div>
        </div>
    );
};

export default Home;
