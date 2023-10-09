import axios from './net';

// 获取单个问卷信息
export function getQuestionService<T>(id: string) {
    const url = `/api/question/${id}`;
    return axios.get<T, T>(url);
}

// 创建问卷
export function createQuestionService<T>() {
    const url = `/api/question`;
    return axios.get<T, T>(url);
}
