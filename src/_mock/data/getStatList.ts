import Mock from 'better-mock';
import { LIST_SEARCH_PARAM_KEY } from '../../const';
import { QuestionData } from '@/types/question';
import { getComponentList } from './getComponentList';
import { QuestionComponentType } from '@/const/question';

const R = Mock.Random;

export function getStatList(len = 10) {
    const componentList = getComponentList();

    const list = [];

    for (let i = 0; i < len; i++) {
        const stat: Record<string, unknown> = {
            _id: R.id(),
        };

        componentList.forEach(c => {
            const { fe_id, type, props } = c;

            switch (type) {
                case QuestionComponentType.Input:
                case QuestionComponentType.Textarea:
                    stat[fe_id] = R.ctitle();
                    break;
                case QuestionComponentType.Radio:
                    stat[fe_id] = R.pick(props.options?.map(o => o.value) || []);
                    break;
                case QuestionComponentType.Checkbox:
                    // @ts-ignore
                    stat[fe_id] = R.pick(props.list?.map(o => o.value) || [], 1, 2);
                    break;
                default:
                    break;
            }
        });

        list.push(stat);
    }

    return list;
}
