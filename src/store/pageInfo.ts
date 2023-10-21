import { PayloadAction, createSlice, nanoid } from '@reduxjs/toolkit';

export type PageInfoType = {
    id: string;
    title: string;
    desc?: string;
    isPublished?: boolean;
    js?: string;
    css?: string;
};

const INIT_STATE: PageInfoType = { id: nanoid(), title: '', desc: '', isPublished: false, js: '', css: '' };

export const pageInfoSlice = createSlice({
    name: 'pageInfo',
    initialState: INIT_STATE,
    reducers: {
        resetPageInfo: (state: PageInfoType, action: PayloadAction<PageInfoType>) => {
            return action.payload;
        },
        updatePageInfo: (state: PageInfoType, action: PayloadAction<Partial<Omit<PageInfoType, 'id'>>>) => {
            Object.assign(state, action.payload);
        },
    },
});

export const { resetPageInfo, updatePageInfo } = pageInfoSlice.actions;
