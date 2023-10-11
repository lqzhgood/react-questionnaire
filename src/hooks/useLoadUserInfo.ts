import { useRequest } from 'ahooks';
import { getUserInfoService } from '@/services/user';
import useGetUserInfo from './useGetUserInfo';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginReducer } from '@/store/user';

function useLoadUserInfo() {
    const [wait, setWait] = useState(true);
    const dispatch = useDispatch();
    const { username } = useGetUserInfo();

    // TODO 自动登录需要去掉
    const { run } = useRequest(getUserInfoService, {
        onSuccess: res => {
            dispatch(loginReducer(res));
        },
        onFinally() {
            setWait(false);
        },
    });

    useEffect(() => {
        if (username) {
            setWait(false);
        } else {
            run();
        }
    }, [username]);

    return { wait };
}

export default useLoadUserInfo;
