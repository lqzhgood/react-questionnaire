import { HOME_PATHNAME, LOGIN_PATHNAME, REGISTER_PATHNAME } from '.';

export function isLoginOrRegister(pathname: string) {
    return [LOGIN_PATHNAME, REGISTER_PATHNAME].includes(pathname);
}

export function isNoNeedUserInfo(pathname: string) {
    const list = [LOGIN_PATHNAME, REGISTER_PATHNAME, '/demos'];
    return list.some(p => pathname.startsWith(p)) || pathname === HOME_PATHNAME;
}
