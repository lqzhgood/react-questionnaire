import Mock from 'better-mock';
import { mockType } from '@/types/net';
import { getStatList } from '../data/getStatList';

const list: mockType[] = [
    {
        path: '/api/stat/:questionId',
        method: 'get',
        response: () => ({
            total: 100,
            list: getStatList(),
        }),
    },
];

export default list;
