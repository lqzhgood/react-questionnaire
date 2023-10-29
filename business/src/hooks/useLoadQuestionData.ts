import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getQuestionService } from '../services/question';
import { useRequest } from 'ahooks';
import { useDispatch } from 'react-redux';
import { resetComponents } from '@/store/componentsReducer';
import { resetPageInfo } from '@/store/pageInfo';

function useLoadQuestionData() {
    const { id = '' } = useParams();
    const dispatch = useDispatch();
    const { data, loading, error, run } = useRequest(
        (id: string) => {
            if (!id) throw new Error('没有问卷 id');
            return getQuestionService(id);
        },
        {
            manual: true,
        },
    );

    useEffect(() => {
        run(id);
    }, [id]);

    useEffect(() => {
        if (!data) return;
        const { componentList = [], id, title, desc, isPublished, js, css } = data;

        let selectedId = '';
        if (componentList.length > 0) {
            selectedId = componentList[0].fe_id;
        }

        dispatch(resetComponents({ selectedId, componentList, copiedComponent: null }));
        dispatch(resetPageInfo({ id, title, desc, isPublished, js, css }));
    }, [data]);

    return { loading, error };
}

export default useLoadQuestionData;
