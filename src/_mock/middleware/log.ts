import { MockCbOptions } from '@/types/net';

export default function (opt: MockCbOptions) {
    console.log(`%c ${opt.type} | ${opt.url} `, 'color:#fff;background:#7986cb', opt);

    return undefined;
}
