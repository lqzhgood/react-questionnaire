export type RouteProps = RouteObject & {
    // meta?: {
    //     auth?: boolean;
    //     roles?: USER_ROLE_ENUM[];
    //     unRoles?: USER_ROLE_ENUM[];
    // };
    nam?: string;
    children?: RouteProps[];
};
