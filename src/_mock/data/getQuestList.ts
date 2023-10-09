import Mock from 'better-mock';
import { LIST_SEARCH_PARAM_KEY } from '../../const';

const R = Mock.Random;

export function getQuestionList(len = 10, o: Partial<QuestionData & { [LIST_SEARCH_PARAM_KEY]: string }> = {}) {
    const list: QuestionData[] = [];

    const keyword = o[LIST_SEARCH_PARAM_KEY] && o[LIST_SEARCH_PARAM_KEY] + ' ';

    for (let i = 0; i < len; i++) {
        list.push({
            _id: R.id(),
            title: keyword + R.ctitle(),
            isPublished: R.boolean(),
            isStar: R.boolean(),
            answerCount: R.natural(50, 100),
            createdAt: R.datetime(),
            isDeleted: R.boolean(),
            ...o,
        });
    }

    return list;
}
