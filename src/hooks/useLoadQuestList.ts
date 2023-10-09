import { useSearchParams } from 'react-router-dom';
import { ListSearchOption, getQuestionListService } from '../services/question';
import { useRequest } from 'ahooks';
import { LIST_SEARCH_PARAM_KEY } from '../const';

function useLoadQuestList(opt: Partial<ListSearchOption> = {}) {
    const [searchParams] = useSearchParams();

    const res = useRequest(
        async () => {
            const keyword = searchParams.get(LIST_SEARCH_PARAM_KEY) || '';
            const data = getQuestionListService({ keyword, ...opt });
            return data;
        },
        {
            refreshDeps: [searchParams],
        },
    );

    return res;
}

export default useLoadQuestList;
