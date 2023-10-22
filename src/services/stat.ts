import axios from './net';

export type StatDetail = {
    _id: string;
    [key: string]: string;
};

export type StatListType = {
    total: number;
    list: StatDetail[];
};

export function getStatListService<T = StatListType>(questionId: string, opt: { page: number; pageSize: number }) {
    const url = `/api/stat/${questionId}`;
    return axios.get<T, T>(url, { params: opt });
}
