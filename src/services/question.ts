import axios from './net';

export function getQuestionService(id: string) {
    const url = `/api/question/${id}`;
    return axios.get(url);
}
