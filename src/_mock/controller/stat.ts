import Mock from 'better-mock';
import { mockType } from '@/types/net';
import { getStatList } from '../data/getStatList';
import { StatComponentDetail, StatListType } from '@/services/stat';
import { getComponentList } from '../data/getComponentList';
import { QuestionComponentType } from '@/const/question';

const R = Mock.Random;

const list: mockType[] = [
    {
        path: '/api/stat/:questionId',
        method: 'get',
        response: (): StatListType => ({
            total: 100,
            list: getStatList(),
        }),
    },
    {
        path: '/api/stat/:questionId/:componentId',
        method: 'get',
        response: opt => {
            const [, , , , componentId] = opt.url.split('/');

            let stat: StatComponentDetail[] = [];

            const cList = getComponentList();
            const find = cList.find(c => c.fe_id === componentId);
            if (find) {
                switch (find.type) {
                    case QuestionComponentType.Radio:
                        stat =
                            find?.props?.options?.map(o => ({
                                name: o.label,
                                count: R.integer(20, 80),
                            })) || [];
                        break;
                    case QuestionComponentType.Checkbox:
                        stat =
                            find?.props?.list?.map(o => ({
                                name: o.label,
                                count: R.integer(20, 80),
                            })) || [];
                        break;
                    default:
                        break;
                }
            }

            return {
                stat,
            };
        },
    },
];

export default list;
