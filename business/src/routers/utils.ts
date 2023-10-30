import { BASE_URL } from '@/const/web';
import { HOME_PATHNAME, LOGIN_PATHNAME, REGISTER_PATHNAME } from '.';

export function isLoginOrRegister(pathname: string) {
    return [LOGIN_PATHNAME, REGISTER_PATHNAME].includes(pathname);
}

export function isNoNeedUserInfo(pathname: string) {
    pathname = pathname.replace(BASE_URL, '');
    const list = [LOGIN_PATHNAME, REGISTER_PATHNAME, '/demos'];
    return list.some(p => pathname.startsWith(p)) || pathname === HOME_PATHNAME;
}

// export function generateRouter(routers: any) {
//     return routers.map((item: any) => {
//         if (item.children) {
//             item.children = generateRouter(item.children);
//         }
//         item.element = (
//             <Suspense fallback={<div>加载中...</div>}>
//                 <item.component />
//             </Suspense>
//         );

//         return item;
//     });
// }
