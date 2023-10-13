import Mock from 'better-mock';
import { MockCbOptions, RespType, mockType } from '@/types/net';

import format from '../middleware/format';
import auth from '../middleware/auth';
import { hasIntersection } from '@/utils';
import { BASE_URL } from '@/const/web';

const middlewaresGlobal = [format, auth];

export function controller(mockList: mockType[]) {
    mockList.forEach(({ path, method, response }) => {
        Mock.mock(BASE_URL + path, method, (opt: MockCbOptions) => {
            let resp: RespType;

            try {
                const data = handler(opt)(middlewaresGlobal) || response(opt);

                if (hasIntersection(Object.keys(data), ['code', 'msg', 'data'])) {
                    resp = data as RespType;
                } else {
                    resp = {
                        code: 200,
                        msg: 'ok',
                        data,
                    };
                }
            } catch (error: any) {
                resp = {
                    code: 500,
                    msg: error?.message,
                    data: {},
                } as RespType;
            }

            console.groupCollapsed(`%c ${opt.type} | ${opt.url} `, 'color:#fff;background:#7986cb');
            console.log('req', opt);
            console.log('resp', resp);
            console.groupEnd();

            return resp;
        });
    });
}
function handler(opt: MockCbOptions) {
    return function (middlewares: ((opt: MockCbOptions) => RespType | undefined)[]) {
        let res: RespType | undefined;

        for (let i = 0; i < middlewares.length; i++) {
            const middleware = middlewares[i];
            res = middleware(opt);
            if (res) break;
        }

        return res;
    };
}
