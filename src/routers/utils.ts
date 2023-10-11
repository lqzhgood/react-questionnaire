import { HOME_PATHNAME, LOGIN_PATHNAME, REGISTER_PATHNAME } from '.';

export function isLoginOrRegister(pathname: string) {
    return [LOGIN_PATHNAME, REGISTER_PATHNAME].includes(pathname);
}

export function isNoNeedUserInfo(pathname: string) {
    return [HOME_PATHNAME, LOGIN_PATHNAME, REGISTER_PATHNAME].includes(pathname);
}
