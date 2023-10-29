import { get } from './ajax';

export async function getQuestionById(id: string) {
    const url = `/api/question/${id}`;
    await get(url);

    return {
        code: 200,
        msg: 'ok',
        data: {
            id: '123',
            title: '前端调查表',
        },
    };
}
