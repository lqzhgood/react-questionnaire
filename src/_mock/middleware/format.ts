import { MockCbOptions } from '@/types/net';
import { parseQueryParams } from '@/utils';

export default function (opt: MockCbOptions) {
    const { url, body } = opt;

    try {
        if (body) {
            opt.body = JSON.parse(body as any as string);
        }
    } catch (error) {
        /**/
    }

    try {
        opt.query = parseQueryParams(url);
    } catch (error) {
        /**/
    }

    return undefined;
}
