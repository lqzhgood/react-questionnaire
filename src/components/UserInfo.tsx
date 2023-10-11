import React, { useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { HOME_PATHNAME, LOGIN_PATHNAME } from '../routers';

import { UserOutlined } from '@ant-design/icons';
import { Button, message } from 'antd';
import useGetUserInfo from '@/hooks/useGetUserInfo';
import { useDispatch } from 'react-redux';
import { logoutReducer } from '@/store/user';

// TODO 未登录不显示
const UserInfo = () => {
    const nav = useNavigate();

    const dispatch = useDispatch();
    const { username, nickname } = useGetUserInfo();

    function logout() {
        dispatch(logoutReducer());
        message.success('退出成功');
        nav(HOME_PATHNAME);
    }

    const UserInfo = useMemo(() => {
        return (
            <>
                <span style={{ color: '#e8e8e8' }}>
                    <UserOutlined />
                    {nickname}
                </span>
                <Button type='link' onClick={logout}>
                    退出
                </Button>
            </>
        );
    }, [username, nickname]);

    return username ? UserInfo : <Link to={LOGIN_PATHNAME}>登录</Link>;
};

export default UserInfo;
