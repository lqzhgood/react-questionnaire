type Methods = 'get' | 'post' | 'patch' | 'delete' | 'head' | 'put' | 'options';

export type RespType<T = RespData> = {
    code: number;
    msg: string;
    data: T;
};

export type RespData = {
    [key: string]: any;
};

interface mockType {
    path: string;
    method: Methods;
    response: (opt: MockCbOptions) => RespData;
}

interface MockCbOptions {
    url: string;
    type: Methods;
    body: Record<string, any>;
    query: Record<string, any>;
}
