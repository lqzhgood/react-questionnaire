import { MockCbOptions } from '@/types/net';
import { checkUser, decodeToken } from '../services/user';
import { BASE_URL } from '@/const/web';

function isPublicApi(pathname: string) {
    return ['/api/user/register', '/api/user/login'].includes(pathname.replace(BASE_URL, ''));
}

export default function (opt: MockCbOptions) {
    // 不需要登录 放行
    if (isPublicApi(opt.path || '')) {
        return undefined;
    }
    const Authorization = opt.headers.Authorization;
    const token = Authorization.split('Bearer ')[1].trim();
    const { username, password } = decodeToken(token);

    if (!checkUser(username, password)) {
        return {
            code: 403,
            msg: 'not allow',
            data: {},
        };
    }

    return undefined;
}
