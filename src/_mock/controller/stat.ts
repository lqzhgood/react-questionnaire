import { mockType } from '@/types/net';
import { getStatList } from '../data/getStatList';
import { StatListType } from '@/services/stat';

const list: mockType[] = [
    {
        path: '/api/stat/:questionId',
        method: 'get',
        response: (): StatListType => ({
            total: 100,
            list: getStatList(),
        }),
    },
];

export default list;
