import { ComponentConfList, ComponentPropsType } from '@/components/QuestionComponents';
import { QuestionComponentType } from '@/const/question';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ComponentInfoType<T extends ComponentConfList = ComponentConfList> = {
    fe_id: string;
    type: keyof T;
    title: string;
    props: T[QuestionComponentType]['defaultProps'];
};

export type ComponentStateType = {
    componentList: ComponentInfoType[];
    selectedId: string;
};

const INIT_STATE: ComponentStateType = {
    selectedId: '',
    componentList: [],
};

export const componentsSlice = createSlice({
    name: 'components',
    initialState: INIT_STATE,
    reducers: {
        resetComponents: (state, action: PayloadAction<ComponentStateType>) => {
            return action.payload;
        },

        changeSelectedId: (state, action: PayloadAction<string>) => {
            state.selectedId = action.payload;
        },
    },
});

export const { resetComponents, changeSelectedId } = componentsSlice.actions;
