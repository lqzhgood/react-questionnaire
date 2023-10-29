import { useRequest } from 'ahooks';
import { getUserInfoService } from '@/services/user';
import useGetUserInfo from './useGetUserInfo';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginReducer } from '@/store/user';

function useLoadUserInfo() {
    const [wait, setWait] = useState(true);
    const dispatch = useDispatch();

    const { run, runAsync } = useRequest(getUserInfoService, {
        manual: true,
        debounceWait: 100,
        onSuccess: res => {
            dispatch(loginReducer(res));
        },
        onFinally() {
            setWait(false);
        },
    });

    const { username } = useGetUserInfo();
    useEffect(() => {
        if (username) {
            setWait(false);
        } else {
            run();
        }
    }, [username]);

    return { wait, runAsync };
}

export default useLoadUserInfo;
