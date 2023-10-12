import Mock from 'better-mock';
import { MockCbOptions, RespData, RespType, mockType } from '@/types/net';

import format from '../middleware/format';
import log from '../middleware/log';

export function controller(mockList: mockType[]) {
    mockList.forEach(({ path, method, response }) => {
        Mock.mock(path, method, (opt: MockCbOptions) => {
            try {
                const res = handler(opt)([format, log, format]);
                const data = res || response(opt);
                return {
                    code: 200,
                    msg: 'ok',
                    data,
                } as RespType;
            } catch (error: any) {
                return {
                    code: 500,
                    msg: error?.message,
                    data: {},
                } as RespType;
            }
        });
    });
}
function handler(opt: MockCbOptions) {
    return function (middlewares: ((opt: MockCbOptions) => RespData | undefined)[]) {
        let res: RespData | undefined;

        for (let i = 0; i < middlewares.length; i++) {
            const middleware = middlewares[i];
            res = middleware(opt);
            if (res) break;
        }

        return res;
    };
}
