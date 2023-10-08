import React from 'react';
import { Link } from 'react-router-dom';
import { LOGIN_PATHNAME } from '../routers';

type Props = {
    //
};

const UserInfo = (props: Props) => {
    return (
        <>
            <Link to={LOGIN_PATHNAME}>登录</Link>
        </>
    );
};

export default UserInfo;
