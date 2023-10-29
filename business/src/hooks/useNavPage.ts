import { useLocation, useNavigate } from 'react-router-dom';
import useGetUserInfo from './useGetUserInfo';
import { useEffect } from 'react';
import useLoadUserInfo from './useLoadUserInfo';
import { LOGIN_PATHNAME, MANAGER_INDEX_PATHNAME } from '@/routers';
import { isLoginOrRegister, isNoNeedUserInfo } from '@/routers/utils';

function useNavPage() {
    const { username } = useGetUserInfo();
    const { pathname } = useLocation();
    const nav = useNavigate();
    const { wait } = useLoadUserInfo();

    useEffect(() => {
        if (wait) return;

        if (username && isLoginOrRegister(pathname)) {
            nav(MANAGER_INDEX_PATHNAME);
            return;
        }

        if (!username && !isNoNeedUserInfo(pathname)) {
            nav(LOGIN_PATHNAME);
            return;
        }
    }, [wait, username, pathname]);
}

export default useNavPage;
