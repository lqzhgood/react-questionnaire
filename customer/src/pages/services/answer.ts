import { get, post } from './ajax';

export async function postAnswer(answerInfo: any) {
    await post('/api/answer', answerInfo);
    return {
        code: 200,
        msg: 'ok',
        data: {},
    };
}
