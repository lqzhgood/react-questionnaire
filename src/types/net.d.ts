type Methods = 'get' | 'post' | 'patch' | 'delete' | 'head' | 'put' | 'options';

export type RespType<T = RespData> = {
    code: number;
    msg: string;
    data: T;
};

export type RespData = {
    [key: string]: any;
};

interface mockType<T extends RespData = RespData> {
    path: string;
    method: Methods;
    response: (opt: MockCbOptions) => T;
}

interface MockCbOptions {
    url: string;
    path?: string;
    headers: Record<string, string>;
    type: Methods;
    body: Record<string, any>;
    query: Record<string, any>;
}
