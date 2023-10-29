import { StoreStateType } from '@/store';
import { UserStateType } from '@/store/user';
import { useSelector } from 'react-redux';

function useGetUserInfo() {
    const userInfo = useSelector<StoreStateType, UserStateType>(state => state.user);
    return userInfo;
}

export default useGetUserInfo;
