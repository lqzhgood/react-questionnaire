import { useSearchParams } from 'react-router-dom';
import { ListSearchOption, getQuestionListService } from '../services/question';
import { useRequest } from 'ahooks';
import { LIST_PAGE_PARAM_KEY, LIST_PAGE_SIZE, LIST_PAGE_SIZE_PARAM_KEY, LIST_SEARCH_PARAM_KEY } from '../const';

function useLoadQuestList(opt: Partial<ListSearchOption> = {}) {
    const [searchParams] = useSearchParams();

    const res = useRequest(
        async () => {
            const keyword = searchParams.get(LIST_SEARCH_PARAM_KEY) || '';
            const page = parseInt(searchParams.get(LIST_PAGE_PARAM_KEY) || '') || 1;
            const pageSize = parseInt(searchParams.get(LIST_PAGE_SIZE_PARAM_KEY) || '') || LIST_PAGE_SIZE;

            const data = getQuestionListService({ keyword, page, pageSize, ...opt });
            return data;
        },
        {
            refreshDeps: [searchParams],
        },
    );

    return res;
}

export default useLoadQuestList;
