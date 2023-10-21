import { StoreStateType } from '@/store/index';
import { PageInfoType } from '@/store/pageInfo';
import { useSelector } from 'react-redux';

function useGetQuestionPageInfo() {
    const pageInfo = useSelector<StoreStateType, PageInfoType>(state => state.pageInfo);

    return pageInfo;
}

export default useGetQuestionPageInfo;
