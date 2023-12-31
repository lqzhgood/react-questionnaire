import { QuestionData, QuestionEditData } from '@/types/question';
import axios from './net';

// 创建问卷
export function createQuestionService<T = { id: string }>() {
    const url = `/api/question`;
    return axios.post<T, T>(url);
}

export type ListSearchOption = {
    keyword: string;
    page: number;
    pageSize: number;
    isStar: boolean;
    isDeleted: boolean;
};

// 查询问卷列表
export function getQuestionListService<T = { list: QuestionData[]; total: number }>(opt: Partial<ListSearchOption>) {
    const url = `/api/question`;
    return axios.get<T, T>(url, { params: opt });
}

// 更新问卷
export function updateQuestionService<T = Record<string, never>>(id: string, opt: Partial<QuestionData>) {
    const url = `/api/question/${id}`;
    return axios.patch<T, T>(url, { params: opt });
}

// 复制问卷
export function duplicateQuestionService<T = { _id: string }>(id: string) {
    const url = `/api/question/duplicate/${id}`;
    return axios.post<T, T>(url);
}

// 删除问卷
export function deleteQuestionService<T = Record<string, never>>(ids: string[]) {
    const url = `/api/question`;
    return axios.delete<T, T>(url, { params: { ids } });
}

// 获取单个问卷表单编辑信息
export function getQuestionService<T = QuestionEditData>(id: string) {
    const url = `/api/question/edit/${id}`;
    return axios.get<T, T>(url);
}

export function updateQuestionEditService<T = Record<string, never>>(id: string, data: Partial<QuestionEditData>) {
    const url = `/api/question/edit/${id}`;
    return axios.patch<T, T>(url, data);
}
