import React, { useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { HOME_PATHNAME, LOGIN_PATHNAME } from '../routers';
import { useRequest } from 'ahooks';
import { getUserInfoService } from '@/services/user';
import { UserOutlined } from '@ant-design/icons';
import { Button, message } from 'antd';
import { removeToken } from '@/utils/user-token';

// TODO 未登录不显示
const UserInfo = () => {
    const nav = useNavigate();
    const { data } = useRequest(getUserInfoService);
    const { username, nickname } = data || {};

    function logout() {
        removeToken();
        nav(HOME_PATHNAME);
        message.success('退出成功');
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
