import axios from './net';

// 获取单个问卷信息
export function getQuestionService<T = any>(id: string) {
    const url = `/api/question/${id}`;
    return axios.get<T, T>(url);
}

// 创建问卷
export function createQuestionService<T = any>() {
    const url = `/api/question`;
    return axios.post<T, T>(url);
}

export type ListSearchOption = {
    keyword: string;
    isStar: boolean;
    isDeleted: boolean;
};

// 查询问卷列表
export function getQuestionListService<T = { list: QuestionData[]; total: number }>(opt: Partial<ListSearchOption>) {
    const url = `/api/question`;
    return axios.get<T, T>(url, { params: opt });
}
