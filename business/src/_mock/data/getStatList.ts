import Mock from 'better-mock';
import { getComponentList } from './getComponentList';
import { QuestionComponentType } from '@/const/question';
import { StatDetail } from '@/services/stat';

const R = Mock.Random;

export function getStatList(len = 10) {
    const componentList = getComponentList();

    const list = [];

    for (let i = 0; i < len; i++) {
        // @ts-ignore
        const stat: StatDetail = {
            _id: R.id(),
        };

        componentList.forEach(c => {
            const { fe_id, title, type, props } = c;

            switch (type) {
                case QuestionComponentType.Input:
                case QuestionComponentType.Textarea:
                    if (title === '姓名') {
                        stat[fe_id] = R.cname();
                    } else {
                        stat[fe_id] = R.ctitle();
                    }
                    break;
                case QuestionComponentType.Radio:
                    stat[fe_id] = R.pick(props.options?.map(o => o.label) || []);
                    break;
                case QuestionComponentType.Checkbox:
                    // @ts-ignore
                    stat[fe_id] = R.pick(props.list?.map(o => o.label) || [], 1, 2).join(',');
                    break;
                default:
                    break;
            }
        });

        list.push(stat);
    }

    return list;
}
